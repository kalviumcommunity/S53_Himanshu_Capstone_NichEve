import React, {useEffect } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { SignInButton, SignedOut, useUser } from '@clerk/clerk-react'

const Listwithus = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    const Use = useUser();
    return (
        <main className='z-10 bg-black h-[100vh]'>
            <Navbar />
            {!Use.isSignedIn?
            <div className='mt-10'>
                <div className="flex justify-evenly">
                    <div>
                        <img src="/Form/Lock.svg" alt="Lock" className=" w-[32rem] invert" /> 
                    </div>
                    <div className='flex flex-col justify-center'>
                        <p className='text-white text-3xl'>Login To be Part of Our small Family</p>
                        <SignedOut>
                            <SignInButton>
                                <button className='text-white text-xl bg-orange-400 w-28 rounded-lg h-9 self-center mt-16'>Login</button>
                            </SignInButton>
                        </SignedOut>
                    </div>   
                </div>
            </div>    
            :
            <div className='-mt-24'>
                <div className='h-screen flex justify-center '>
                    <div className=" w-2/4 bg-white h-2/3 mt-52 rounded-lg flex justify-evenly">
                        <div className='flex justify-center'>
                                <img src="/Form/List_With_us.svg" alt="" className="w-60 " />
                        </div>
                        <div className='flex flex-col pt-24'>
                            <h1 className=" font-Inter text-xl font-bold">List with us</h1>
                            <form action="" className='flex flex-col h-80 justify-evenly'>
                                <input type="text" placeholder='Name' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-full h-8 w-60 pl-5 outline-none" />
                                <input type="text" placeholder='Email' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-full h-8 w-60 pl-5 outline-none" />
                                <textarea name="Message" placeholder='Message' id="" cols="20" rows="6" className='bg-gray-300 text-gray-500 outline-none rounded-md pl-5 pt-1'></textarea>
                                <button className="bg-[#806DD6] rounded-lg text-white h-8">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        }
        </main>
    )
}

export default Listwithus