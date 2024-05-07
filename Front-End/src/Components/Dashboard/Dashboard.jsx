import React from 'react'
import Navbar from '../Reusable_comp/Navbar'
import { useUser } from '@clerk/clerk-react'

const Dashboard = () => {
    const Use = useUser();
    console.log(Use);
  return (
    <main className="bg-black h-screen">
        <Navbar/>
        <div>
            <div className="mt-14 flex flex-col justify-center items-center">
                <div className="mb-14">
                    <h1 className='text-4xl text-[#d0c11e]'>User DashBoard</h1>
                </div>
                <div className="border-2 w-[32rem] h-auto pt-9 pl-14 pb-10 rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500">
                    <h1 className='text-white text-3xl'>User Profile</h1>
                    <div className='flex flex-col h-44 justify-between max-w-96'>
                        <div className='flex items-center mt-10 justify-between'>
                            <img src={Use.user.imageUrl} alt="profile image" className="w-10 rounded-full h-10"/>
                            <p className='text-white text-[1.3rem]'>{Use.user.username.toUpperCase()}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className="text-white  text-[1.3rem]">Email</p>
                            <p className="text-white text-[1.3rem]">{Use.user.primaryEmailAddress.emailAddress}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-white text-[1.3rem]'>Phone</p>
                            <p className='text-white text-[1.3rem]'>{Use.user.phoneNumbers[0].phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <button class="text-white text-lg cursor-pointer relative border-none bg-transparent transition-colors ease-in-out duration-400 hover:text-white focus:text-white focus:after:w-full focus:after:left-0 hover:after:w-full hover:after:left-0 after:pointer-events-none after:absolute after:bottom-[-2px] after:left-[50%] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400">Your Blogs</button>
                    
                </div>
                <div>
                    <button class="text-white text-lg cursor-pointer relative border-none bg-transparent transition-colors ease-in-out duration-400 hover:text-white focus:text-white focus:after:w-full focus:after:left-0 hover:after:w-full hover:after:left-0 after:pointer-events-none after:absolute after:bottom-[-2px] after:left-[50%] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-400">Your Events</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Dashboard