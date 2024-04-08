import React, { useEffect, useState } from 'react';
import Navbar from '../Reusable_comp/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos';
import Footer from '../Reusable_comp/Footer';
import 'aos/dist/aos.css'
import '../../App.css'
import ApDhillon from '../coursel/ApDhillon';
import HoneySingh from '../coursel/Honey';

const Explore = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [val, setvalue] = useState(0);
    useEffect(() => {
        AOS.init({ duration: 1000 });
        gsap.registerPlugin(ScrollTrigger);
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '.gsapscroll',
                scrollX: '20%, 1000%',
                scrollY: '100%',
                scrub: true,
                markers: false
            }
        })
        t1.to('.gsapscroll', {
            x: 100,
        })
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            if (val < ApDhillon.length - 1) {
                setvalue(val + 1)
            } else {
                setvalue(0)
            }
        }, 3500);

        return () => {
            clearInterval(interval)
        }
    }, [val, ApDhillon.length])
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
    const handleClick2 = () => {
        if (val < ApDhillon.length - 1) {
            setvalue(val + 1)
        } else {
            setvalue(0)
        }
    }
    const handleClick1 = () => {
        if (val > 0) {
            setvalue(val - 1)
        }
        else {
            setvalue(ApDhillon.length - 1)
        }
    }
    return (
        <main className="bg-[url(/Explore_img/bg.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10 ">
            <Navbar />
            <div className="-mt-24">
                <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <p className=" text-Royal-Golden mr-40 font-Lavishly_Yours text-10xl max-sm:text-7xl max-sm:mr-16">Lets Explore</p>
                        <p className="text-gray-400 text-7xl ml-96 max-sm:text-4xl max-sm:ml-32">The Memories</p>
                    </div>
                    <div className={visible ? 'symbol-visible' : 'symbol-hidden'}>
                        <div className='flex flex-col justify-center'>
                            <div className="mt-32 -mb-80 animate-bounce flex flex-col justify-center max-sm:mt-44 cursor-pointer z-50 max-sm:z-0 " >
                                <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                                <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <div className='flex flex-col mt-96 pb-28'>
                    <div>
                        <div className='flex justify-center'>
                            <p className='text-white text-5xl'>Make Some Noise For AP Dhillon!!!</p>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex border-[4px] border-border-brown w-3/4 justify-between pl-10 pr-10 bg-[#1E1D1D] mt-24 rounded-md'>
                                <div className='flex flex-col justify-center'>
                                    <img src="/Explore_img/ap-dhillon-profile.jpg" alt="AP Dhillon profile pic" className="w-48 h-48 rounded-full border-white border-2" />
                                    <p className="text-white self-center mt-6 text-2xl">AP Dhillon</p>
                                </div>
                                <div className="relative pt-5 pb-5">
                                    <div>
                                        <div className='absolute top-[45%] pl-3 z-10'>
                                            <p className='text-white cursor-pointer text-4xl' onClick={handleClick1} >&lt;</p>
                                        </div>
                                        <div className='absolute top-[45%] right-0 pr-3 z-10'>
                                            <p className='text-white cursor-pointer text-4xl' onClick={handleClick2} >&gt;</p>
                                        </div>
                                    </div>
                                    <img src={ApDhillon[val].img} alt="AP Dhillon" className=" w-[45rem] h-[18rem] opacity-80 -z-10 rounded-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-4/5 self-center mt-44"/>
                    <div>
                        <div className='flex justify-center mt-44'>
                            <p className='text-white text-5xl'>Yo Yo's back! Stage awaits!</p>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex border-[4px] border-border-brown w-3/4 justify-between pl-10 pr-10 bg-[#1E1D1D] mt-24 rounded-md'>
                                <div className='flex flex-col justify-center'>
                                    <img src="/Explore_img/Honey-profile.jpg" alt="AP Dhillon profile pic" className="w-48 h-48 rounded-full border-white border-2" />
                                    <p className="text-white self-center mt-6 text-2xl">Honey Singh</p>
                                </div>
                                <div className="relative pt-5 pb-5">
                                    <div>
                                        <div className='absolute top-[45%] pl-3 z-10'>
                                            <p className='text-white cursor-pointer text-4xl' onClick={handleClick1} >&lt;</p>
                                        </div>
                                        <div className='absolute top-[45%] right-0 pr-3 z-10'>
                                            <p className='text-white cursor-pointer text-4xl' onClick={handleClick2} >&gt;</p>
                                        </div>
                                    </div>
                                    <img src={HoneySingh[val].img} alt="AP Dhillon" className=" w-[45rem] h-[18rem] opacity-80 -z-10 rounded-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Explore