const express = require('express')
const app = express();
const router = express.Router();
const {isConnected} = require('./Database/Db')
// const Event = require('./Schema/Schema')
const BForm = require('./Schema/BlogSchema')
const ListForm = require('./Schema/List_with_us_Schema')
app.use(express.json())
router.get('/',(req,res)=>{
    res.send(`Database Connection Status: ${isConnected()? 'Connection Successful' : 'Connection Unsuccessful'}`)
})
// router.get('/Events',async(req,res)=>{
//     try {
//         const AllEvents = await Event.find();
//         res.send({Events:AllEvents})
//     } catch (error) {
//         console.error("Error occurred while fetching events:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
    
// })

// router.post('/Events',async(req,res)=>{
//     try {
//         const data = req.body;
//         const new_event_data = new Event(data);
//         const response = await new_event_data.save();
//         console.log("Data Saved");    
//         res.status(200).json(response)    
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({error:"Internal server error"})
//     }
// })


router.post('/PostBlog', async(req,res)=>{
    try{
        const data = req.body;
        const new_Blog_Post = new BForm(data);
        const response = await new_Blog_Post.save();
        console.log("Data Saved");
        return res.status(201).json(response);
    }catch(err){
        console.log(err);
        return res.status(400).json({error:"bad request"});
    }
})
router.get('/PostBlog',async(req,res)=>{
    try {
        const AllPosts =  await BForm.find();
        res.send({Posts:AllPosts})
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal server error"})
    }
})
router.post('/ListWithUs', async(req,res)=>{
    try {
        const data = req.body;
        const List_Requests = new ListForm(data);
        const response = await List_Requests.save();
        console.log(response);
        return res.status(201).json(response);
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:"Bad request"});
    }
})
router.get('/ListWithUs', async (req,res)=>{
    try {
        const Approved_List = await ListForm.find();
        return res.status(200).send({List:Approved_List});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal server error"})
    }
})

module.exports=router;