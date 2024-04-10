const mongoose = require('mongoose');
const Blog = new mongoose.Schema({
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
        required: true,
    },
    Message:{
        type:String,
        required: true,
    }
})
const BForm = mongoose.model('BlogPosts', Blog)
module.exports = BForm;