import React from 'react'
import Headroom from 'react-headroom'

const Navbar = () => {
  return (
    <nav>
      <Headroom>
        <div class="flex justify-between pt-2 pl-96 pr-28 px-10 text-white w-full font-light align-middle font-display3 text-lg z-50 backdrop-blur-xl h-24">
            <p class="self-center">HOME</p>
            <p class="self-center">Events</p>
            <div class="mt-5">
              <img src="/ImgNav/Logo.svg" alt="Logo" /> 
            </div>
            <p class="self-center">Blogs</p>
            <div>
              <img src="/ImgNav/frame.svg" alt="frame" class="z-20 self-center translate-y-2" />
              <p class="z-10 translate-x-9 -translate-y-9">Login</p>
            </div>
            <img src="/ImgNav/Avatar.svg" alt="Avatar" class="h-14 self-center" />
        </div>
      </Headroom>
    </nav>
  )
}

export default Navbar