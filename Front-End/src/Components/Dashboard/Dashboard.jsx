// import React, { useEffect, useState } from 'react'
// import Navbar from '../Reusable_comp/Navbar'
// import { useUser } from '@clerk/clerk-react'
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router';
// import storage from '../../FirebaseConfig/Config'
// import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
// import { v4 } from 'uuid'



// const Dashboard = () => {
//     const Use = useUser();
//     const {id} = useParams()
//     const [openTab, setOpenTab] = useState(1);
//     const [userEvents, setUserEvents] = useState([]);
//     const [userPosts, setUserPosts] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//     const [image,SetImage] = useState("")
//     const [AllImages,setAllImages] = useState("")
//     const [ShowImg,IsShowImg] = useState("")
//     const Navigate = useNavigate();
//     const [FormData, setFormData] = useState({
//         Location: "",
//         Title: "",
//         Description:""
//     })
//     const toggleModal = () => {
//         setIsOpen(!isOpen);
//     };
//     const URL = "http://localhost:4000/Event"
//     useEffect(() => {
//         axios.get(URL)
//             .then(res => {
//                 const events = res.data.Events;
//                 const userEvents = events.filter(event => event.Email === Use.user?.primaryEmailAddress?.emailAddress);
//                 setUserEvents(userEvents);
//             }).catch(err => {
//                 console.log(err);
//             })
//     }, [Use.user?.primaryEmailAddress?.emailAddress])
//     const URL2 = "http://localhost:4000/Blog"
//     useEffect(() => {
//         axios.get(URL2)
//             .then(res => {
//                 const Posts = res.data.Posts;
//                 const userPosts = Posts.filter(post => post.Email === Use.user?.primaryEmailAddress?.emailAddress);
//                 setUserPosts(userPosts);
//             }).catch(err => {
//                 console.log(err);
//             })
//     }, [Use.user?.primaryEmailAddress?.emailAddress, userEvents, userPosts])
//     // const hasMatchingData = isEvents.some(data => data.Email === Use.user?.primaryEmailAddress?.emailAddress);
//     const handleClick = (id) => {
//         axios.delete(`http://localhost:4000/Dashboard/${id}`)
//             .then(res => {
//                 setUserEvents(userEvents.filter(item => item._id !== id)); // Update state instead of reloading page
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
//     const handleClick2 = (id) => {
//         axios.delete(`http://localhost:4000/DashboardBlog/${id}`)
//             .then(res => {
//                 setUserPosts(userPosts.filter(item => item._id !== id)); // Update state instead of reloading page
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
//     const State = FormData.Location
//     const Location = State? State.charAt(0).toUpperCase() + State.slice(1) : '' ;
//     const ImagePost = AllImages
//     const Title = FormData.Title;
//     const Description = FormData.Description;
//     const handleChange = (e) => {
//         let name = e.target.name;
//         let value = e.target.value;
//         setFormData({
//             ...FormData,
//             [name]: value,
//         })
//     }
//     const handleSubmit = async (id) => {
//             // e.preventDefault();
//             axios.put(`http://localhost:4000/DashboardBlog/${id}`, {Location,ImagePost,Title,Description})
//             .then(res => {
//                 console.log(res.data)
//                 Navigate('/dashboard')
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
//     const handleUpload= () => {
//         if(image !== null){
//             const imgRef = ref(storage,`Blog/${v4()}`)
//             uploadBytes(imgRef,image).then(val=>{
//                 console.log(val)
//                 getDownloadURL(val.ref).then(url=>{
//                     setAllImages(url)
//                 })
//             })
//         }
//     }
//     useEffect(()=>{
//         IsShowImg(AllImages);
//     },[handleUpload,AllImages,setAllImages,IsShowImg,ShowImg])

//     return (
//         <main className="bg-black h-full">
//             <Navbar />
//             <div>
//                 <div className="mt-14 flex flex-col justify-center items-center">
//                     <div className="mb-14">
//                         <h1 className='text-4xl text-[#d0c11e]'>User DashBoard</h1>
//                     </div>
//                     <div className='flex justify-evenly w-[100%]'>
//                         <div className="border-2 w-[32rem] h-auto pt-9 pl-14 pb-10 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500">
//                             <h1 className='text-white text-3xl'>User Profile</h1>
//                             <div className='flex flex-col h-44 justify-between max-w-96'>
//                                 <div className='flex items-center mt-10 justify-between'>
//                                     <img src={Use.user?.imageUrl ? Use.user?.imageUrl : "https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg"} alt="profile image" className="inline-block h-10 w-10 rounded-full ring-2" />
//                                     <p className='text-white text-[1.3rem]'>{Use.user?.username ? Use.user?.username.toUpperCase() : "Guest"}</p>
//                                 </div>
//                                 <div className='flex items-center justify-between'>
//                                     <p className="text-white  text-[1.3rem]">Email</p>
//                                     <p className="text-white text-[1.3rem]">{Use.user?.primaryEmailAddress?.emailAddress ? Use.user?.primaryEmailAddress?.emailAddress : "No Email Found"}</p>
//                                 </div>
//                                 <div className='flex items-center justify-between'>
//                                     <p className='text-white text-[1.3rem]'>Phone</p>
//                                     <p className='text-white text-[1.3rem]'>{Use.user?.phoneNumbers[0]?.phoneNumber ? Use.user?.phoneNumbers[0]?.phoneNumber : "No Contact found"}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="border-2 w-[32rem] h-auto pt-9 pl-14 pb-10 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500">
//                             <h1 className='text-white text-3xl'>Post Details</h1>
//                             <div className='flex flex-col h-44 justify-between max-w-96'>
//                                 <div className='flex items-center mt-10 justify-between'>
//                                     <p className="text-white  text-[1.3rem]">Total Blog Posts</p>
//                                     <p className="text-white text-[1.3rem]">{Use.user?.primaryEmailAddress?.emailAddress && userPosts.length > 0 ? userPosts.length : 0}</p>
//                                 </div>
//                                 <div className='flex items-center justify-between'>
//                                     <p className='text-white text-[1.3rem]'>Total Event Posts</p>
//                                     <p className='text-white text-[1.3rem]'>{Use.user?.primaryEmailAddress?.emailAddress && userEvents.length > 0 ? userEvents.length : 0}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='mt-44 pl-60'>
//                     <div className="border-b border-[#0c7ceb]">
//                         <nav className="flex justify-between w-64" aria-label="Tabs">
//                             <button onClick={() => setOpenTab(1)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg focus:outline-none focus:text-white focus:border-cyan-500 ${openTab !== 1 ? 'border-transparent text-gray-500 hover:text-[#d9cdcd] hover:border-cyan-500' : 'text-gray-500'}`} aria-current={openTab === 1 ? 'page' : 'false'}>
//                                 Your Events
//                             </button>
//                             <button onClick={() => setOpenTab(2)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg focus:outline-none focus:text-white focus:border-cyan-500 ${openTab !== 2 ? 'border-transparent text-gray-500 hover:text-[#d9cdcd] hover:border-cyan-500' : 'text-gray-500'}`} aria-current={openTab === 2 ? 'page' : 'false'}>
//                                 Your Posts
//                             </button>
//                         </nav>
//                         <div className="py-4">
//                             {openTab === 1 && <div className="mb-24">
//                                 {userEvents.length > 0 ? (
//                                     <div className="pr-60">
//                                         <table className="w-full">
//                                             <thead>
//                                                 <tr>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-left">S.NO</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Name</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Price</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Location</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Status</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {userEvents.map((data, index) => (
//                                                     <tr key={index}>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-left">{index + 1}</td>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-center">{data.Name}</td>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-center">{data.Price}</td>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-center">{data.Location}</td>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-center">
//                                                             <div className="flex items-center justify-center">
//                                                                 <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
//                                                                 <span className="text-green-500 font-bold">Active</span>
//                                                             </div>
//                                                         </td>
//                                                         <td className="py-2 text-white flex justify-center border-b border-gray-400 text-center">
//                                                             <img onClick={() => handleClick(data._id)} className='w-7 cursor-pointer self-center' src="delete.png" alt="Delete" />
//                                                         </td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 ) : (
//                                     <p className="text-white">No Data Found</p>
//                                 )}
//                             </div>}
//                             {openTab === 2 && <div className="mb-24">
//                                 {userPosts.length > 0 ? (
//                                     <div className="pr-60">
//                                         <table className="w-full">
//                                             <thead>
//                                                 <tr>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-left">S.NO</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Name</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Date</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Location</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Title</th>
//                                                     <th className="py-2 text-white border-b border-gray-400 text-center">Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {userPosts.map((data, index) => (
//                                                     <tr key={index}>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-left">{index + 1}</td>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-center">{data.Name}</td>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-center">{data.Date}</td>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-center">{data.Location}</td>
//                                                         <td className="py-2 text-white border-b border-gray-400 text-center">{data.Title}
//                                                         </td>
//                                                         <td className="py-2 text-white flex justify-center border-b border-gray-400 text-center">
//                                                             <img onClick={() => {toggleModal(); handleSubmit(data._id); }} src="edit.png" alt="Edit" className='w-7 cursor-pointer self-center invert' />
//                                                             <img onClick={() => handleClick2(data._id)} className='w-7 cursor-pointer self-center ml-5' src="delete.png" alt="Delete" />
//                                                         </td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                         {isOpen && (
//                                             <div className='fixed inset-0 overflow-y-auto flex justify-center items-center pb-4'>
//                                             <div className="w-2/4 bg-white h-auto mt-28 rounded-lg flex justify-evenly relative">
//                                                 <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none">
//                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                                     </svg>
//                                                 </button>
//                                                 <div className='flex justify-center'>
//                                                     <img src="/Blog_page_img/Post.svg" alt="" className="w-60 " />
//                                                 </div>
//                                                 <div className='flex flex-col pt-10 pb-10'>
//                                                     <h1 className="font-Inter text-xl font-bold">Edit Your Blog</h1>
//                                                     <form onSubmit={handleSubmit} className='flex flex-col h-auto justify-between'>
//                                                         <div className="flex items-center justify-center">
//                                                             <div>
//                                                                 <div className='w-96 h-64'>
//                                                                     <img src={AllImages.length > 0 ? AllImages : "photo.png"} alt="" className='w-96 h-56 rounded-md' />
//                                                                 </div>
//                                                                 <div>
//                                                                     <input type="file" onChange={(e) => SetImage(e.target.files[0])} name='Img' />
//                                                                     <button type='button' onClick={handleUpload} className='bg-red-500 rounded-lg w-20 h-7 outline-none'>Upload</button>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <input type="text" placeholder='State (e.g Delhi)' name='Location' onChange={handleChange} value={Location} className="bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none mt-4" />
//                                                         <input type="text" placeholder='Title' name='Title' onChange={handleChange} value={Title} className="bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-8 w-60 pl-5 outline-none mt-4" />
//                                                         <textarea name="Description" cols="100" rows="100" onChange={handleChange} value={Description} placeholder='Description' className='bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-lg h-20 w-60 pl-5 outline-none mt-7 pt-1'></textarea>
//                                                         <button className="bg-[#806DD6] rounded-lg text-white h-8 mt-4">Submit</button>
//                                                     </form>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <p className="text-white">No Data Found</p>
//                                 )}
//                             </div>}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </main>
//     )
// }

// export default Dashboard

// import React, { useEffect, useState } from 'react'
// import Navbar from '../Reusable_comp/Navbar'
// import { useUser } from '@clerk/clerk-react'
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router';
// import storage from '../../FirebaseConfig/Config'
// import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
// import { v4 } from 'uuid'

// const Dashboard = () => {
//     const Use = useUser();
//     const { id } = useParams()
//     const [openTab, setOpenTab] = useState(1);
//     const [userEvents, setUserEvents] = useState([]);
//     const [userPosts, setUserPosts] = useState([]);
//     const [isOpen, setIsOpen] = useState(false);
//     const [image, setImage] = useState(null);
//     const [allImages, setAllImages] = useState("");
//     const [showImg, setShowImg] = useState("");
//     const [editId, setEditId] = useState(null); // Add state for editId
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         Location: "",
//         Title: "",
//         Description: ""
//     });

//     const toggleModal = (id) => {
//         setEditId(id); // Set editId when opening the modal
//         setIsOpen(!isOpen);
//     };

//     const URL = "http://localhost:4000/Event";
//     useEffect(() => {
//         axios.get(URL)
//             .then(res => {
//                 const events = res.data.Events;
//                 const userEvents = events.filter(event => event.Email === Use.user?.primaryEmailAddress?.emailAddress);
//                 setUserEvents(userEvents);
//             }).catch(err => {
//                 console.log(err);
//             })
//     }, [Use.user?.primaryEmailAddress?.emailAddress]);
//     console.log(userEvents);

//     const URL2 = "http://localhost:4000/Blog";
//     useEffect(() => {
//         axios.get(URL2)
//             .then(res => {
//                 const Posts = res.data.Posts;
//                 const userPosts = Posts.filter(post => post.Email === Use.user?.primaryEmailAddress?.emailAddress);
//                 setUserPosts(userPosts);
//             }).catch(err => {
//                 console.log(err);
//             })
//     }, [Use.user?.primaryEmailAddress?.emailAddress]);

//     const handleClick = (id) => {
//         axios.delete(`http://localhost:4000/Dashboard/${id}`)
//             .then(res => {
//                 setUserEvents(userEvents.filter(item => item._id !== id)); // Update state instead of reloading page
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     const handleClick2 = (id) => {
//         axios.delete(`http://localhost:4000/DashboardBlog/${id}`)
//             .then(res => {
//                 setUserPosts(userPosts.filter(item => item._id !== id)); // Update state instead of reloading page
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };
    
//     const setImg = (file) => {
//         if (file) {
//             setFormData((prevFormData) => ({
//                 ...prevFormData,
//                 ImagePost: file,
//             }));
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setShowImg(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formDataToSend = new FormData();
//         formDataToSend.append('Location', formData.Location);
//         formDataToSend.append('Title', formData.Title);
//         formDataToSend.append('Description', formData.Description);

//         if (image) {
//             formDataToSend.append('ImagePost', image);
//         }

//         try {
//             const response = await axios.put(`http://localhost:4000/DashboardBlog/${editId}`, formDataToSend, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             if (response.status === 200) {
//                 // Assuming you refetch data after update
//                 fetchUserPosts(); // Call fetchUserPosts to update userPosts
//                 toggleModal();
//             }
//         } catch (error) {
//             console.error('Error updating post:', error);
//         }
//     };
    

//     const handleUpload = () => {
//         if (image !== null) {
//             const imgRef = ref(storage, `Blog/${v4()}`);
//             uploadBytes(imgRef, image).then(val => {
//                 console.log(val);
//                 getDownloadURL(val.ref).then(url => {
//                     setAllImages(url);
//                 });
//             });
//         }
//     }

//     useEffect(() => {
//         setShowImg(allImages);
//     }, [allImages]);

//     return (
//         <div className=' bg-black min-h-screen'>
//             <Navbar />
//             <main className="min-h-screen">
//                 <div>
//                     <div className="mt-14 flex flex-col justify-center items-center">
//                         <div className="mb-14">
//                             <h1 className='text-4xl text-[#d0c11e]'>User DashBoard</h1>
//                         </div>
//                         <div className='flex justify-evenly w-[100%]'>
//                             <div className="border-2 w-[32rem] h-auto pt-9 pl-14 pb-10 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500">
//                                 <h1 className='text-white text-3xl'>User Profile</h1>
//                                 <div className='flex flex-col h-44 justify-between max-w-96'>
//                                     <div className='flex items-center mt-10 justify-between'>
//                                         <img src={Use.user?.imageUrl ? Use.user?.imageUrl : "https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg"} alt="profile image" className="inline-block h-10 w-10 rounded-full ring-2" />
//                                         <p className='text-white text-[1.3rem]'>{Use.user?.username ? Use.user?.username.toUpperCase() : "Guest"}</p>
//                                     </div>
//                                     <div className='flex items-center justify-between'>
//                                         <p className="text-white  text-[1.3rem]">Email</p>
//                                         <p className="text-white text-[1.3rem]">{Use.user?.primaryEmailAddress?.emailAddress ? Use.user?.primaryEmailAddress?.emailAddress : "No Email Found"}</p>
//                                     </div>
//                                     <div className='flex items-center justify-between'>
//                                         <p className='text-white text-[1.3rem]'>Phone</p>
//                                         <p className='text-white text-[1.3rem]'>{Use.user?.phoneNumbers[0]?.phoneNumber ? Use.user?.phoneNumbers[0]?.phoneNumber : "No Contact found"}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="border-2 w-[32rem] h-auto pt-9 pl-14 pb-10 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500">
//                                 <h1 className='text-white text-3xl'>Post Details</h1>
//                                 <div className='flex flex-col h-44 justify-between max-w-96'>
//                                     <div className='flex items-center mt-10 justify-between'>
//                                         <p className="text-white  text-[1.3rem]">Total Blog Posts</p>
//                                         <p className="text-white text-[1.3rem]">{Use.user?.primaryEmailAddress?.emailAddress && userPosts.length > 0 ? userPosts.length : 0}</p>
//                                     </div>
//                                     <div className='flex items-center justify-between'>
//                                         <p className='text-white text-[1.3rem]'>Total Event Posts</p>
//                                         <p className='text-white text-[1.3rem]'>{Use.user?.primaryEmailAddress?.emailAddress && userEvents.length > 0 ? userEvents.length : 0}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='mt-44 pl-60'>
//                         <div className="border-b border-[#0c7ceb]">
//                             <nav className="flex justify-between w-64" aria-label="Tabs">
//                                 <button onClick={() => setOpenTab(1)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg focus:outline-none focus:text-white focus:border-cyan-500 ${openTab !== 1 ? 'border-transparent text-gray-500 hover:text-[#d9cdcd] hover:border-cyan-500' : 'text-gray-500'}`} aria-current={openTab === 1 ? 'page' : 'false'}>
//                                     Your Events
//                                 </button>
//                                 <button onClick={() => setOpenTab(2)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg focus:outline-none focus:text-white focus:border-cyan-500 ${openTab !== 2 ? 'border-transparent text-gray-500 hover:text-[#d9cdcd] hover:border-cyan-500' : 'text-gray-500'}`} aria-current={openTab === 2 ? 'page' : 'false'}>
//                                     Your Blogs
//                                 </button>
//                             </nav>
//                         </div>
//                         <div>
//                             {openTab === 1 && <div className="pb-24">
//                                 {userEvents.length > 0 ? (
//                                     <div className="pr-60">
//                                         <table className="border text-center">
//                                             <thead className='text-white'>
//                                                 <tr>
//                                                     <th className='border px-4 py-2'>Image</th>
//                                                     <th className='border px-4 py-2'>Name</th>
//                                                     <th className='border px-4 py-2'>Location</th>
//                                                     <th className='border px-4 py-2'>Price</th>
//                                                     <th className='border px-4 py-2'>Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody className='text-white'>
//                                                 {userEvents.map(item => (
//                                                     <tr key={item._id}>
//                                                         <td className='border px-4 py-2'><img src={item.Img} alt="img" className='h-14 w-14' /></td>
//                                                         <td className='border px-4 py-2'>{item.Name}</td>
//                                                         <td className='border px-4 py-2'>{item.Location}</td>
//                                                         <td className='border px-4 py-2'>{item.Price}</td>
//                                                         <td className="py-2 px-6 border">
//                                                             <img onClick={() => handleClick(item._id)} className='w-7 cursor-pointer self-center' src="delete.png" alt="Delete" />
//                                                         </td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 ) : (
//                                     <p className='text-white'>No events found</p>
//                                 )}
//                             </div>}
//                             {openTab === 2 && <div className="pb-24">
//                                 {userPosts.length > 0 ? (
//                                     <div className="pr-60">
//                                         <table className="border text-center">
//                                             <thead className='text-white'>
//                                                 <tr>
//                                                     <th className='border px-4 py-2'>Image</th>
//                                                     <th className='border px-4 py-2'>Name</th>
//                                                     <th className='border px-4 py-2'>Date</th>
//                                                     <th className='border px-4 py-2'>Location</th>
//                                                     <th className='border px-4 py-2'>Title</th>
//                                                     <th className='border px-4 py-2'>Action</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody className='text-white'>
//                                                 {userPosts.map(item => (
//                                                     <tr key={item._id}>
//                                                         <td className='border px-4 py-2'><img src={item.ImagePost} alt="img" className='h-14 w-14' /></td>
//                                                         <td className='border px-4 py-2'>{item.Name}</td>
//                                                         <td className='border px-4 py-2'>{item.Date}</td>
//                                                         <td className='border px-4 py-2'>{item.Location}</td>
//                                                         <td className='border px-4 py-2'>{item.Title}</td>
//                                                         {/* <td className='border px-4 py-2'>
//                                                             <button className='text-white' onClick={() => toggleModal(item._id)}>
//                                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m0 0H5m4 0h4m0 0v4m0-4v4m0-4V5m0 4H9m0 0h4" />
//                                                                 </svg>
//                                                             </button>
//                                                             <button className='text-red-500' onClick={() => handleClick2(item._id)}>
//                                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                                                                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m2 0a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2a2 2 0 002 2zm2 4h2v2a1 1 0 11-2 0v-2z" />
//                                                                 </svg>
//                                                             </button>
//                                                         </td> */}
//                                                         <td className="py-6 px-4 text-white flex justify-center border">
//                                                             <img onClick={() => toggleModal(item._id)} src="edit.png" alt="Edit" className='w-7 cursor-pointer invert' />
//                                                             <img onClick={() => handleClick2(item._id)} className='w-7 cursor-pointer self-center ml-5' src="delete.png" alt="Delete" />
//                                                         </td>
//                                                     </tr>
//                                                 ))}
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 ) : (
//                                     <p className='text-white'>No posts found</p>
//                                 )}
//                             </div>}
//                         </div>
//                     </div>
//                 </div>

//                 {isOpen && (
//                     <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
//                         <div className='bg-white p-8 rounded shadow-lg w-96'>
//                             <h2 className='text-xl font-semibold mb-4'>Edit Post</h2>
//                             <form onSubmit={handleSubmit} className='space-y-4'>
//                                 <div>
//                                     <label htmlFor='Location' className='block text-sm font-medium text-gray-700'>Location</label>
//                                     <input
//                                         type='text'
//                                         id='Location'
//                                         name='Location'
//                                         value={formData.Location}
//                                         onChange={handleChange}
//                                         className='mt-1 p-2 border w-full rounded'
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor='Title' className='block text-sm font-medium text-gray-700'>Title</label>
//                                     <input
//                                         type='text'
//                                         id='Title'
//                                         name='Title'
//                                         value={formData.Title}
//                                         onChange={handleChange}
//                                         className='mt-1 p-2 border w-full rounded'
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor='Description' className='block text-sm font-medium text-gray-700'>Description</label>
//                                     <textarea
//                                         id='Description'
//                                         name='Description'
//                                         value={formData.Description}
//                                         onChange={handleChange}
//                                         className='mt-1 p-2 border w-full rounded'
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor='ImagePost' className='block text-sm font-medium text-gray-700'>Image</label>
//                                     <input
//                                         type='file'
//                                         id='ImagePost'
//                                         name='ImagePost'
//                                         onChange={(e) => setImage(e.target.files[0])}
//                                         className='mt-1 p-2 border w-full rounded'
//                                     />
//                                     {showImg && <img src={showImg} alt='Preview' className='mt-2 h-20 w-20' />}
//                                 </div>
//                                 <div className='flex justify-end space-x-4'>
//                                     <button
//                                         type='button'
//                                         onClick={toggleModal}
//                                         className='py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700'
//                                     >
//                                         Cancel
//                                     </button>
//                                     <button
//                                         type='submit'
//                                         className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700'
//                                     >
//                                         Save
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 )}
//             </main>
//         </div>
//     )
// }

// export default Dashboard;




import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import { useUser } from '@clerk/clerk-react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import storage from '../../FirebaseConfig/Config'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

const Dashboard = () => {
    const Use = useUser();
    const { id } = useParams()
    const [openTab, setOpenTab] = useState(1);
    const [userEvents, setUserEvents] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(null);
    const [allImages, setAllImages] = useState("");
    const [showImg, setShowImg] = useState("");
    const [editId, setEditId] = useState(null); // Add state for editId
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Location: "",
        Title: "",
        Description: ""
    });

    const toggleModal = (id) => {
        setEditId(id); // Set editId when opening the modal
        setIsOpen(!isOpen);
    };

    const URL = "http://localhost:4000/Event";
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                const events = res.data.Events;
                const userEvents = events.filter(event => event.Email === Use.user?.primaryEmailAddress?.emailAddress);
                setUserEvents(userEvents);
            }).catch(err => {
                console.log(err);
            })
    }, [Use.user?.primaryEmailAddress?.emailAddress]);

    const URL2 = "http://localhost:4000/Blog";
    useEffect(() => {
        axios.get(URL2)
            .then(res => {
                const Posts = res.data.Posts;
                const userPosts = Posts.filter(post => post.Email === Use.user?.primaryEmailAddress?.emailAddress);
                setUserPosts(userPosts);
            }).catch(err => {
                console.log(err);
            })
    }, [Use.user?.primaryEmailAddress?.emailAddress]);

    const handleClick = (id) => {
        axios.delete(`http://localhost:4000/Dashboard/${id}`)
            .then(res => {
                setUserEvents(userEvents.filter(item => item._id !== id)); // Update state instead of reloading page
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleClick2 = (id) => {
        axios.delete(`http://localhost:4000/DashboardBlog/${id}`)
            .then(res => {
                setUserPosts(userPosts.filter(item => item._id !== id)); // Update state instead of reloading page
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = {
            Location: formData.Location.charAt(0).toUpperCase() + formData.Location.slice(1),
            ImagePost: allImages,
            Title: formData.Title,
            Description: formData.Description
        };

        axios.put(`http://localhost:4000/DashboardBlog/${editId}`, updatedData)
            .then(res => {
                console.log(res.data);
                navigate('/dashboard');
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleUpload = () => {
        if (image !== null) {
            const imgRef = ref(storage, `Blog/${v4()}`);
            uploadBytes(imgRef, image).then(val => {
                console.log(val);
                getDownloadURL(val.ref).then(url => {
                    setAllImages(url);
                });
            });
        }
    }

    useEffect(() => {
        setShowImg(allImages);
    }, [allImages]);
    // console.log(image);

    return (
        <div className=' bg-black min-h-screen'>
            <Navbar />
            <main className="min-h-screen">
                <div>
                    <div className="mt-14 flex flex-col justify-center items-center">
                        <div className="mb-14">
                            <h1 className='text-4xl text-[#d0c11e]'>User DashBoard</h1>
                        </div>
                        <div className='flex justify-evenly w-[100%]'>
                            <div className="border-2 w-[32rem] h-auto pt-9 pl-14 pb-10 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500">
                                <h1 className='text-white text-3xl'>User Profile</h1>
                                <div className='flex flex-col h-44 justify-between max-w-96'>
                                    <div className='flex items-center mt-10 justify-between'>
                                        <img src={Use.user?.imageUrl ? Use.user?.imageUrl : "https://p7.hiclipart.com/preview/722/101/213/computer-icons-user-profile-circle-abstract.jpg"} alt="profile image" className="inline-block h-10 w-10 rounded-full ring-2" />
                                        <p className='text-white text-[1.3rem]'>{Use.user?.username ? Use.user?.username.toUpperCase() : "Guest"}</p>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className="text-white  text-[1.3rem]">Email</p>
                                        <p className="text-white text-[1.3rem]">{Use.user?.primaryEmailAddress?.emailAddress ? Use.user?.primaryEmailAddress?.emailAddress : "No Email Found"}</p>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-white text-[1.3rem]'>Phone</p>
                                        <p className='text-white text-[1.3rem]'>{Use.user?.phoneNumbers[0]?.phoneNumber ? Use.user?.phoneNumbers[0]?.phoneNumber : "No Contact found"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 w-[32rem] h-auto pt-9 pl-14 pb-10 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500">
                                <h1 className='text-white text-3xl'>Post Details</h1>
                                <div className='flex flex-col h-44 justify-between max-w-96'>
                                    <div className='flex items-center mt-10 justify-between'>
                                        <p className="text-white  text-[1.3rem]">Total Blog Posts</p>
                                        <p className="text-white text-[1.3rem]">{Use.user?.primaryEmailAddress?.emailAddress && userPosts.length > 0 ? userPosts.length : 0}</p>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-white text-[1.3rem]'>Total Event Posts</p>
                                        <p className='text-white text-[1.3rem]'>{Use.user?.primaryEmailAddress?.emailAddress && userEvents.length > 0 ? userEvents.length : 0}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-44 pl-60'>
                        <div className="border-b border-[#0c7ceb]">
                            <nav className="flex justify-between w-64" aria-label="Tabs">
                                <button onClick={() => setOpenTab(1)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg focus:outline-none focus:text-white focus:border-cyan-500 ${openTab !== 1 ? 'border-transparent text-gray-500 hover:text-[#d9cdcd] hover:border-cyan-500' : 'text-gray-500'}`} aria-current={openTab === 1 ? 'page' : 'false'}>
                                    Your Events
                                </button>
                                <button onClick={() => setOpenTab(2)} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg focus:outline-none focus:text-white focus:border-cyan-500 ${openTab !== 2 ? 'border-transparent text-gray-500 hover:text-[#d9cdcd] hover:border-cyan-500' : 'text-gray-500'}`} aria-current={openTab === 2 ? 'page' : 'false'}>
                                    Your Blogs
                                </button>
                            </nav>
                        </div>
                        <div>
                            {openTab === 1 && <div className="pb-24 pt-5">
                                {userEvents.length > 0 ? (
                                    <div className="pr-60">
                                        <table className="border text-center">
                                            <thead className='text-white'>
                                                <tr>
                                                    <th className='border px-4 py-2'>Image</th>
                                                    <th className='border px-4 py-2'>Name</th>
                                                    <th className='border px-4 py-2'>Location</th>
                                                    <th className='border px-4 py-2'>Price</th>
                                                    <th className='border px-4 py-2'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-white'>
                                                {userEvents.map(item => (
                                                    <tr key={item._id}>
                                                        <td className='border px-4 py-2'><img src={item.Img} alt="img" className='h-14 w-14' /></td>
                                                        <td className='border px-4 py-2'>{item.Name}</td>
                                                        <td className='border px-4 py-2'>{item.Location}</td>
                                                        <td className='border px-4 py-2'>{item.Price}</td>
                                                        <td className='py-2 px-6 border'>
                                                        <img onClick={() => handleClick(item._id)} className='w-7 cursor-pointer self-center' src="delete.png" alt="Delete" />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <p className='text-white'>No events found</p>
                                )}
                            </div>}
                            {openTab === 2 && <div className="pb-24 pt-5">
                                {userPosts.length > 0 ? (
                                    <div className="pr-60">
                                        <table className="border text-center">
                                            <thead className='text-white'>
                                                <tr>
                                                    <th className='border px-4 py-2'>Image</th>
                                                    <th className='border px-4 py-2'>Name</th>
                                                    <th className='border px-4 py-2'>Date</th>
                                                    <th className='border px-4 py-2'>Location</th>
                                                    <th className='border px-4 py-2'>Title</th>
                                                    {/* <th className='border px-4 py-2'>Description</th> */}
                                                    <th className='border px-4 py-2'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-white'>
                                                {userPosts.map(item => (
                                                    <tr key={item._id}>
                                                        <td className='border px-4 py-2'><img src={item.ImagePost} alt="img" className='h-14 w-14' /></td>
                                                        <td className='border px-4 py-2'>{item.Name}</td>
                                                        <td className='border px-4 py-2'>{item.Date}</td>
                                                        <td className='border px-4 py-2'>{item.Location}</td>
                                                        <td className='border px-4 py-2'>{item.Title}</td>
                                                        <td className="py-6 px-4 text-white flex justify-center border">
                                                            <img onClick={() => toggleModal(item._id)} src="edit.png" alt="Edit" className='w-7 cursor-pointer invert' />
                                                            <img onClick={() => handleClick2(item._id)} className='w-7 cursor-pointer self-center ml-5' src="delete.png" alt="Delete" />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    <p className='text-white'>No posts found</p>
                                )}
                            </div>}
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75'>
                        <div className='bg-white p-8 rounded shadow-lg w-96'>
                            <h2 className='text-xl font-semibold mb-4'>Edit Post</h2>
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div>
                                    <label htmlFor='Location' className='block text-sm font-medium text-gray-700'>Location</label>
                                    <input
                                        type='text'
                                        id='Location'
                                        name='Location'
                                        value={formData.Location}
                                        onChange={handleChange}
                                        className='mt-1 p-2 border w-full rounded'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='Title' className='block text-sm font-medium text-gray-700'>Title</label>
                                    <input
                                        type='text'
                                        id='Title'
                                        name='Title'
                                        value={formData.Title}
                                        onChange={handleChange}
                                        className='mt-1 p-2 border w-full rounded'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='Description' className='block text-sm font-medium text-gray-700'>Description</label>
                                    <textarea
                                        id='Description'
                                        name='Description'
                                        value={formData.Description}
                                        onChange={handleChange}
                                        className='mt-1 p-2 border w-full rounded'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='ImagePost' className='block text-sm font-medium text-gray-700'>Image</label>
                                    <input
                                        type='file'
                                        id='ImagePost'
                                        name='ImagePost'
                                        onChange={(e) => setImage(e.target.files[0])}
                                        className='mt-1 p-2 border w-full rounded'
                                    />
                                    <button type='button' onClick={handleUpload} className='bg-red-500 rounded-lg w-20 h-7 outline-none'>Upload</button>
                                    {showImg && <img src={showImg} alt='Preview' className='mt-2 h-20 w-20' />}
                                </div>
                                <div className='flex justify-end space-x-4'>
                                    <button
                                        type='button'
                                        onClick={toggleModal}
                                        className='py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700'
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type='submit'
                                        className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700'
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Dashboard;
