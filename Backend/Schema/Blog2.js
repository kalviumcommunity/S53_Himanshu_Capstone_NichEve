const mongoose = require('mongoose');
const Blog2 = new mongoose.Schema({
    Title:{
        type:String,
        required: true
    },
    Description:{
        type:String,
        required: true,
    },
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
})
const BlogDescription = mongoose.model('BlogDescription', Blog2)
module.exports = BlogDescription;