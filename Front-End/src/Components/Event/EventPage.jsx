import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import Footer from '../Reusable_comp/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { useUser } from '@clerk/clerk-react'
import { NavLink } from 'react-router-dom'


const EventPage = () => {
    const [visible, setIsVisible] = useState(true);
    const [LoginData, setLoginData] = useState([]);
    const [Approved, setApproved] = useState(false)
    const [User_Email, setUserEmail] = useState("");
    const [Events, setIsEvents] = useState([]);
    const Use = useUser();
    useEffect(() => {
        if (Use.user) {
            setUserEmail(Use.user?.emailAddresses?.[0]?.emailAddress || "");
        }
    }, [Use.user]);
    const handleClick = () => {
        window.scrollBy({
            top: 900,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        Aos.init({ duration: 1000 })
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    useState(() => {
        // axios.get("http://localhost:4000/ListWithUs")
        axios.get("https://s53-himanshu-capstone-nicheve.onrender.com/ListWithUs")
            .then(res => {
                setLoginData(res.data.List)
            }).catch(error => {
                console.log(error);
            })
    }, [])
    useEffect(() => {
        // axios.get("http://localhost:4000/Event")
        axios.get("https://s53-himanshu-capstone-nicheve.onrender.com/Event")
            .then(res => {
                setIsEvents(res.data.Events)
                console.log(res.data.Events);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    useEffect(() => {
        if (LoginData.length > 0 && User_Email !== "") {
            const approved = LoginData.some(item => item.from_email === User_Email && item.Approved === true);
            setApproved(approved);
        }
    }, [LoginData, User_Email]);
    // console.log(User_Email);

    // console.log(LoginData);
    // console.log(Approved);    
    return (
        <main className='bg-[url(/Event_page_Img/Bg.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10 '>
            <Navbar />
            <div className="-mt-24">
                <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <inv className='text'><h1 className="text-white text-10xl font-display max-sm:text-8xl" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">Events</h1></inv>
                    <h2 className="text-xl text-white absolute mt-44 font-display2 font-light max-sm:text-xs max-sm:mt-24" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">-Choose Any Event To Enjoy Every Moments- </h2>
                    <div className={visible ? 'symbol-visible' : 'symbol-hidden'}>
                        <div className='flex flex-col justify-center'>
                            <div className="mt-48 -mb-80 animate-bounce flex flex-col justify-center max-sm:mt-52 z-30 max-sm:z-0" >
                                <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                                <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                            </div>
                        </div>
                    </div>
                    <NavLink to='/EventForm'>
                        <div className={Approved ? "fixed right-8 bottom-28 max-sm:right-5 max-sm:bottom-14" : "hidden"}>
                            <img src="/Event_page_Img/add-button.png" alt="add post" className="w-20 h-20 cursor-pointer max-sm:w-14 max-sm:h-14" loading='lazy' />
                        </div>
                    </NavLink>
                </div>
                <Footer />
                <div className="pb-36">
                    <div className="mt-72 pl-52 max-sm:pl-8">
                        <select name="Sort By" className="text-white text-xl bg-black outline-sweet-Purple border-sweet-Purple border-2 outline-none w-24 pl-3 h-9 max-sm:text-lg max-sm:h-8 max-sm:w-20">
                            <option value="All">All</option>
                            <option value="value 1">Free</option>
                            <option value="value 2">Paid</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 pl-52 pt-32 gap-32 max-sm:grid-cols-1 max-sm:pl-12 max-w-screen-xl">
                        {Events.map((data) => (
                            <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" key={data._id}>
                                <div className="relative outline-sweet-Purple border-sweet-Purple border-2 outline-none inline-block transition-transform transition-shadow transform-gpu hover:scale-105 shadow-md">
                                    <div className="group text-[#c9c4c4]">
                                        <img src={data.Img} alt="Event_Image" className="h-72 w-72 object-fill cursor-pointer hover:opacity-70 transform-gpu group-hover:opacity-70" loading="lazy" />
                                        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-[#161616] transform -rotate-x-90 transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                            <p className="text-[1.5rem] text-[#ffffffee] font-semibold mb-2">{data.Name}</p>
                                            <div className='flex flex-col h-full justify-evenly'>
                                                <div className='flex items-center'>
                                                    <img src="/Event_list/money.png" alt="money" className="w-10" />
                                                    <p className='ml-4'>Rs {data.Price}</p>
                                                </div>
                                                <div className='flex items-center '>
                                                    <img src="/Blog_page_img/location.png" alt="money" className="w-6 invert" />
                                                    <p className='ml-2'>{data.Location}</p>
                                                </div>
                                                <div className='flex items-center'>
                                                    <img src="/Event_list/time-left.png" alt="money" className="w-5 invert" />
                                                    <p className='ml-4'>{data.Time}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                    <button className="w-16 text-white">Register</button>
                                    <p className="text-white">|</p>
                                    <NavLink to={`/Events/${data._id}`}>
                                        <button className="text-white">Explore</button>
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                        {/* <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <div className="relative outline-sweet-Purple border-sweet-Purple border-2 outline-none inline-block transition-transform transition-shadow transform-gpu hover:scale-105 shadow-md">
                                <div className="group text-[#c9c4c4]">
                                    <img src="/Event_list/HOLI.jpg" alt="Event_Image" className="h-72 w-72 cursor-pointer hover:opacity-70 transform-gpu group-hover:opacity-70" loading="lazy" />
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-[#161616] transform -rotate-x-90 transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <p className="text-[1.5rem] text-[#ffffffee] font-semibold mb-2">Color-Thrill</p>
                                        <div className='flex flex-col h-full justify-evenly'>
                                            <div className='flex items-center'>
                                                <img src="/Event_list/money.png" alt="money" className="w-10" />
                                                <p className='ml-4'>Rs 250</p>
                                            </div>
                                            <div className='flex items-center '>
                                                <img src="/Blog_page_img/location.png" alt="money" className="w-6 invert" />
                                                <p className='ml-2'>Lovely Professional University</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <img src="/Event_list/time-left.png" alt="money" className="w-5 invert" />
                                                <p className='ml-4'>3 - 11 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <NavLink to='/holi'>
                                    <button className="text-white">Explore</button>
                                </NavLink>
                            </div>
                        </div>
                        <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <div className="relative outline-sweet-Purple border-sweet-Purple border-2 outline-none inline-block transition-transform transition-shadow transform-gpu hover:scale-105 shadow-md">
                                <div className="group text-[#c9c4c4]">
                                    <img src="/Event_list/Flutter.png" alt="Event_Image" className="h-72 w-72 cursor-pointer hover:opacity-70 transform-gpu group-hover:opacity-70" loading="lazy" />
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-[#161616] transform -rotate-x-90 transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <p className="text-[1.5rem] text-[#ffffffee] font-semibold mb-2">Color-Thrill</p>
                                        <div className='flex flex-col h-full justify-evenly'>
                                            <div className='flex items-center'>
                                                <img src="/Event_list/money.png" alt="money" className="w-10" />
                                                <p className='ml-4'>Rs 250</p>
                                            </div>
                                            <div className='flex items-center '>
                                                <img src="/Blog_page_img/location.png" alt="money" className="w-6 invert" />
                                                <p className='ml-2'>Lovely Professional University</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <img src="/Event_list/time-left.png" alt="money" className="w-5 invert" />
                                                <p className='ml-4'>3 - 11 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <NavLink to='/flutter'>
                                    <button className="text-white">Explore</button>
                                </NavLink>
                            </div>
                        </div>
                        <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <div className="relative outline-sweet-Purple border-sweet-Purple border-2 outline-none inline-block transition-transform transition-shadow transform-gpu hover:scale-105 shadow-md">
                                <div className="group text-[#c9c4c4]">
                                    <img src="/Event_list/MagicDance.jpg" alt="Event_Image" className="h-72 w-72 cursor-pointer hover:opacity-70 transform-gpu group-hover:opacity-70" loading="lazy" />
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-[#161616] transform -rotate-x-90 transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <p className="text-[1.5rem] text-[#ffffffee] font-semibold mb-2">Color-Thrill</p>
                                        <div className='flex flex-col h-full justify-evenly'>
                                            <div className='flex items-center'>
                                                <img src="/Event_list/money.png" alt="money" className="w-10" />
                                                <p className='ml-4'>Rs 250</p>
                                            </div>
                                            <div className='flex items-center '>
                                                <img src="/Blog_page_img/location.png" alt="money" className="w-6 invert" />
                                                <p className='ml-2'>Lovely Professional University</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <img src="/Event_list/time-left.png" alt="money" className="w-5 invert" />
                                                <p className='ml-4'>3 - 11 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <NavLink to='/dance'>
                                    <button className="text-white">Explore</button>
                                </NavLink>
                            </div>
                        </div>
                        <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <div className="relative outline-sweet-Purple border-sweet-Purple border-2 outline-none inline-block transition-transform transition-shadow transform-gpu hover:scale-105 shadow-md">
                                <div className="group text-[#c9c4c4]">
                                    <img src="/Event_list/Wow.jpg" alt="Event_Image" className="h-72 w-72 cursor-pointer hover:opacity-70 transform-gpu group-hover:opacity-70" loading="lazy" />
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-[#161616] transform -rotate-x-90 transition-transform duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <p className="text-[1.5rem] text-[#ffffffee] font-semibold mb-2">Color-Thrill</p>
                                        <div className='flex flex-col h-full justify-evenly'>
                                            <div className='flex items-center'>
                                                <img src="/Event_list/money.png" alt="money" className="w-10" />
                                                <p className='ml-4'>Rs 250</p>
                                            </div>
                                            <div className='flex items-center '>
                                                <img src="/Blog_page_img/location.png" alt="money" className="w-6 invert" />
                                                <p className='ml-2'>Lovely Professional University</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <img src="/Event_list/time-left.png" alt="money" className="w-5 invert" />
                                                <p className='ml-4'>3 - 11 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <NavLink to='/wonderofwonders'>
                                    <button className="text-white">Explore</button>
                                </NavLink>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EventPage