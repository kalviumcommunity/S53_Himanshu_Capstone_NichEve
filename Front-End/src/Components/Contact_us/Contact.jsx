import React, { useEffect, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar';
import Aos from 'aos';
import Footer from '../Reusable_comp/Footer';
import 'aos/dist/aos.css'
import '../../App.css'
const Contact = () => {
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
    <main className="bg-[url(/Contact_us_Img/bg-img.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10">
        <Navbar/>
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
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} loading='lazy'/>
                        </div>
                    </div>
                    <div className="fixed right-8 bottom-28 max-sm:right-5 max-sm:bottom-14" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine">
                        <img src="/Contact_us_Img/messages.svg" alt="send Message" className="w-20 h-20 cursor-pointer max-sm:w-14 max-sm:h-14" loading='lazy' />
                    </div>
                </div>
                <Footer />
                <div className="flex justify-center">
                    <div className="flex justify-around mt-64 pb-64 max-sm:flex-col ">
                        <img src="/Contact_us_Img/profile_pic.jpg" alt="contact_us_pic" loading='lazy' className="w-96 h-52 rounded-xl border-2 border-[#FF00F5] max-sm:h-28 max-sm:w-40 max-sm:self-center" />
                        <div className="flex flex-col h-72 justify-evenly -mt-16 w-96 max-sm:h-40 max-sm:mt-0 max-sm:w-auto">
                            <p className="text-3xl text-white w-[30rem] text-center ml-14 max-sm:text-sm max-sm:w-60 max-sm:ml-0">Hey, its me Himanshu Gupta and if you have any query you can contact me via- </p>
                            <div className="flex max-sm:ml-0 ml-14 max-sm:self-center">
                                <span className="self-center"><img src="/Contact_us_Img/Mail.svg" alt="Mail" loading='lazy' className="max-sm:w-7" /></span>
                                <span className="text-white text-2xl ml-4 -mt-1 max-sm:ml-2 max-sm:text-sm max-sm:mt-0">Sg707012@gmail.com</span>
                            </div>
                            <div className="flex ml-14 max-sm:self-center max-sm:ml-0 max-sm:mr-16">
                                <span className="self-center"><img src="/Contact_us_Img/Phone.svg" alt="phone_dialer" loading='lazy' className="max-sm:w-6" /></span>
                                <span className="text-white text-2xl ml-4 -mt-1 max-sm:ml-2 max-sm:text-sm max-sm:mt-0">9366496765</span>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    </main>
  )
}

export default Contact