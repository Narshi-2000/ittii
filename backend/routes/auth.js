const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

//Route 1: create a new user via 'api/auth/createuser' : no login required
router.post('/createuser', [
    body("name", "Enter a valid name").isLength({min:3}),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({min:5})
], async(req, res)=>{
    
    let success = false;

    try{
        //if there are errors in request, return bad request and the errors
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

        //check whether user with same email exists
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({success, error:"Sorry a user with same email exists."});
        }

        //create a secure password
        const salt = await bcrypt.genSalt(17);
        secpass = await bcrypt.hash(req.body.password, salt);

        //create a new user
        user = await User.create({
            name: req.body.name,
            password: secpass,
            email: req.body.email
        });

        //send jwt auth token with user id
        const data = {
            user:{
                id:user.id
            }
        }

        const authtoken = jwt.sign(data, process.env.JWT_SECRET);
        success=true;
        res.json({success, authtoken});

    }catch(error){
        res.status(500).send({success, error: "Internal Server error occured"});
    }
});

//Route 1: user login via 'api/auth/login' : no login required
router.post('/login',[
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists()
], async(req, res)=>{

    let success = false;

    try{
        //if there are errors in request, return bad request and the errors
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }

        const {email, password} = req.body;

        //check if the user with email exists
        let user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({success, error: "Login with correct credentails"});
        }

        //check whether password is correct or not
        const checkpass = await bcrypt.compare(password, user.password);
        if(!checkpass){
            return res.status(400).json({success, error: "Login with correct credentails"});
        }

        //send jwt auth token with user id
        const data = {
            user:{
                id:user.id
            }
        }

        const authtoken = jwt.sign(data, process.env.JWT_SECRET);
        success=true;
        res.json({success, authtoken});

    }catch{
        res.status(500).send({success, error: "Internal Server error occured"});
    }

})

//Route:3 get user data: login required
router.post('/getuser', fetchuser, async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select("-password");
        res.send(user);
    }catch(error){
        res.status(500).send("Internal Server error occured");
    }
})

module.exports = router;