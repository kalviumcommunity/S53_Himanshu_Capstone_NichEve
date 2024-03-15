const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    }
})

const Data = mongoose.model('Events', Schema);
module.exports = Data;