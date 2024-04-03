import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar';
import Aos from 'aos';
import Footer from '../Reusable_comp/Footer';
import 'aos/dist/aos.css'
import '../../App.css'

const About = () => {
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
        <main className="bg-[url(/About_us_img/bg-img.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10">
            <Navbar />
            <div className="-mt-24">
                <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <div className='text'><h1 className="text-Royal-Golden text-9xl font-display max-sm:text-7xl" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">ABOUT US</h1></div>
                    <p className='text-white text-2xl font-light font-display2 max-sm:text-lg' data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">-Embark on a Journey with NICHEVE-</p>
                    <div className={visible ? 'symbol-visible' : 'symbol-hidden'}>
                        <div className=" mt-[17rem] -mb-96 animate-bounce flex flex-col justify-center max-sm:mt-60" >
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                        </div>
                    </div>
                </div>
                <Footer />
                <div className="flex flex-col justify-between pb-36">
                    <div className=" h-72 w-3/5 bg-pappy-brown rounded-md outline-Royal-Golden self-center mt-96 max-sm:h-auto max-sm:w-80" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <div className="flex flex-row-reverse">
                            <div className="flex flex-col h-72 justify-evenly pr-9 w-4/5 max-sm:flex-row max-sm:pt-4 max-sm:h-36 ">
                                <img src="/About_us_img/increase.jpg" alt="Growth" className="h-44 w-44 rounded-full border-2 max-sm:h-12 max-sm:w-20" loading='lazy' />
                            </div>
                            <div className="flex flex-col justify-evenly -mt-7 max-sm:pt-10 max-sm:pb-5">
                                <p className="self-center text-4xl font-IBM_Plex font-bold max-sm:text-xl">Mission and vision</p>
                                <p className="text-white pl-20 pr-10 -mt-8 font-IBM_Plex font-light max-sm:text-[9px] max-sm:pl-7 max-sm:pr-6 max-sm:mt-2">At NICHEVE, we're reshaping event management by connecting organizers and attendees effortlessly. Our platform fosters a vibrant community, offering innovative solutions and a user-friendly interface to simplify the experience for all users.</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-4/5 self-center max-sm:mt-16 mt-28" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" />
                    <div className=" h-72 w-3/5 bg-pappy-brown rounded-md outline-Royal-Golden self-center mt-28 max-sm:h-auto max-sm:w-80" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <div className="flex flex-row-reverse">
                            <div className="flex flex-col h-72 justify-evenly pr-9 w-4/5 max-sm:flex-row max-sm:pt-4 max-sm:h-36 ">
                                <img src="/About_us_img/ui.jpg" alt="Growth" className="h-44 w-44 rounded-full border-2 max-sm:h-12 max-sm:w-20" loading='lazy' />
                            </div>
                            <div className="flex flex-col justify-evenly -mt-7 max-sm:pt-10 max-sm:pb-5">
                                <p className="self-center text-4xl font-IBM_Plex font-bold max-sm:text-xl">User Experience</p>
                                <p className="text-white pl-20 pr-10 -mt-8 font-IBM_Plex font-light max-sm:text-[9px] max-sm:pl-7 max-sm:pr-6 max-sm:mt-2">At NICHEVE, user experience reigns supreme. Our intuitive interface and streamlined booking process ensure effortless event exploration. Discover, engage, and enjoy hassle-free event discovery with personalized recommendations on our platform.</p>
                            </div>
                        </div>
                    </div>
                    <hr className="w-4/5 self-center max-sm:mt-16 mt-28" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" />
                    <div className=" h-72 w-3/5 bg-pappy-brown rounded-md outline-Royal-Golden self-center mt-28 max-sm:h-auto max-sm:w-80" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <div className="flex flex-row-reverse">
                            <div className="flex flex-col h-72 justify-evenly pr-9 w-4/5 max-sm:flex-row max-sm:pt-4 max-sm:h-36 ">
                                <img src="/About_us_img/Ai.jpg" alt="Growth" className="h-44 w-44 rounded-full border-2 max-sm:h-10 max-sm:w-20" loading='lazy' />
                            </div>
                            <div className="flex flex-col justify-evenly -mt-7 max-sm:pt-10 max-sm:pb-5">
                                <p className="self-center text-4xl font-IBM_Plex font-bold max-sm:text-xl">Future Goals</p>
                                <p className="text-white pl-20 pr-10 -mt-8 font-IBM_Plex font-light max-sm:text-[9px] max-sm:pl-7 max-sm:pr-6 max-sm:mt-2">NICHEVE's future goals include global expansion, advanced tech integration, and enhanced community involvement. Become part of our journey as we redefine event planning, delivering personalized recommendations and seamless experiences worldwide, shaping the future of event management.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className=" h-72 w-3/5 bg-pappy-brown rounded-md outline-Royal-Golden self-center mt-28 max-sm:h-56 max-sm:w-80" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <div className="flex flex-row-reverse">
                            <div className="flex flex-col h-72 justify-evenly pr-9 w-4/5 max-sm:flex-row max-sm:pt-4">
                                <img src="/About_us_img/Ai.jpg" alt="Profile photo" className="h-44 w-44 rounded-full border-2 max-sm:h-16 max-sm:w-16" loading='lazy' />
                            </div>
                            <div className="flex flex-col justify-evenly max-sm:-mt-3 max-sm:justify-center -mt-7">
                                <p className="self-center text-4xl font-IBM_Plex font-bold">Future Goals</p>
                                <p className="text-white pl-20 pr-10 -mt-8 font-IBM_Plex font-light max-sm:text-[8px] max-sm:pl-0 max-sm:pr-6 max-sm:pt-7 max-sm:self-center max-sm:-ml-[13rem]">NICHEVE's future goals include global expansion, advanced tech integration, and enhanced community involvement. Become part of our journey as we redefine event planning, delivering personalized recommendations and seamless experiences worldwide, shaping the future of event management.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </main>
    )
}

export default About





