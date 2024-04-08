import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import Footer from '../Reusable_comp/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


const EventPage = () => {
    const [visible, setIsVisible] = useState(true);
    const handleClick = () => {
        window.scrollBy({
            top: 900,
            behavior: 'smooth'
        });
    };
    useEffect(()=>{
        Aos.init({duration:1000})
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
    },[])
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
                    <div className="grid grid-cols-2 pl-52 pt-32 gap-32 max-sm:grid-cols-1 max-sm:pl-12">
                        <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <img src="/Event_page_Img/img_1.jpg" alt="Event_Image" className=" h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" loading='lazy' />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <img src="/Event_page_Img/img_2.jpg" alt="Event_Image" className="h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" loading='lazy' />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <img src="/Event_page_Img/img_1.jpg" alt="Event_Image" className=" h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" loading='lazy' />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <img src="/Event_page_Img/img_2.jpg" alt="Event_Image" className="h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" loading='lazy' />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <img src="/Event_page_Img/img_1.jpg" alt="Event_Image" className=" h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" loading='lazy'/>
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                            <img src="/Event_page_Img/img_2.jpg" alt="Event_Image" className="h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" loading='lazy'/>
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EventPage