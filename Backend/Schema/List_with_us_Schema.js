const mongoose = require('mongoose')
const List_form = new mongoose.Schema({
    from_name:{
        type:String,
        required:true
    },
    from_email:{
        type:String,
        required:true,
    },
    message:{
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