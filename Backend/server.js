const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const errorHandler = (err, req, res, next) => {
    if(err){
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }else{
        res.status(200).send('ok')
    }
};
app.use(errorHandler)

app.get('/',(req,res)=>{
    res.send("My name is Kallu Kaaliya")
})
app.listen(port,()=>{
    console.log(`port is running on ${port}`);
})
