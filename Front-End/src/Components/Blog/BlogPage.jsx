import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar';
import Footer from '../Reusable_comp/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../../App.css'

const BlogPage = () => {
    const [visible, setIsVisible] = useState(true);
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
                        <div className="mt-44 -mb-80 animate-bounce flex flex-col justify-center max-sm:mt-60 z-50 " >
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                        </div>
                    </div>
                    <div className="fixed right-8 bottom-28 max-sm:right-5 max-sm:bottom-14" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img src="/Blog_page_img/comment.png" alt="add post" className="w-20 h-20 invert cursor-pointer max-sm:w-14 max-sm:h-14" loading='lazy' />
                    </div>
                </div>
                <Footer />
                <div className="flex flex-col justify-between pb-36">
                    <div className="h-72 w-3/5 bg-pappy-brown outline-dotted outline-offset-8 rounded-sm outline-Royal-Golden self-center mt-96 max-sm:h-56 max-sm:w-80" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <div className="flex">
                            <div className="flex flex-col h-72 justify-evenly pl-9 w-4/5 max-sm:flex-row max-sm:pt-4">
                                <img src="/Blog_page_img/profile-1.jpg" alt="Profile photo" className="h-48 w-44 rounded-full border-2 max-sm:h-16 max-sm:w-16" loading='lazy' />
                                <p className="text-white font-Inter text-xl ml-6 max-sm:text-sm max-sm:mt-5 max-sm:h-10 max-sm:w-40 ">Mavia Kaur</p>
                            </div>
                            <div className="flex flex-col justify-evenly max-sm:-mt-3 max-sm:justify-center">
                                <p className="text-white pl-20 pr-10 pt-5 font-Roboto font-light max-sm:text-[8px] max-sm:pl-0 max-sm:pr-6 max-sm:pt-7 max-sm:self-center max-sm:-ml-[13rem]">Immersed in an electrifying atmosphere, the AP Dhillo concert was a spectacle of sheer brilliance. Surrounded by an exuberant crowd, each moment pulsated with energy, celebrating music in its purest form. From the captivating performances to the infectious party vibe, every element coalesced into an unforgettable experience. It was a night where euphoria reigned supreme, leaving indelible memories etched in the heart.</p>
                                <div className="flex w-20 snap-center justify-evenly ml-28 mt-4 max-sm:-ml-[13rem] max-sm:mt-2 max-sm:w-8">
                                    <img src="/Blog_page_img/heart.png" alt="Like" className="invert w-6 h-6 max-sm:w-3 max-sm:h-3 max-sm:self-center " loading='lazy' />
                                    <p className="text-white font-Roboto max-sm:text-[10px]">12</p>
                                </div>
                                <div className="flex justify-around max-sm:ml-[-13rem] max-sm:pr-7 max-sm:pl-0 max-sm:pt-3 max-sm:justify-between">
                                    <p className="text-white text-s max-sm:text-[8px]">Posted on - 21 Aug 2023</p>
                                    <div className="flex">
                                        <img src="/Blog_page_img/location.png" alt="Location" className="w-3 h-3 invert self-center max-sm:w-2 max-sm:h-2" loading='lazy' />
                                        <p className="text-white text-s max-sm:text-[8px]">Lovely Professional University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-4/5 self-center mt-20" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" />
                    <div className="h-72 w-3/5 bg-pappy-brown outline-dotted outline-offset-8 rounded-sm outline-Royal-Golden self-center mt-20 max-sm:h-56 max-sm:w-80 max-sm:mt-16" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <div className="flex">
                            <div className="flex flex-col h-72 justify-evenly pl-9 w-4/5 max-sm:flex-row max-sm:pt-4">
                                <img src="/Blog_page_img/profile-1.jpg" alt="Profile photo" className="h-48 w-44 rounded-full border-2 max-sm:h-16 max-sm:w-16" loading='lazy' />
                                <p className="text-white font-Inter text-xl ml-6 max-sm:text-sm max-sm:mt-5 max-sm:h-10 max-sm:w-40 ">Mavia Kaur</p>
                            </div>
                            <div className="flex flex-col justify-evenly max-sm:-mt-3 max-sm:justify-center">
                                <p className="text-white pl-20 pr-10 pt-5 font-Roboto font-light max-sm:text-[8px] max-sm:pl-0 max-sm:pr-6 max-sm:pt-7 max-sm:self-center max-sm:-ml-[13rem]">Immersed in an electrifying atmosphere, the AP Dhillo concert was a spectacle of sheer brilliance. Surrounded by an exuberant crowd, each moment pulsated with energy, celebrating music in its purest form. From the captivating performances to the infectious party vibe, every element coalesced into an unforgettable experience. It was a night where euphoria reigned supreme, leaving indelible memories etched in the heart.</p>
                                <div className="flex w-20 snap-center justify-evenly ml-28 mt-4 max-sm:-ml-[13rem] max-sm:mt-2 max-sm:w-8">
                                    <img src="/Blog_page_img/heart.png" alt="Like" className="invert w-6 h-6 max-sm:w-3 max-sm:h-3 max-sm:self-center " loading='lazy' />
                                    <p className="text-white font-Roboto max-sm:text-[10px]">12</p>
                                </div>
                                <div className="flex justify-around max-sm:ml-[-13rem] max-sm:pr-7 max-sm:pl-0 max-sm:pt-3 max-sm:justify-between">
                                    <p className="text-white text-s max-sm:text-[8px]">Posted on - 21 Aug 2023</p>
                                    <div className="flex">
                                        <img src="/Blog_page_img/location.png" alt="Location" className="w-3 h-3 invert self-center max-sm:w-2 max-sm:h-2" loading='lazy' />
                                        <p className="text-white text-s max-sm:text-[8px]">Lovely Professional University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-4/5 self-center max-sm:mt-16 mt-20" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" />
                    <div className="h-72 w-3/5 bg-pappy-brown outline-dotted outline-offset-8 rounded-sm outline-Royal-Golden self-center mt-20 max-sm:h-56 max-sm:w-80 max-sm:mt-16" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <div className="flex">
                            <div className="flex flex-col h-72 justify-evenly pl-9 w-4/5 max-sm:flex-row max-sm:pt-4">
                                <img src="/Blog_page_img/profile-1.jpg" alt="Profile photo" className="h-48 w-44 rounded-full border-2 max-sm:h-16 max-sm:w-16" loading='lazy' />
                                <p className="text-white font-Inter text-xl ml-6 max-sm:text-sm max-sm:mt-5 max-sm:h-10 max-sm:w-40 ">Mavia Kaur</p>
                            </div>
                            <div className="flex flex-col justify-evenly max-sm:-mt-3 max-sm:justify-center">
                                <p className="text-white pl-20 pr-10 pt-5 font-Roboto font-light max-sm:text-[8px] max-sm:pl-0 max-sm:pr-6 max-sm:pt-7 max-sm:self-center max-sm:-ml-[13rem]">Immersed in an electrifying atmosphere, the AP Dhillo concert was a spectacle of sheer brilliance. Surrounded by an exuberant crowd, each moment pulsated with energy, celebrating music in its purest form. From the captivating performances to the infectious party vibe, every element coalesced into an unforgettable experience. It was a night where euphoria reigned supreme, leaving indelible memories etched in the heart.</p>
                                <div className="flex w-20 snap-center justify-evenly ml-28 mt-4 max-sm:-ml-[13rem] max-sm:mt-2 max-sm:w-8">
                                    <img src="/Blog_page_img/heart.png" alt="Like" className="invert w-6 h-6 max-sm:w-3 max-sm:h-3 max-sm:self-center " loading='lazy' />
                                    <p className="text-white font-Roboto max-sm:text-[10px]">12</p>
                                </div>
                                <div className="flex justify-around max-sm:ml-[-13rem] max-sm:pr-7 max-sm:pl-0 max-sm:pt-3 max-sm:justify-between">
                                    <p className="text-white text-s max-sm:text-[8px]">Posted on - 21 Aug 2023</p>
                                    <div className="flex">
                                        <img src="/Blog_page_img/location.png" alt="Location" className="w-3 h-3 invert self-center max-sm:w-2 max-sm:h-2" loading='lazy' />
                                        <p className="text-white text-s max-sm:text-[8px]">Lovely Professional University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default BlogPage