import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'
import DateObject from "react-date-object";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import storage from '../../FirebaseConfig/Config'
import { useUser, SignedOut, SignInButton } from '@clerk/clerk-react'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

// import storage from '../../../FirebaseConfig/Config'

const BlogForm = () => {
    const [image,SetImage] = useState("")
    const [AllImages,setAllImages] = useState("")
    const [ShowImg,IsShowImg] = useState("")
    const Use = useUser();
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    var date = new DateObject();
    var dateVal = date.format();
    const Navigate = useNavigate();
    const [FormData, setFormData] = useState({
        Location: "",
        Title: "",
        Description:""
    })
    console.log(Use);
    const UserName = Use?.user?.username;
    const Name = UserName ? UserName.charAt(0).toUpperCase() + UserName.slice(1) : '';
    console.log(Name);
    const Profile = Use?.user?.imageUrl;
    console.log(Profile);
    const State = FormData.Location
    const Location = State? State.charAt(0).toUpperCase() + State.slice(1) : '' ;
    const Date = dateVal;
    const ImagePost = AllImages
    const Email = Use?.user?.emailAddresses[0]?.emailAddress
    const Title = FormData.Title;
    const Description = FormData.Description;
    console.log(Email);

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...FormData,
            [name]: value,
        })
    }
    const URL = "http://localhost:4000/BlogForm"
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(URL, { Name, Profile, Location, Date, ImagePost, Email, Title, Description })
            .then(res => {
                console.log(res.data)
                Navigate('/Blog')
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleUpload= () => {
        if(image !== null){
            const imgRef = ref(storage,`Blog/${v4()}`)
            uploadBytes(imgRef,image).then(val=>{
                console.log(val)
                getDownloadURL(val.ref).then(url=>{
                    setAllImages(url)
                })
            })
        }
    }
    console.log("images: ", image);
    console.log('AllImages: ', AllImages);
    console.log(Location);
    // console.log(AllImages.length);
    useEffect(()=>{
        IsShowImg(AllImages);
    },[handleUpload,AllImages,setAllImages,IsShowImg,ShowImg])
    return (
        <main className={!Use.isSignedIn ? 'z-10 bg-black pb-20 h-screen' : 'z-10 bg-black pb-20'}>
            <Navbar />
            {!Use.isSignedIn ? (
                <div className='mt-10'>
                    <div className="flex justify-evenly">
                        <div>
                            <img src="/Form/Lock.svg" alt="Lock" className=" w-[32rem] invert" />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <p className='text-white text-3xl'>Login First to Start Posting Happiness</p>
                            <SignedOut>
                                <SignInButton>
                                    <button className='text-white text-xl bg-orange-400 w-28 rounded-lg h-9 self-center mt-16'>Login</button>
                                </SignInButton>
                            </SignedOut>
                        </div>
                    </div>
                </div>
            )
                :
                (
                    <div className='-mt-24'>
                        <div className='h-auto flex justify-center '>
                            <div className=" w-2/4 bg-white h-auto mt-52 rounded-lg flex justify-evenly">
                                <div className='flex justify-center'>
                                    <img src="/Blog_page_img/Post.svg" alt="" className="w-60 " />
                                </div>
                                <div className='flex flex-col pt-24 pb-20'>
                                    <h1 className=" font-Inter text-xl font-bold">Post Your Blog</h1>
                                    <form onSubmit={handleSubmit} className='flex flex-col h-auto justify-between mt-4'>
                                        <div class="flex items-center justify-center">
                                            <div>
                                                <div className='w-96 h-64'>
                                                    <img src={AllImages.length>0 ? AllImages : "photo.png"} alt="" className='w-96 h-64 rounded-md' />
                                                </div>
                                                <div>
                                                    <input type="file" onChange={(e) => SetImage(e.target.files[0])} name='Img' />
                                                    <button type='button' onClick={handleUpload} className='bg-red-500 rounded-lg w-20 h-7 outline-none'>Upload</button>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="text" placeholder='State (e.g Delhi)' name='Location' onChange={handleChange} value={Location} className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none mt-4" />
                                        <input type="text" placeholder='Title' name='Title' onChange={handleChange} value={Title} className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none mt-4" />
                                        <textarea name="Description" cols="100" rows="100" onChange={handleChange} value={Description} placeholder='Description' className=' bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-20 w-60 pl-5 outline-none mt-7 pt-1'></textarea>
                                        <button className="bg-[#806DD6] rounded-lg text-white h-8">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </main>
    )
}

export default BlogForm