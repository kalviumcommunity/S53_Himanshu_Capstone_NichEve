const express = require('express')
const app = express();
const router = express.Router();
const {isConnected} = require('./Database/Db')
// const Event = require('./Schema/Schema')
const BForm = require('./Schema/BlogSchema')
const eventSchema=require("./Schema/EventDetails")
const ListForm = require('./Schema/List_with_us_Schema')
const AllEvents = require('./Schema/EventsCollection')
const BlogDescription = require('./Schema/Blog2')
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


// router.post('/PostBlog', async(req,res)=>{
//     try{
//         const data = req.body;
//         const new_Blog_Post = new BForm(data);
//         const response = await new_Blog_Post.save();
//         console.log("Data Saved");
//         return res.status(201).json(response);
//     }catch(err){
//         console.log(err);
//         return res.status(400).json({error:"bad request"});
//     }
// })
// router.get('/PostBlog',async(req,res)=>{
//     try {
//         const AllPosts =  await BForm.find();
//         res.send({Posts:AllPosts})
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({error:"Internal server error"})
//     }
// })
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
router.get('/Event', async(req,res)=>{
    try {
        const Events = await AllEvents.find();
        return res.status(200).send({Events:Events});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal server error"})
    }
})


router.get('/Eventlist/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const Events = await AllEvents.findById(id).populate("eventDetails");
        return res.status(200).send({Events:Events});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal server error"})
    }
})


router.post('/EventForm', async(req, res) => {
    try {
        var {Name, Img, Price, Location, Time, Email} = req.body;
        const data = {Name, Img, Price, Location, Time, Email};
        var {Name, BgImg, CoverImg, Like, Location, Date, Description, Guest, GuestImg} = req.body;
        const data2 = {Name, BgImg, CoverImg, Like, Location, Date, Description, Guest, GuestImg};
        
        const Event = new AllEvents(data);
        const response = await Event.save();
        
        const eventDetails = await eventSchema.create(data2);
        
        const id = response._id;
        const event = await AllEvents.findByIdAndUpdate(id, {
            $push: {"eventDetails": eventDetails._id}
        });
        
        console.log(response);
        console.log(eventDetails);
        
        return res.status(201).json({response, eventDetails});
    } catch (error) {
        console.error('Error in EventForm route:', error);
        return res.status(500).json({error: 'Internal server error. Please try again later.'});
    }
});

router.delete('/Dashboard/:id', async(req,res)=>{
    try {
        const ID = req.params.id
        const new_data = await AllEvents.findById(ID)
        const eventId = new_data.eventDetails
        eventId.forEach(async(e)=>{
            await eventSchema.findByIdAndDelete(e);
        })
        await AllEvents.findByIdAndDelete(ID);
        res.send(new_data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
    }
})

router.get('/Blog', async(req,res)=>{
    try {
        const BlogPosts = await BForm.find();
        return res.status(200).send({Posts:BlogPosts});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal server error"})
    }
})

router.get('/Blog/:id', async(req,res)=>{
    try {
        const {id}=req.params;
        const BlogPosts = await BForm.findById(id).populate("BlogList");
        return res.status(200).send({BlogPost:BlogPosts});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error:"Internal server error"})
    }
})
router.post('/BlogForm', async(req,res)=>{
    try {
        var {Name, Profile, Location, Date, ImagePost, Email,Title} = req.body;
        const data = {Name, Profile, Location, Date, ImagePost, Email,Title};
        var {Title, Description, Name, Profile, Location, Date, ImagePost} = req.body;
        const data2 = {Title, Description, Name, Profile, Location, Date, ImagePost};
        
        const BlogPosts = new BForm(data);
        const response = await BlogPosts.save();
        
        const BlogDetails = await BlogDescription.create(data2);
        
        const id = response._id;
        const Blog = await BForm.findByIdAndUpdate(id, {
            $push: {"BlogList": BlogDetails._id}
        });
        
        console.log(response);
        console.log(BlogDetails);
        
        return res.status(201).json({response, BlogDetails});
    } catch (error) {
        console.error('Error in EventForm route:', error);
        return res.status(500).json({error: 'Internal server error. Please try again later.'});
    }
})
router.delete('/DashboardBlog/:id', async(req,res)=>{
    try {
        const ID = req.params.id
        const new_data = await BForm.findById(ID)
        const BlogId = new_data.BlogList
        BlogId.forEach(async(e)=>{
            await BlogDescription.findByIdAndDelete(e);
        })
        await BForm.findByIdAndDelete(ID);
        res.send(new_data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
    }
})
// router.put('/DashboardBlog/:id', async(req,res)=>{
//     try {
//         const ID = req.params.id
//         const new_data = await BForm.findById(ID)
//         const BlogId = new_data.BlogList
//         BlogId.forEach(async(e)=>{
//             await BlogDescription.findByIdAndUpdate({_id:e._id},{Title:e.Title, Description:e.Description, Location:e.Location, ImagePost:e.ImagePost});
//         })
//         await BForm.findByIdAndUpdate({_id:ID},{Location:req.body.Location, ImagePost:req.body.ImagePost, Title:req.body.Title});
//         res.send(new_data)
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error:"Internal Server Error"})
//     }
// })
router.put('/DashboardBlog/:id', async (req, res) => {
    try {
        const ID = req.params.id;
        const new_data = await BForm.findById(ID).populate('BlogList');
        
        if (!new_data) {
            return res.status(404).json({ error: "Blog post not found" });
        }
        
        const BlogId = new_data.BlogList;
        
        for (const blogDesc of BlogId) {
            await BlogDescription.findByIdAndUpdate(
                blogDesc._id,
                {
                    Title: req.body.Title || blogDesc.Title,
                    Description: req.body.Description || blogDesc.Description,
                    Location: req.body.Location || blogDesc.Location,
                    ImagePost: req.body.ImagePost || blogDesc.ImagePost
                }
            );
        }
        
        await BForm.findByIdAndUpdate(
            {_id: ID},
            {
                Name: req.body.Name || new_data.Name,
                Profile: req.body.Profile || new_data.Profile,
                Location: req.body.Location || new_data.Location,
                Date: req.body.Date || new_data.Date,
                ImagePost: req.body.ImagePost || new_data.ImagePost,
                Email: req.body.Email || new_data.Email,
                Title: req.body.Title || new_data.Title
            }
        );
        
        const updated_data = await BForm.findById(ID).populate('BlogList');
        
        res.status(200).json(updated_data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// router.post('/EventForm2/:id', async(req,res)=>{
//     try {
//         const {id} =req.params;
//         const eventDetails=await eventSchema.create(req.body);
//         // const data = req.body;
//         // const Event = new eventSchema(data);
//         // const response = await Event.save();
//         const event=await AllEvents.findByIdAndUpdate(id ,
//         {
//             $push: {"eventDetails":eventDetails._id}
//         }
//         )
//         console.log(eventDetails);
//         return res.status(201).json(eventDetails);
//     } catch (error) {
//         console.log(error);
//         return res.status(400).json({error:"Bad request"});
//     }
// })

module.exports=router;