const express = require('express')
const app = express()
require('dotenv').config({path:'../.env'})
const port = process.env.PORT
console.log(port);
const { connection, isConnected } = require('../Database/Db')

const errorHandler = (err, req, res, next) => {
    if(err){
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }else{
        res.status(200).send('ok')
    }
};
app.use(errorHandler)

const startserver = async()=>{
    try{
        await connection();
        app.get('/',(req,res)=>{
            res.send(`Database Connection Status: ${isConnected()? 'Connection Successful' : 'Connection Unsuccessful'}`)
        })
        app.listen(port,()=>{
            console.log(`port is running on ${port}`);
        })
    }
    catch(err){
        console.log("error");
    }
}
startserver()



