import React from 'react'
import Headroom from 'react-headroom'

const Navbar = () => {
  return (
    <nav>
      <Headroom>
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
      </Headroom>
    </nav>
  )
}

export default Navbar