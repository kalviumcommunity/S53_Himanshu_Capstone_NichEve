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
        <main className="bg-[url(/Contact_us_Img/bg-img.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10">
            <Navbar />
            <div className='-mt-24'>
                <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <div data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" className="mt-20">
                        <p className=" text-white text-8xl max-sm:text-4xl ml-10">Feel Free</p>
                        <span className=" text-white text-8xl max-sm:text-4xl ml-10">to</span>
                        <span className="text-[#B39342] text-10xl font-Lavishly_Yours max-sm:text-6xl"> Contact Us</span>
                    </div>
                    <div className={visible ? 'symbol-visible' : 'symbol-hidden'}>
                        <div className="mt-32 -mb-80 animate-bounce flex flex-col justify-center max-sm:mt-60 " >
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy' />
                        </div>
                    </div>
                    <div className="fixed right-8 bottom-28 max-sm:right-5 max-sm:bottom-14" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img src="/Contact_us_Img/messages.svg" alt="send Message" className="w-20 h-20 cursor-pointer max-sm:w-14 max-sm:h-14" loading='lazy' />
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default About