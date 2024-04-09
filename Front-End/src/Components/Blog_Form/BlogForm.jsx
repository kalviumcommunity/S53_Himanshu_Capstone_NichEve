import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'
import DateObject from "react-date-object";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogForm = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    var date = new DateObject();
    var dateVal = date.format();
    const Navigate = useNavigate();
    const [FormData, setFormData] = useState({
        Name:"",
        Profile:"",
        Location:"",
        Date:dateVal,
        Message:""
    })
    const Name = FormData.Name;
    const Profile = FormData.Profile;
    const Location = FormData.Location;
    const Date = FormData.Date;
    const Message = FormData.Message;

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...FormData,
            [name]: value,
        })
    }
    const URL = "http://localhost:4000/PostBlog"
    const handleSubmit = async (e) =>{
        e.preventDefault();
        axios.post(URL, {Name,Profile,Location,Date,Message})
        .then(res=>{console.log(res.data)
        Navigate('/Blog')
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <main className='z-10 bg-black'>
            <Navbar />
            <div className='-mt-24'>
                <div className='h-screen flex justify-center '>
                    <div className=" w-2/4 bg-white h-2/3 mt-52 rounded-lg flex justify-evenly">
                        <div className='flex justify-center'>
                                <img src="/Blog_page_img/Post.svg" alt="" className="w-60 " />
                        </div>
                        <div className='flex flex-col pt-24'>
                            <h1 className=" font-Inter text-xl font-bold">Post Your Message</h1>
                            <form onSubmit={handleSubmit} className='flex flex-col h-80 justify-between mt-4'>
                                <input type="text" onChange={handleChange} value={FormData.Name} placeholder='Name' name='Name' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                <input type="text" onChange={handleChange} value={FormData.Profile} placeholder='Profile-url' name='Profile' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                <input type="text" onChange={handleChange} value={FormData.Location} placeholder='Location' name='Location' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                <input type="text" value={FormData.Date} name='Date' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                <textarea name="Message" onChange={handleChange} value={FormData.Message} placeholder='Message' id="" cols="20" rows="6" className='bg-gray-300 text-gray-500 outline-none rounded-md pl-5 pt-1'></textarea>
                                <button className="bg-[#806DD6] rounded-lg text-white h-8">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BlogForm