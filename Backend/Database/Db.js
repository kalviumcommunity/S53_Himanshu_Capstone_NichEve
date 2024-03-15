const mongoose = require('mongoose')
require('dotenv').config();
const db = process.env.database
const connection = async () => {
    try{
        await mongoose.connect(db)
        console.log("Connection successful to database");
    }catch(err){
        console.log(err,"error connection in db");
    }
}
const isConnected = ()=>{
    return mongoose.connection.readyState===1;
    
}
module.exports={connection, isConnected}