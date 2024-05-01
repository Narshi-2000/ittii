const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }, 
    id :{
        type: String,
        required: true
    },
    image:{
        type:String
    },
    title:{
        type:String
    },
    price:{
        type:Number
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('userorders', orderSchema);