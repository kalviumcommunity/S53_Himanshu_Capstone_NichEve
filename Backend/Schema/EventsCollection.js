const mongoose = require('mongoose');
const Event = new mongoose.Schema({
    eventDetails:
        [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"eventList"
            }
        ]
    ,
    Name:{
        type:String,
        required : true,
    },
    Img:{
        type:String,
        required : true,
    },
    Price:{
        type: String,
        required: true,
    },
    Location:{
        type: String,
        required : true,
    },
    Time:{
        type : String,
        required : true,
    },
    Email:{
        type:String
    }
})
const AllEvents = mongoose.model('allEvent', Event);
module.exports = AllEvents;