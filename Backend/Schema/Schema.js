const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Date:{
        type: String
        // required:true
    },
    Guests:{
        type: String
    },
    Venue:{
        type: String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    Description:{
        type:String
    },
    Organiser:{
        type:String
    }
})

const Event = mongoose.model('events', Schema);
module.exports = Event;