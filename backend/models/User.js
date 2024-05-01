const mongoose =require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        reuired:true
    },
    email:{
        type:String,
        reuired: true,
        unique: true
    },
    password:{
        type:String,
        required:true
    }
});

const User = mongoose.model('user', userSchema)
module.exports = User;