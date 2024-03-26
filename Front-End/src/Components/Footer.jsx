import React, { useState, useEffect } from 'react';
import '../App.css'
const Footer = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

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

    return (
        <footer className={visible ? 'footer-visible' : 'footer-hidden'}>
            <div className="fixed w-full z-40 max-sm:hidden">
                <div className="flex justify-between -mt-20">
                    <img src="/BodyImg/Rectangle.svg" alt="" className="z-10 backdrop-blur-sm" />
                    <img src="/BodyImg/Rectangle2.svg" alt="" className="z-10 backdrop-blur-sm" />
                </div>
                <div className="flex justify-between z-50">
                    <div className="flex justify-between w-2/6 pr-24 -mt-16 ml-11 font-display text-2xl text-white font-bold tracking-wider self-center z-50">
                        <h2 className="hover:text-Royal-Golden cursor-pointer">Contact Us</h2>
                        <h2 className="hover:text-Royal-Golden cursor-pointer">About Us</h2>
                        <h2 className="hover:text-Royal-Golden cursor-pointer">Explore</h2>
                    </div>
                    <div className="flex justify-between w-1/4 -mt-16 mr-16 self-center z-50 ">
                        <img src="/BodyImg/Github_logo.svg" alt="GitHub_Logo" className="cursor-pointer" />
                        <img src="/BodyImg/Instagram_Logo.svg" alt="Instagram_Logo" className="cursor-pointer" />
                        <img src="/BodyImg/Facebook_Logo.svg" alt="Facebook_Logo" className="cursor-pointer" />
                        <img src="/BodyImg/Twitter_Logo.svg" alt="Twitter_Logo" className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;