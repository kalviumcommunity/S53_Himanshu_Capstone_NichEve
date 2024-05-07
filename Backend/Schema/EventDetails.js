const mongoose = require('mongoose');
const EventDetails = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    BgImg:{
        type:String,
        required: true
    },
    CoverImg:{
        type:String,
        required:true 
    },
    Like:{
        type:Number
    },
    Location:{
        type:String,
        required: true,
    },
    Date:{
        type:String,
        required: true,
    },
    Description:{
        type:String,
        required: true
    },
    // Guest: [
    //     {
    //         Name: {
    //             type: String,
    //         },
    //         Img: {
    //             type: String,
    //         }
    //     }
    // ]
    Guest : {
        type: String,
        required: true,
    },
    GuestImg : {
        type:String,
        required: true
    }
    })
const eventSchema = mongoose.model('eventList',EventDetails)
module.exports = eventSchema; 