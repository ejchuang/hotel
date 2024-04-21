const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
    name:String,
    price:{
        type:Number,
        required:[true,"價格必填"]
    },
    rating:Number,
    createdAt:{
        type:Date,
        default:Date.now,
        select:false //保護起來不讓前台看到
    }
},{
    versionKey:false
})

const Room = mongoose.model('Room',roomSchema);

module.exports = Room;