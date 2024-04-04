import React, { useEffect, useState } from 'react';
import Navbar from '../Reusable_comp/Navbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AOS from 'aos';
import Footer from '../Reusable_comp/Footer';
import 'aos/dist/aos.css'
import '../../App.css'

const Explore = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
        <main className="bg-[url(/Explore_img/bg.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10 ">
            <Navbar />
            <div className="-mt-24">
                <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <p className=" text-Royal-Golden font-Lavishly_Yours text-10xl max-sm:text-5xl">Lets Explore</p>
                        <p className="text-gray-400  text-7xl ml-44 max-sm:text-7xl max-sm:ml-16">The Memories</p>
                    </div>
                    <div className={visible ? 'symbol-visible' : 'symbol-hidden'}>
                        <div className="mt-44 -mb-80 animate-bounce flex flex-col justify-center max-sm:mt-60 " >
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default Explore