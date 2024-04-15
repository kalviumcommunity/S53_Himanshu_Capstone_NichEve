import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { SignInButton, SignedOut, useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Listwithus = () => {
    const [User_Email, setUserEmail] = useState("");
    const Use = useUser();
    const form = useRef();
    const Navigate = useNavigate()
    useEffect(() => {
        AOS.init({ duration: 1000 });
        setUserEmail(User_Email);
    }, [])
    useEffect(() => {
        if (Use.user) {
            setUserEmail(Use.user?.emailAddresses?.[0]?.emailAddress || "");
        }
    }, [Use.user]);
    const [FormData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...FormData,
            [name]: value,
        });
    };
    const from_name = FormData.from_name
    const from_email = FormData.from_email
    const message = FormData.message
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/ListWithUs", await { from_name, from_email, message })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err);
            })
        emailjs
            .sendForm('service_kqvii49', 'template_487u965', form.current, {
                publicKey: 'nJoO1by5wLoSRvea5',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success(`Hey ${from_name}! Thanks for Showing Interest, We will List you soon!😊`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    setTimeout(() => {
                        Navigate('/')
                    }, 4000);
                },
                (error) => {
                    toast.error('Failed to send message😿!!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    console.log('FAILED...', error.text);
                },
            );
    }
    useEffect(() => {
        setFormData({
            ...FormData,
            from_email: User_Email
        });
    }, [User_Email]);
    return (
        <main className='z-10 bg-black h-[100vh]'>
            <Navbar />
            {!Use.isSignedIn ?
            (
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
            )
                :
                (
                <div className='-mt-24'>
                    <div className='h-screen flex justify-center '>
                        <div className=" w-2/4 bg-white h-2/3 mt-52 rounded-lg flex justify-evenly">
                            <div className='flex justify-center'>
                                <img src="/Form/List_With_us.svg" alt="" className="w-60 " />
                            </div>
                            <div className='flex flex-col pt-24'>
                                <h1 className=" font-Inter text-xl font-bold">List with us</h1>
                                <form onSubmit={handleSubmit} ref={form} className='flex flex-col h-80 justify-evenly'>
                                    <input type="text" value={FormData.from_name} onChange={handleChange} name='from_name' placeholder='Name' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-full h-8 w-60 pl-5 outline-none" />
                                    <input type="email" disabled value={FormData.from_email} onChange={handleChange} name='from_email' className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-full h-8 w-60 pl-5 outline-none" />
                                    <textarea name="message"  value={FormData.message} onChange={handleChange} placeholder='message' id="" cols="20" rows="6" className='bg-gray-300 text-gray-500 outline-none rounded-md pl-5 pt-1'></textarea>
                                    <button className="bg-[#806DD6] rounded-lg text-white h-8">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ToastContainer/>
                </div>
                )
            }
        </main>
    )
}

export default Listwithus