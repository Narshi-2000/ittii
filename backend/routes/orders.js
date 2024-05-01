const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Order = require('../models/Order');
const UserOrder = require('../models/UserOrder');

//ROUTE: 1 : fetch all orders, login required
router.get("/fetchallorders", fetchuser, async(req, res)=>{
    try{
        const orders = await Order.find({user: req.user.id});
        res.json(orders);
    }catch(error){
        res.status(500).send("Internal server error occurred");
    }
});

//ROUTE: 2: Add order : POST : "api/orders/addorder". login required
router.post("/addorder", fetchuser, async(req, res)=>{
    try{
        const {id, image, title, price} = req.body;
        const order = new Order({
            id,
            image,
            title,
            price,
            user: req.user.id
        });
        
        const savedorder = await order.save();
        res.json(savedorder);

    }catch(error){
        res.status(500).send("Internal server error occurred");
    }
});

//Route 3: delete order: DELETE: 'api/orders/deleteorder' login required
router.delete('/deleteorder/:id', fetchuser, async(req, res)=>{
    try{
        let oldorder =await Order.findById(req.params.id);
        if(!oldorder){
            return res.status(404).send("not found");
        }

        if(oldorder.user.toString() != req.user.id){
            return res.status(401).send("not allowed");
        }

        oldorder =await Order.findByIdAndDelete(req.params.id);
        res.json({"success": "order has been deleted"});

    }catch(error){
        res.status(500).send("Internal server error occurred");
    }
})

//Route 3: delete order: DELETE: 'api/orders/deleteallorders' login required
router.delete('/deleteallorders', fetchuser, async(req, res)=>{
    try{
        
        const oldorder =await Order.deleteMany({});
        res.json({"success": "order has been deleted"});

    }catch(error){
        res.status(500).send("Internal server error occurred");
    }
})

//Route 4: Add userorder: 'api/orders/adduserorder': login required
router.post("/adduserorder", fetchuser, async(req, res)=>{
    try{
        const {id, image, title, price} = req.body;
        const order = new UserOrder({
            id,
            image,
            title,
            price,
            user: req.user.id
        });
        
        const savedorder = await order.save();
        res.json(savedorder);

    }catch(error){
        res.status(500).send("Internal server error occurred");
    }
});

//Route 5: get all userorders: 'api/orders/getuserorders': login required
router.get("/getuserorders", fetchuser, async(req, res)=>{
    try{
        const orders = await UserOrder.find({user: req.user.id});
        res.json(orders);
    }catch(error){
        res.status(500).send("Internal server error occurred");
    }
});

module.exports = router;

