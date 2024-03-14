const express = require('express')
const app = express()
const port = 4000;

app.get('/',(req,res)=>{
    res.send("My name is Kallu Kaaliya")
})
app.listen(port,()=>{
    console.log(`port is running on ${port}`);
})