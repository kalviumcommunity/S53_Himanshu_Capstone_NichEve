const mongoose = require('mongoose');
const Blog = new mongoose.Schema({
    BlogList: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"BlogDescription"
        }
    ],
    Name:{
        type:String,
        required: true
    },
    Profile:{
        type:String,
        required: true,
    },
    Location:{
        type:String,
        required: true,
    },
    Date:{
        type:String,
    },
    ImagePost:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
    },
    Title:{
        type:String,
        required: true
    },
})
const BForm = mongoose.model('BlogPosts', Blog)
module.exports = BForm;