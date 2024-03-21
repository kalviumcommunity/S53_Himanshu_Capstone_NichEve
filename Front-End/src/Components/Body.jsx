import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Navbar from './Navbar';


const Body = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
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
    return (
        <main class="w-full h-screen overflow-y" >
            <Navbar/>
            <div className="bg-[url(/BodyImg/Bg1.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10 -mt-24">
                <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <h1 className="text-Royal-Golden text-10xl font-display" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">NICHEVE</h1>
                    <h2 className="text-2xl text-white absolute mt-44 font-display2 font-light" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">-Embark on a journey of joy Where Every Moment Counts- </h2>
                    <div className="absolute mt-96 -mb-80" >
                        <img src="/BodyImg/symbol.svg" alt="Gt Symbol" />
                        <img src="/BodyImg/symbol.svg" alt="Gt Symbol" />
                    </div>
                </div>
                <div className="flex justify-between -mt-20">
                    <img src="/BodyImg/Rectangle.svg" alt="" />
                    <img src="/BodyImg/Rectangle2.svg" alt="" />
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-between w-2/6 pr-24 -mt-16 ml-11 font-display text-2xl text-white font-bold tracking-wider self-center">
                        <h2>Contact Us</h2>
                        <h2>About Us</h2>
                        <h2>Explore</h2>
                    </div>
                    <div className="flex justify-between w-1/4 -mt-16 mr-16 self-center ">
                        <img src="/BodyImg/Github_logo.svg" alt="GitHub_Logo" />
                        <img src="/BodyImg/Instagram_Logo.svg" alt="Instagram_Logo" />
                        <img src="/BodyImg/Facebook_Logo.svg" alt="Facebook_Logo" />
                        <img src="/BodyImg/Twitter_Logo.svg" alt="Twitter_Logo" />
                    </div>
                </div>
                <div class="flex justify-between mt-80  pr-4">
                    <div className='gsapscroll'>
                        <p class="font-display4 font-hard text-3xl text-white">Book your unforgettable</p>
                        <p class="font-display5 text-med text-crinze-Purple ml-14">Memories</p>
                        <div class="ml-40 mt-14">
                            <img src="/BodyImg/Rectangle3.svg" alt="Frame" class="z-20" />
                            <p class="text-white font-display6 text-xl z-10 translate-x-10 -translate-y-11">Explore</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-offset="20" data-aos-easing="ease-in-sine">
                        <div class="flex">
                            <img src="/BodyImg/img-1.jpg" alt="" class="-mt-24 h-64 mr-10 rounded-lg" />
                            <img src="/BodyImg/img-2.jpg" alt="" class="h-64 rounded-lg mt-40 mr-4" />
                            <img src="/BodyImg/img-3.jpg" alt="" class="h-72 rounded-lg -mt-36 mr-24" />
                        </div>
                    </div>
                </div>
                <div class="mt-60">
                    <div class="ml-48 mb-24">
                        <p class="text-5xl text-white font-display6">What we Provides for You</p>
                    </div>
                    <div class="flex justify-evenly" data-aos="fade-up" data-aos-offset="20" data-aos-easing="ease-in-sine">
                        <div class=" h-72 w-64 bg-light-Green rounded-2xl pt-6 pr-7 pl-4 pb-5 flex flex-col justify-between">
                            <div class="flex flex-col justify-between h-28">
                                <div class="h-16 w-16 rounded-xl bg-leaf-Green flex justify-center">
                                    <img src="/BodyImg/Bulb.svg" alt="Bulb" class="h-12 self-center" />
                                </div>
                                <p class="font-display7 font-light-hard text-xl text-black">BOOKING</p>
                            </div>
                            <div class="flex flex-col justify-between h-32">
                                <p class=" font-Roboto font-lighter text-lighter-Gray text-xs z-10">Comprehensive event solutions tailored to your needs. From booking venues to managing logistics, we ensure seamless execution, leaving you free to focus on creating unforgettable experiences.</p>
                                <p class=" font-Roboto font-semibold text-xs to-black">Learn more</p>
                            </div>
                            <div class="h-24 w-24 bg-yellow-round blur-2xl rounded-full absolute ml-28 mt-40 z-0 "></div>
                        </div>
                        <div class=" h-72 w-64 bg-light-Purple rounded-2xl pt-6 pr-7 pl-4 pb-5 flex flex-col justify-between">
                            <div class="flex flex-col justify-between h-28">
                                <div class="h-16 w-16 rounded-xl bg-shiny-Purple flex justify-center">
                                    <img src="/BodyImg/Bulb.svg" alt="Bulb" class="h-12 self-center" />
                                </div>
                                <p class="font-display7 font-light-hard text-xl text-black">BOOKING</p>
                            </div>
                            <div class="flex flex-col justify-between h-32">
                                <p class=" font-Roboto font-lighter text-lighter-Gray text-xs z-10">Comprehensive event solutions tailored to your needs. From booking venues to managing logistics, we ensure seamless execution, leaving you free to focus on creating unforgettable experiences.</p>
                                <p class=" font-Roboto font-semibold text-xs to-black">Learn more</p>
                            </div>
                            <div class="h-24 w-24 bg-shiny-Purple blur-2xl rounded-full absolute ml-28 mt-40 z-0 "></div>
                        </div>
                        <div class=" h-72 w-64 bg-light-Yellow rounded-2xl pt-6 pr-7 pl-4 pb-5 flex flex-col justify-between">
                            <div class="flex flex-col justify-between h-28">
                                <div class="h-16 w-16 rounded-xl bg-dark-Yellow flex justify-center">
                                    <img src="/BodyImg/Bulb.svg" alt="Bulb" class="h-12 self-center" />
                                </div>
                                <p class="font-display7 font-light-hard text-xl text-black">BOOKING</p>
                            </div>
                            <div class="flex flex-col justify-between h-32">
                                <p class=" font-Roboto font-lighter text-lighter-Gray text-xs z-10">Comprehensive event solutions tailored to your needs. From booking venues to managing logistics, we ensure seamless execution, leaving you free to focus on creating unforgettable experiences.</p>
                                <p class=" font-Roboto font-semibold text-xs to-black">Learn more</p>
                            </div>
                            <div class="h-24 w-24 bg-yellow-round blur-2xl rounded-full absolute ml-28 mt-40 z-0 "></div>
                        </div>
                    </div>
                </div>
                <div class="mt-60">
                    <div class="flex justify-center">
                        <p class="font-Inter font-bold text-white text-5xl">Engagement Boost</p>
                    </div>
                    <div class="flex justify-center mt-7">
                        <p class="font-Inter font-light text-white text-sm">Higher interaction rates</p>
                    </div>
                    <div class="flex mt-16 justify-evenly" data-aos="fade-up" data-aos-offset="20" data-aos-easing="ease-in-sine">
                        <div>
                            <img src="/BodyImg/Iphone.svg" alt="Iphone-Image" />
                            <div class="h-28 w-80 bg-unique-gray rounded-3xl pt-4 pl-5 text-lg -translate-y-16">
                                <p class="font-Inter font-semibold text-white">Realistic Previews</p>
                                <p class="font-Inter text-sm text-white mt-2">Preview and tweak your event setup in a virtual space.</p>
                            </div>
                        </div>
                        <div>
                            <img src="/BodyImg/Iphone.svg" alt="Iphone-Image" />
                            <div class="h-28 w-80 bg-unique-gray rounded-3xl pt-4 pl-5 text-lg -translate-y-16">
                                <p class="font-Inter font-semibold text-white">Realistic Previews</p>
                                <p class="font-Inter text-sm text-white mt-2">Preview and tweak your event setup in a virtual space.</p>
                            </div>
                        </div>
                        <div>
                            <img src="/BodyImg/Iphone.svg" alt="Iphone-Image" />
                            <div class="h-28 w-80 bg-unique-gray rounded-3xl pt-4 pl-5 text-lg -translate-y-16">
                                <p class="font-Inter font-semibold text-white">Realistic Previews</p>
                                <p class="font-Inter text-sm text-white mt-2">Preview and tweak your event setup in a virtual space.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-60 flex justify-evenly align-middle">
                    <div class=" self-center">
                        <p class="font-Sync font-bold text-4xl text-white pb-4">Simple Steps</p>
                        <div>
                            <div class="flex pb-4">
                                <img src="/BodyImg/chat.svg" alt="" />
                                <p class="font-Work_Sans text-white text-lg ml-4">Choose a theme, set the mood.</p>
                            </div>
                            <div class="flex pb-4">
                                <img src="/BodyImg/customize.svg" alt="" />
                                <p class="font-Work_Sans text-white text-lg ml-4">Customize the animation details.</p>
                            </div>
                            <div class="flex">
                                <img src="/BodyImg/details.svg" alt="" />
                                <p class="font-Work_Sans text-white text-lg ml-4">Enjoy your animated event!</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/BodyImg/iphone2.svg" alt=""  />
                        <div class="h-11 w-32 bg-unique-gray rounded-lg flex justify-between pl-6 pr-4 ml-20">
                            <p class="text-white font-Inter text-xs self-center">Plan Yours</p>
                            <img src="/BodyImg/Icecream.svg" alt="" class="h-5 self-center" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Body;
