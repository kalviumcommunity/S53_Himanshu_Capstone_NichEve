const express = require('express')
const app = express();
const router = express.Router();
const {isConnected} = require('./Database/Db')
const Event = require('./Schema/Schema')
app.use(express.json())
router.get('/',(req,res)=>{
    res.send(`Database Connection Status: ${isConnected()? 'Connection Successful' : 'Connection Unsuccessful'}`)
})
router.get('/Events',async(req,res)=>{
    try {
        const AllEvents = await Event.find();
        res.send({Events:AllEvents})
    } catch (error) {
        console.error("Error occurred while fetching events:", error);
        res.status(500).json({ error: "Internal server error" });
    }
    
})
module.exports=router;