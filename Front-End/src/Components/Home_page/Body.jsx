import React, { useEffect, useState } from 'react';
import Navbar from '../Reusable_comp/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos';
import Footer from '../Reusable_comp/Footer';
import 'aos/dist/aos.css'
import '../../App.css'


const Body = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(()=>{
        AOS.init({duration:1000});
        gsap.registerPlugin(ScrollTrigger);
        let t1 = gsap.timeline({
            scrollTrigger:{
                trigger: '.gsapscroll',
                scrollX:'20%, 1000%',
                scrollY:'100%',
                scrub: true,
                markers: false
            }
        })
        t1.to('.gsapscroll',{
            x:100,
        })
    },[])
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(currentScrollPos < 30);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    const handleClick = () => {
        window.scrollBy({
            top: 900,
            behavior: 'smooth'
        });
    };
    return (
        <main className="w-full h-screen overflow-y" >
            <Navbar/>
            <div className="bg-[url(/BodyImg/Bg1.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10 -mt-24">
                <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <div className='text'><h1 className="text-Royal-Golden text-10xl font-display max-sm:text-7xl" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">NICHEVE</h1></div>
                    <h2 className="text-2xl text-white absolute mt-44 font-display2 font-light max-sm:text-xs max-sm:mt-24" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">-Embark on a journey of joy Where Every Moment Counts- </h2>
                    <div className={visible ? 'symbol-visible' : 'symbol-hidden'}>
                        <div className="mt-40 -mb-80 animate-bounce flex flex-col justify-center max-sm:mt-60 " >
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                        </div>
                    </div>
                </div>
                <Footer/>
                <div className="flex justify-between mt-80  pr-4 max-sm:flex max-sm:flex-col-reverse max-sm:mt-60">
                    <div className = {windowWidth <= 600 ? "max-sm:ml-14" : "gsapscroll"} >
                        <p className="font-display4 font-hard text-3xl text-white max-sm:text-lg max-sm:mt-20">Book your unforgettable</p>
                        <p className="font-display5 text-med text-crinze-Purple ml-14 max-sm:text-2xl">Memories</p>
                        <div className="ml-40 mt-14 max-sm:ml-24 max-sm:mt-5 max-sm:relative -z-0">
                            <img src="/BodyImg/Rectangle3.svg" alt="Frame" className="z-20 max-sm:h-14 max-sm:w-28 max-sm:absolute" loading='lazy' />
                            <p className="text-white font-display6 text-xl z-10 translate-x-10 -translate-y-11 max-sm:text-base max-sm:translate-x-0 max-sm:translate-y-0 max-sm:absolute max-sm:transform max-sm:top-4 max-sm:ml-7">Explore</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="20" data-aos-easing="ease-in-sine">
                        <div className="flex ml-3">
                            <img src="/BodyImg/img-1.jpg" alt="" className="-mt-24 h-64 mr-10 rounded-lg max-sm:h-32 max-sm:ml-4" loading='lazy' />
                            <img src="/BodyImg/img-2.jpg" alt="" className="h-64 rounded-lg mt-40 mr-4 max-sm:h-32 max-sm:-ml-5 max-sm:mt-16" loading='lazy' />
                            <img src="/BodyImg/img-3.jpg" alt="" className="h-72 rounded-lg -mt-36 mr-24 max-sm:h-32 max-sm:-mt-28 max-sm:mr-0" loading='lazy' />
                        </div>
                    </div>
                </div>
                <div className="mt-60 max-sm:mt-52 max-sm:ml-16">
                    <div className="ml-48 mb-24 max-sm:ml-0">
                        <p className="text-5xl text-white font-display6 max-sm:text-2xl">What we Provides for You</p>
                    </div>
                    <div className="flex justify-evenly max-sm:flex max-sm:flex-col max-sm:h-[65rem]" data-aos="fade-up" data-aos-offset="20" data-aos-easing="ease-in-sine">
                        <div className=" h-72 w-64 bg-light-Green rounded-2xl pt-6 pr-7 pl-4 pb-5 flex flex-col justify-between">
                            <div className="flex flex-col justify-between h-28">
                                <div className="h-16 w-16 rounded-xl bg-leaf-Green flex justify-center">
                                    <img src="/BodyImg/Bulb.svg" alt="Bulb" className="h-12 self-center" loading='lazy' />
                                </div>
                                <p className="font-display7 font-light-hard text-xl text-black">BOOKING</p>
                            </div>
                            <div className="flex flex-col justify-between h-32">
                                <p className=" font-Roboto font-lighter text-lighter-Gray text-xs z-10">Comprehensive event solutions tailored to your needs. From booking venues to managing logistics, we ensure seamless execution, leaving you free to focus on creating unforgettable experiences.</p>
                                <p className=" font-Roboto font-semibold text-xs to-black">Learn more</p>
                            </div>
                            <div className="h-24 w-24 bg-yellow-round blur-2xl rounded-full absolute ml-28 mt-40 z-0 "></div>
                        </div>
                        <div className=" h-72 w-64 bg-light-Purple rounded-2xl pt-6 pr-7 pl-4 pb-5 flex flex-col justify-between">
                            <div className="flex flex-col justify-between h-28">
                                <div className="h-16 w-16 rounded-xl bg-shiny-Purple flex justify-center">
                                    <img src="/BodyImg/Bulb.svg" alt="Bulb" className="h-12 self-center" loading='lazy' />
                                </div>
                                <p className="font-display7 font-light-hard text-xl text-black">BOOKING</p>
                            </div>
                            <div className="flex flex-col justify-between h-32">
                                <p className=" font-Roboto font-lighter text-lighter-Gray text-xs z-10">Comprehensive event solutions tailored to your needs. From booking venues to managing logistics, we ensure seamless execution, leaving you free to focus on creating unforgettable experiences.</p>
                                <p className=" font-Roboto font-semibold text-xs to-black">Learn more</p>
                            </div>
                            <div className="h-24 w-24 bg-shiny-Purple blur-2xl rounded-full absolute ml-28 mt-40 z-0 "></div>
                        </div>
                        <div className=" h-72 w-64 bg-light-Yellow rounded-2xl pt-6 pr-7 pl-4 pb-5 flex flex-col justify-between">
                            <div className="flex flex-col justify-between h-28">
                                <div className="h-16 w-16 rounded-xl bg-dark-Yellow flex justify-center">
                                    <img src="/BodyImg/Bulb.svg" alt="Bulb" className="h-12 self-center" loading='lazy' />
                                </div>
                                <p className="font-display7 font-light-hard text-xl text-black">BOOKING</p>
                            </div>
                            <div className="flex flex-col justify-between h-32">
                                <p className=" font-Roboto font-lighter text-lighter-Gray text-xs z-10">Comprehensive event solutions tailored to your needs. From booking venues to managing logistics, we ensure seamless execution, leaving you free to focus on creating unforgettable experiences.</p>
                                <p className=" font-Roboto font-semibold text-xs to-black">Learn more</p>
                            </div>
                            <div className="h-24 w-24 bg-yellow-round blur-2xl rounded-full absolute ml-28 mt-40 z-0 "></div>
                        </div>
                    </div>
                </div>
                <div className="mt-60">
                    <div className="flex justify-center">
                        <p className="font-Inter font-bold text-white text-5xl max-sm:text-3xl">Engagement Boost</p>
                    </div>
                    <div className="flex justify-center mt-7">
                        <p className="font-Inter font-light text-white text-sm">Higher interaction rates</p>
                    </div>
                    <div className="flex mt-16 justify-evenly max-sm:flex-col" data-aos="fade-up" data-aos-offset="20" data-aos-easing="ease-in-sine">
                        <div className="max-sm:flex max-sm:flex-col max-sm:justify-center">
                            <img src="/BodyImg/Iphone.svg" alt="Iphone-Image" className="h-80" loading='lazy' />
                            <div className="h-28 w-80 bg-unique-gray rounded-3xl pt-4 pl-5 text-lg -translate-y-16 max-sm:h-20 max-sm:w-52 max-sm:-translate-y-10 max-sm:ml-[6.563rem]">
                                <p className="font-Inter font-semibold text-white max-sm:text-sm">Realistic Previews</p>
                                <p className="font-Inter text-sm text-white mt-2 max-sm:text-xs">Preview and tweak your event setup in a virtual space.</p>
                            </div>
                        </div>
                        <div className="max-sm:flex max-sm:flex-col max-sm:justify-center">
                            <img src="/BodyImg/Iphone.svg" alt="Iphone-Image" className="h-80" loading='lazy' />
                            <div className="h-28 w-80 bg-unique-gray rounded-3xl pt-4 pl-5 text-lg -translate-y-16 max-sm:h-20 max-sm:w-52 max-sm:-translate-y-10 max-sm:ml-[6.563rem]">
                                <p className="font-Inter font-semibold text-white max-sm:text-sm">Realistic Previews</p>
                                <p className="font-Inter text-sm text-white mt-2 max-sm:text-xs">Preview and tweak your event setup in a virtual space.</p>
                            </div>
                        </div>
                        <div className="max-sm:flex max-sm:flex-col max-sm:justify-center">
                            <img src="/BodyImg/Iphone.svg" alt="Iphone-Image" className="h-80" loading='lazy' />
                            <div className="h-28 w-80 bg-unique-gray rounded-3xl pt-4 pl-5 text-lg -translate-y-16 max-sm:h-20 max-sm:w-52 max-sm:-translate-y-10 max-sm:ml-[6.563rem]">
                                <p className="font-Inter font-semibold text-white max-sm:text-sm">Realistic Previews</p>
                                <p className="font-Inter text-sm text-white mt-2 max-sm:text-xs">Preview and tweak your event setup in a virtual space.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-60 flex justify-evenly align-middle max-sm:flex-col-reverse max-sm:justify-between pb-24 max-sm:pb-24 ">
                    <div className=" self-center -mt-16 max-sm:mt-20">
                        <p className="font-Sync font-bold text-4xl text-white pb-4 max-sm:text-2xl">Simple Steps</p>
                        <div>
                            <div className="flex pb-4 max-sm:pb-3">
                                <img src="/BodyImg/chat.svg" alt="" loading='lazy'/>
                                <p className="font-Work_Sans text-white text-lg ml-4 max-sm:text-base">Choose a theme, set the mood.</p>
                            </div>
                            <div className="flex pb-4">
                                <img src="/BodyImg/customize.svg" alt="" loading='lazy'/>
                                <p className="font-Work_Sans text-white text-lg ml-4 max-sm:text-base">Customize the animation details.</p>
                            </div>
                            <div className="flex">
                                <img src="/BodyImg/details.svg" alt="" loading='lazy' />
                                <p className="font-Work_Sans text-white text-lg ml-4 max-sm:text-base">Enjoy your animated event!</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-sm:flex max-sm:flex-col mb-11">
                        <img src="/BodyImg/iphone2.svg" alt="Iphone" className="max-sm:h-96" loading='lazy' />
                        <div className="h-11 w-32 bg-unique-gray rounded-lg flex justify-between pl-6 pr-4 ml-20 max-sm:ml-40 max-sm:h-10 max-sm:w-28 max-sm:pl-4">
                            <p className="text-white font-Inter text-xs self-center">Plan Yours</p>
                            <img src="/BodyImg/Icecream.svg" alt="" className="h-5 self-center max-sm:h-4" loading='lazy'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Body;
