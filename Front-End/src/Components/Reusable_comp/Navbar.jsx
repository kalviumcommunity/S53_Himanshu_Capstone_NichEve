import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Headroom from 'react-headroom';
import './foot.css'
import { SignedIn, SignInButton, SignedOut, SignOutButton, UserButton, useUser } from '@clerk/clerk-react';
import axios from 'axios'



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [blur, setIsBlur] = useState(false);
  const [bgblur, setBgBlur] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [LoginData,setLoginData] = useState([]);
  const [Approved,setApproved] = useState(false)
  const [User_Email, setUserEmail] = useState("");
  const Use = useUser();
  useEffect(() => {
    if (Use.user) {
        setUserEmail(Use.user?.emailAddresses?.[0]?.emailAddress || "");
    }
}, [Use.user]);
// let username = Use.user.username
// let capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsBlur(!blur)
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgBlur(true);
      } else {
        setBgBlur(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useState(()=>{
    axios.get("http://localhost:4000/ListWithUs")
    .then(res=>{
        setLoginData(res.data.List)
    }).catch(error=>{
        console.log(error);
    })
},[])
useEffect(() => {
  if (LoginData.length > 0 && User_Email !== "") {
      const approved = LoginData.some(item => item.from_email === User_Email && item.Approved === true);
      setApproved(approved);
  }
}, [LoginData, User_Email]);
// console.log(Use.user);
// console.log(LoginData);
// console.log(Approved);    
  return (
    <nav>
      <Headroom>
        {windowWidth < 1000 ?
          <div class={` text-white flex justify-between pt-2 px-4 w-full font-light align-middle font-display3 text-lg z-50 ${bgblur ? 'backdrop-blur-sm' : ''} h-24 max-sm:w-full max-sm:text-sm max-sm:h-16 max-sm:pl-0 max-sm:pr-3 max-sm:pt-0 max-sm:pb-0`}>
            <div className="max-sm:flex flex-col max-sm:mt-7 max-sm:mt:10 max-sm: mr-11 max-sm:h-screen max-sm:w-20 sm:mt-11 sm:h-72 sm:-ml-5">
              <div className="self-center cursor-pointer max-sm:block lg:hidden sm:ml-10" onClick={toggleMenu}>
                <img src="/ImgNav/hamburger.png" alt="Menu" className="h-6 self-center" loading='lazy' />
              </div>
              <div className={showMenu ? "block lg:flex max-sm:flex max-sm:flex-col max-sm:w-screen mt-3 h-screen max-sm:justify-between max-sm:divide-y max-sm:divide-Royal-Golden max-sm:divide-x-4 max-sm:outline max-sm:outline-offset-2 max-sm:outline-2 sm:mt-6 sm:justify-between sm:flex sm:flex-col sm:divide-y sm:divide-Royal-Golden sm:divide-x-4 sm:outline sm:outline-offset-2 sm:outline-2 max-sm:bg-black max-sm:outline-Royal-Golden backdrop-blur-sm z-50 max-sm:pb-44 max-sm:pt-10" : "hidden lg:flex lg:items-center"}>
                <SignedIn>
                  <div className='mt-6 flex justify-center align-middle'>
                  <UserButton userProfileMode='navigation'>
                  </UserButton>
                  </div>
                </SignedIn>
                <NavLink to='/' className="self-center">
                <button class="text-white text-lg font-semibold cursor-pointer relative border-none bg-transparent uppercase transition-colors ease-in-out duration-400 hover:text-white focus:text-white focus:after:w-full focus:after:left-0 hover:after:w-full hover:after:left-0 after:pointer-events-none after:absolute after:bottom-[-2px] after:left-[50%] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400">HOME</button>
                </NavLink>
                <NavLink to='/Event' className="self-center">
                  <p className="self-center hover:text-Royal-Golden cursor-pointer">Events</p>
                </NavLink>
                <NavLink to='/Blog' className="self-center">
                  <p className="self-center hover:text-Royal-Golden cursor-pointer">Blogs</p>
                </NavLink>
                <NavLink to='/About' className="self-center">
                  <p className="self-center hover:text-Royal-Golden cursor-pointer">About us</p>
                </NavLink>
                <NavLink to='/Contact_us' className="self-center">
                  <p className="self-center hover:text-Royal-Golden cursor-pointer">Contact us</p>
                </NavLink>
                <NavLink to='/Explore' className="self-center">
                  <p className="self-center hover:text-Royal-Golden cursor-pointer">Explore</p>
                </NavLink>
                {/* <p className='text-white text-3x'>Hello</p> */}
              </div>
            </div>
            <div className="mt-5 ">
              <NavLink to='/'>
                <img src="/ImgNav/Logo.svg" alt="Logo" className="max-sm:max-h-11 self-center" loading='lazy' />
              </NavLink>
            </div>
              <SignedOut>
                <SignInButton>
                  <div>
                  <img src="/ImgNav/frame.svg" alt="frame" className="z-20 self-center translate-y-2 cursor-pointer max-sm:w-28 max-sm:h-12" loading='lazy' />
                  <p className="translate-x-9 -translate-y-9 hover:text-Royal-Golden cursor-pointer inline-block text-white max-sm:-translate-y-7">Login</p>
                  </div>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <SignOutButton>
                    <div>
                      <img src="/ImgNav/frame.svg" alt="frame" className="z-20 self-center translate-y-2 cursor-pointer max-sm:w-28 max-sm:h-12" loading='lazy' />
                      <p className="translate-x-7 -translate-y-9 hover:text-Royal-Golden cursor-pointer inline-block text-white max-sm:-translate-y-7 max-sm:translate-x-8">Logout</p>
                    </div>
                </SignOutButton>
              </SignedIn>
          </div>
          :
          <div className="flex justify-center align-middle self-center">
            <div className={`flex justify-evenly pl-14 text-white w-full font-light align-middle items-center font-display3 text-lg z-50 ${bgblur ? 'backdrop-blur-xl' : ''} h-24 self-center`}>
              <NavLink to='/' className="self-center">
              <button class="text-white text-lg cursor-pointer relative border-none bg-transparent uppercase transition-colors ease-in-out duration-400 hover:text-white focus:text-white focus:after:w-full focus:after:left-0 hover:after:w-full hover:after:left-0 after:pointer-events-none after:absolute after:bottom-[-2px] after:left-[50%] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400">HOME</button>
              </NavLink>
              <NavLink to='/Event' className="self-center">
              <button class="text-white text-lg cursor-pointer relative border-none bg-transparent uppercase transition-colors ease-in-out duration-400 hover:text-white focus:text-white focus:after:w-full focus:after:left-0 hover:after:w-full hover:after:left-0 after:pointer-events-none after:absolute after:bottom-[-2px] after:left-[50%] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400">EVENTS</button>
              </NavLink>
              <NavLink to='/' className="self-center">
                <div className="mt-5">
                  <img src="/ImgNav/Logo.svg" alt="Logo" loading='lazy' />
                </div>
              </NavLink>
              <NavLink to='/Blog' className="self-center">
                <button class="text-white cursor-pointer relative border-none bg-transparent uppercase transition-colors ease-in-out duration-400 hover:text-white focus:text-white focus:after:w-full focus:after:left-0 hover:after:w-full hover:after:left-0 after:pointer-events-none after:absolute after:bottom-[-2px] after:left-[50%] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400">Blogs</button>
              </NavLink>
              <div>
                <SignedOut>
                  <SignInButton>
                    <div className="mt-2">
                      <img src="/ImgNav/frame.svg" alt="frame" className="z-20 self-center translate-y-2 cursor-pointer max-sm:w-28 max-sm:h-12" loading='lazy' />
                      <p className="translate-x-9 -translate-y-9 hover:text-Royal-Golden cursor-pointer inline-block text-white max-sm:-translate-y-7">Login</p>
                    </div>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <div className='h-6'>
                  <UserButton userProfileMode='navigation'>
                  </UserButton>
                  </div>
                </SignedIn>
              </div>
              <NavLink to='/dashboard'>
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                      <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                      <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
                      <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
                    </svg>
                  </div>
              </NavLink>
              {/* <div className='mt-8 right-7 absolute w-44 text-center text-[1.2rem]'>
                <p className='text-[#A99155]'>Welcome👋, <span className='text-[#807e7f]'>{capitalizedUsername} </span></p>
                </div> */}
            </div>
  
          </div>
        }
        <>
          <NavLink to='/ListWithUs'>
          
          <div className={Approved ? "hidden" : "absolute right-5"}>
            <img src="/ImgNav/List_with_us.svg" alt="List with Us" className='w-36 cursor-pointer' />
          </div>
          </NavLink>
        </>
        
      </Headroom>
    </nav>
  );
};

export default Navbar;
