import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar';
import Footer from '../Reusable_comp/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../../App.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const BlogPage = () => {
    const [visible, setIsVisible] = useState(true);
    const [Posts, setIsPosts] = useState([]);
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
    useEffect(() => {
        // axios.get("http://localhost:4000/Blog")
        axios.get("https://s53-himanshu-capstone-nicheve.onrender.com/Blog")
            .then(res => {
                setIsPosts(res.data.Posts)
                console.log(res.data.Posts);
            }).catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <main className='bg-[url(/Blog_page_img/bg.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10 '>
            <Navbar />
            <div className="-mt-24">
                <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <p className="text-gray-400 text-8xl max-sm:text-5xl">Post Your</p>
                        <p className="text-Royal-Golden text-10xl font-Lavishly_Yours ml-44 max-sm:text-7xl max-sm:ml-16">Happiness</p>
                    </div>
                    <div className={visible ? 'symbol-visible' : 'symbol-hidden'}>
                        <div className='flex flex-col justify-center'>
                            <div className="mt-24 -mb-80 animate-bounce flex flex-col justify-center max-sm:mt-44 z-50 max-sm:z-0 " >
                                <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                                <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                            </div>
                        </div>
                    </div>
                    <div className="fixed right-8 bottom-28 max-sm:right-5 max-sm:bottom-14" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <NavLink to='/PostBlog'>
                            <img src="/Blog_page_img/comment.png" alt="add post" className="w-20 h-20 invert cursor-pointer max-sm:w-14 max-sm:h-14" loading='lazy' />
                        </NavLink>
                    </div>
                </div>
                <Footer />
                <div className='pb-36 pt-10 grid grid-cols-3 gap-28 ml-24'>
                    {Posts.map((data) => (
                        <div class="relative flex w-80 flex-col rounded-xl bg-[#0F0F0F] bg-clip-border shadow-md">
                            <div class="relative mx-4 -mt-6 h-64 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                                <img src={data.ImagePost} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                            <div class="p-6">
                                <div className='flex items-center'>
                                    <img src={data.Profile} alt="profile pic" className="rounded-full w-10 h-10" />
                                    <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 text-white antialiased ml-4">
                                        {data.Name}
                                    </h5>
                                </div>
                                <p class="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased text-white mt-3">
                                    {data.Location}
                                </p>
                                <p class="block font-sans text-base leading-relaxed text-inherit antialiased text-white font-semibold">
                                    {data.Date}
                                </p>
                            </div>
                            <div class="p-6 pt-0">
                                <NavLink to={`/Blogs/${data._id}`}>
                                    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Read More
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default BlogPage