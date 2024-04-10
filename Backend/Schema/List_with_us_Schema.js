const mongoose = require('mongoose')
const List_form = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
    },
    Message:{
        type:String,
        required:true,
    },
    Approved:{
        type:Boolean,
        default: false,
    }
})
const ListForm = mongoose.model("Request",List_form)
module.exports = ListForm;