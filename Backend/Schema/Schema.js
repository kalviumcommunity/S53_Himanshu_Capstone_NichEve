const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        required:true
    },
    Guests:{
        type: String
    },
    Venue:{
        type:Data,
        required:true
    },
    Image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    Description:{
        type:String
    },
    Organiser:{
        type:String
    }
})

const Data = mongoose.model('Events', Schema);
module.exports = Data;