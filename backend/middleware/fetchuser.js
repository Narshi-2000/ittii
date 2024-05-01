const jwt = require('jsonwebtoken');

const fetchuser =(req, res, next) =>{
    //get the token from header
    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({error:"Access Denied"});
    }

    //verify the token
    try{
        const data = jwt.verify(token, process.env.JWT_SECRET );
        req.user = data.user;
        next();

    }catch(error){
        res.status(401).send({error:"Please authenticate using valid token"});
    }
}

module.exports = fetchuser;