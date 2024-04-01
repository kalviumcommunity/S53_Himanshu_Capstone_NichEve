import React, { useState, useEffect } from 'react';
import '../../App.css'
import { NavLink } from 'react-router-dom';
const Footer = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [bgblur, setBgBlur] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 220) {
                setBgBlur(true);
            } else {
                setBgBlur(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={visible ? 'footer-visible' : 'footer-hidden'}>
            <div className="fixed w-full z-40 max-sm:hidden">
                <div className="flex justify-between -mt-20">
                    <img src="/BodyImg/Rectangle.svg" alt="" className={`z-10 ${bgblur?"backdrop-blur-sm": " "}`} loading='lazy' />
                    <img src="/BodyImg/Rectangle2.svg" alt="" className={`z-10 ${bgblur?"backdrop-blur-sm": " "}`} loading='lazy' />
                </div>
                <div className="flex justify-between z-50">
                    <div className="flex justify-between w-2/6 pr-24 -mt-16 ml-11 font-display text-2xl text-white font-bold tracking-wider self-center z-50">
                        <NavLink to='/Contact_us' >
                            <h2 className="hover:text-Royal-Golden cursor-pointer">Contact Us</h2>
                        </NavLink>
                        <NavLink to='/About'>
                            <h2 className="hover:text-Royal-Golden cursor-pointer">About Us</h2>
                        </NavLink>
                        <h2 className="hover:text-Royal-Golden cursor-pointer">Explore</h2>
                    </div>
                    <div className="flex justify-between w-1/4 -mt-16 mr-16 self-center z-50 ">
                        <a href="https://github.com/kalviumcommunity/S53_Himanshu_Capstone_NichEve" target='_blank'><img src="/BodyImg/Github_logo.svg" alt="GitHub_Logo" className="cursor-pointer" loading='lazy' /></a>
                        <a href="https://www.instagram.com/silent_lover__7080?igsh=MWtycGl3aTBhanZiMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src="/BodyImg/Instagram_Logo.svg" alt="Instagram_Logo" className="cursor-pointer" loading='lazy' /></a>
                        <img src="/BodyImg/Facebook_Logo.svg" alt="Facebook_Logo" className="cursor-pointer" loading='lazy' />
                        <a href="https://twitter.com/Himanshu9366" target="_blank" rel="noopener noreferrer"><img src="/BodyImg/Twitter_Logo.svg" alt="Twitter_Logo" className="cursor-pointer" loading='lazy' /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
