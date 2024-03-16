const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
console.log(port);
const { connection, isConnected } = require('./Database/Db');
const Router = require('./route')
app.use(express.json())

const errorHandler = (err, req, res, next) => {
    if(err){
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }else{
        res.status(200).send('ok');
    }
};
app.use(errorHandler)

const startserver = async()=>{
    try{
        await connection();
        app.use('/',Router)
        app.use(express.json())
        app.listen(port,()=>{
            console.log(`port is running on ${port}`);
        })
    }
    catch(err){
        console.log("error");
    }
}
startserver()


module.exports={startserver}
