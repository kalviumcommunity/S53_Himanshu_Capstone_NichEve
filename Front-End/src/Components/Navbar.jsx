import React, { useState, useEffect } from 'react';
import Headroom from 'react-headroom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <Headroom>
        {windowWidth < 1000 ?
          <div class=" text-white flex justify-between pt-2 px-4 md:px-10 lg:pl-96 lg:pr-28 lg:px-10 w-full font-light align-middle font-display3 text-lg z-50 backdrop-blur-xl h-24 max-sm:w-full max-sm:text-sm max-sm:h-14 max-sm:pl-0 max-sm:pr-3 max-sm:pt-6 max-sm:pb-0">
            <div className="max-sm:flex flex-col max-sm:mt-7 max-sm:mt:10 max-sm: mr-11 max-sm:h-56 max-sm:w-20 sm:mt-11 sm:h-72 sm:-ml-5">
              <div className="self-center cursor-pointer max-sm:block lg:hidden sm:ml-10" onClick={toggleMenu}>
                <img src="/ImgNav/hamburger.png" alt="Menu" className="h-6 self-center" />
              </div>
              <div className={showMenu ? "block lg:flex max-sm:flex max-sm:flex-col max-sm:w-20 mt-3 max-sm:h-48 max-sm:justify-between max-sm:divide-y max-sm:divide-Royal-Golden max-sm:divide-x-4 max-sm:outline max-sm:outline-offset-2 max-sm:outline-2 sm:mt-6 sm:h-60 sm:justify-between sm:flex sm:flex-col sm:divide-y sm:divide-Royal-Golden sm:divide-x-4 sm:outline sm:outline-offset-2 sm:outline-2 sm:w-36" : "hidden lg:flex lg:items-center"}>
                <img src="/ImgNav/Avatar.svg" alt="Avatar" className="h-14 self-center cursor-pointer max-sm:h-8" />
                <p className="self-center hover:text-Royal-Golden cursor-pointer">HOME</p>
                <p className="self-center hover:text-Royal-Golden cursor-pointer">Events</p>
                <p className="self-center hover:text-Royal-Golden cursor-pointer">Blogs</p>
              </div>
            </div>
            <div className="mt-5 ">
              <img src="/ImgNav/Logo.svg" alt="Logo" className="max-sm:max-h-11 self-center" />
            </div>
            <div>
              <img src="/ImgNav/frame.svg" alt="frame" className="z-20 self-center translate-y-2 cursor-pointer max-sm:w-28 max-sm:h-12" />
              <p className="translate-x-9 -translate-y-9 hover:text-Royal-Golden cursor-pointer inline-block text-white max-sm:-translate-y-7">Login</p>
            </div>
          </div>
          :
          <div className="flex justify-between pt-2 pl-96 pr-28 px-10 text-white w-full font-light align-middle font-display3 text-lg z-50 backdrop-blur-xl h-24">
            <p className="self-center">HOME</p>
            <p className="self-center">Events</p>
            <div className="mt-5">
              <img src="/ImgNav/Logo.svg" alt="Logo" />
            </div>
            <p className="self-center">Blogs</p>
            <div>
              <img src="/ImgNav/frame.svg" alt="frame" className="z-20 self-center translate-y-2" />
              <p className="z-10 translate-x-9 -translate-y-9">Login</p>
            </div>
            <img src="/ImgNav/Avatar.svg" alt="Avatar" className="h-14 self-center" />
          </div>
        }

      </Headroom>
    </nav>
  );
};

export default Navbar;
