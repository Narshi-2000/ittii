const mongoose = require('mongoose');

const mongodb = async() =>{
    mongoose.connect(process.env.mongoURI);
    console.log("connected to mongoose");
}

module.exports = mongodb;