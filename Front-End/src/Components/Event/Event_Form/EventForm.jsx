import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from '../../Reusable_comp/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import storage from '../../../FirebaseConfig/Config'
import { useUser } from '@clerk/clerk-react'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
const EventForm = () => {
    const [image,setImage] = useState('')
    const [image2,setImage2] = useState('')
    const [image3,setImage3] = useState('')
    const [image4,setImage4] = useState('')
    const [AllImages,setAllImages] = useState("")
    const [AllImages2,setAllImages2] = useState("")
    const [AllImages3,setAllImages3] = useState("")
    const [AllImages4,setAllImages4] = useState("")

    const Use = useUser();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    const Navigate = useNavigate();
    const [FormData, setFormData] = useState({
        Name: "",
        Price: "",
        Location: "",
        Time: "",
        Date: "",
        Description:"",
        Guest:""
    })
    const Name = FormData.Name;
    const Img = AllImages;
    const Date = FormData.Date;
    const Description = FormData.Description;
    const Guest = FormData.Guest;
    const BgImg = AllImages3;
    const CoverImg = AllImages2;
    const GuestImg = AllImages4;
    const Price = FormData.Price;
    const Location = FormData.Location;
    const Time = FormData.Time;
    const Like = 0;

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...FormData,
            [name]: value,
        })
    }
    const handleClick1= () => {
        if(image !== null){
            const imgRef = ref(storage,`Files/${v4()}`)
            uploadBytes(imgRef,image).then(val=>{
                console.log(val)
                getDownloadURL(val.ref).then(url=>{
                    setAllImages(url)
                })
            })
        }
    }
    const handleClick2= () => {
        if(image2 !== null){
            const imgRef = ref(storage,`Cover/${v4()}`)
            uploadBytes(imgRef,image2).then(val=>{
                console.log(val)
                getDownloadURL(val.ref).then(url=>{
                    setAllImages2(url)
                })
            })
        }
    }
    const handleClick3= () => {
        if(image3 !== null){
            const imgRef = ref(storage,`Background/${v4()}`)
            uploadBytes(imgRef,image3).then(val=>{
                console.log(val)
                getDownloadURL(val.ref).then(url=>{
                    setAllImages3(url)
                })
            })
        }
    }
    const handleClick4= () => {
        if(image4 !== null){
            const imgRef = ref(storage,`Guest/${v4()}`)
            uploadBytes(imgRef,image4).then(val=>{
                console.log(val)
                getDownloadURL(val.ref).then(url=>{
                    setAllImages4(url)
                })
            })
        }
    }
    console.log(AllImages);
    const URL = "http://localhost:4000/EventForm"
    // const URL2 = "http://localhost:4000/EventForm2"
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(URL, { Name, Img, Price, Location, Time, BgImg, CoverImg,Like, Date, Description, Guest, GuestImg })
            .then(res => {
                console.log(res.data)
                Navigate('/Event')
            })
            .catch(err => {
                console.log(err);
            })
        // await axios.post(URL2, {Name, BgImg, CoverImg,Like, Location, Date, Description, Guest, GuestImg})
        //     .then(res => {
        //         console.log(res.data)
        //         Navigate('/Event')
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
    return (
        <main className="bg-black h-auto pb-16">
            <Navbar />
            <div className='-mt-24'>
                <div className=' flex justify-center h-auto'>
                    <div className=" w-3/5 bg-white mt-52 rounded-lg flex justify-around pb-14">
                        <div className='flex justify-center'>
                            <img src="/Blog_page_img/Post.svg" alt="" className="w-80 " />
                        </div>
                        <div className='flex flex-col pt-24'>
                            <h1 className=" font-Inter text-xl font-bold">Post Your Event</h1>
                            <form onSubmit={handleSubmit} className='flex flex-col h-auto justify-evenly mt-4'>
                                <div>
                                    <p className='font-bold'>Event Name:</p>
                                    <input type="text" onChange={handleChange} value={FormData.Name} placeholder='Enter Event Name' name='Name' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                </div>
                                <div>
                                    <p className='font-bold'>Upload Poster Img:</p>
                                    <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder='Profile-url' name='Img' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                    <button type='button' onClick={handleClick1} className="bg-red-500 rounded-lg w-20 h-7 outline-none">Upload</button>
                                </div>
                                <div>
                                    <p className='font-bold'>Location:</p>
                                    <input type="text" onChange={handleChange} value={FormData.Location} placeholder='Enter Location' name='Location' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                </div>
                                <div>
                                    <p className='font-bold'>Price:</p>
                                    <input type="text" onChange={handleChange} value={FormData.Price} placeholder='Enter Event Price' name='Price' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                </div>
                                <div>
                                    <p className='font-bold'>Time:</p>
                                    <input type='text' name="Time" onChange={handleChange} value={FormData.Time} placeholder='Time (e.g 3 pm - 11 pm)' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                </div>
                                <div>
                                    <p className='font-bold'>Upload Cover Img:</p>
                                    <input type="file" onChange={(e) => setImage2(e.target.files[0])} placeholder='Profile-url' name='Img' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                    <button type='button' onClick={handleClick2} className="bg-red-500 rounded-lg w-20 h-7 outline-none">Upload</button>
                                </div>
                                <div>
                                    <p className='font-bold'>Upload Background Img:</p>
                                    <input type="file" onChange={(e) => setImage3(e.target.files[0])} placeholder='Profile-url' name='Img' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                    <button type='button' onClick={handleClick3} className="bg-red-500 rounded-lg w-20 h-7 outline-none">Upload</button>
                                </div>
                                <div>
                                    <p className='font-bold'>Date:</p>
                                    <input type='date' name="Date" onChange={handleChange} value={FormData.Date} className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                </div>
                                <div>
                                    <p className='font-bold'>Description:</p>
                                    <textarea name="Description" cols="60" rows="60" onChange={handleChange} value={FormData.Description} placeholder='About Event' className=' bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-12 w-60 pl-5 outline-none'></textarea>
                                </div>
                                <div>
                                    <p className='font-bold'>Chief Guest:</p>
                                    <input type='text' name="Guest" onChange={handleChange} value={FormData.Guest} placeholder='Enter Guest Name' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                </div>
                                <div>
                                    <p className='font-bold'>Upload Chief Guest Img:</p>
                                    <input type="file" onChange={(e) => setImage4(e.target.files[0])} placeholder='Profile-url' name='Img' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none" />
                                    <button type='button' onClick={handleClick4} className="bg-red-500 rounded-lg w-20 h-7 outline-none">Upload</button>
                                </div>
                                <button className="bg-[#806DD6] rounded-lg text-white h-8">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EventForm