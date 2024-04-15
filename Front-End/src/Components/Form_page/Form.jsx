import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import AOS from 'aos';
import { useUser } from '@clerk/clerk-react'
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'


const Form = () => {
    console.log(`API Key: ${apiKey}`);
    const Use = useUser();
    const form = useRef();
    const [user_name,SetUser_Name] = useState("");
    const [User_Email, setUserEmail] = useState("");
    const Navigate = useNavigate();

    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kqvii49', 'template_487u965', form.current, {
        publicKey: 'nJoO1by5wLoSRvea5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
         
          toast.success(`Hey ${user_name}! Thanks For Contacting Us😊`, {
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
                Navigate('/Contact_Us')
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
  };
    useEffect(() => {
        if (Use.user) {
            setUserEmail(Use.user?.emailAddresses?.[0]?.emailAddress || "");
        }
    }, [Use.user]);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };
    // console.log(user_name);
    return (
        <main className='z-10 bg-black'>
            <Navbar />
            <div className='-mt-24'>
                <div className='h-screen flex justify-center '>
                    <div className=" w-2/4 bg-white h-2/3 mt-52 rounded-lg flex justify-evenly">
                        <div className='flex justify-center'>
                                <img src="/Form/mail.svg" alt="" className="w-60 " />
                        </div>
                        <div className='flex flex-col pt-24'>
                            <h1 className=" font-Inter text-xl font-bold">Get in Touch</h1>
                            <form onSubmit={sendEmail} ref={form} className='flex flex-col h-80 justify-evenly'>
                                <input type="text" placeholder='Name' name='from_name' onChange={(e)=>{SetUser_Name(e.target.value)}} className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-full h-8 w-60 pl-5 outline-none" />
                                <input type="email" placeholder='Email' name='from_email' value={User_Email} onChange={handleEmailChange} className=" bg-gray-300 text-gray-500 placeholder:text-gray-500 placeholder:text-l rounded-full h-8 w-60 pl-5 outline-none" />
                                <textarea name="message" placeholder='Message' id="" cols="20" rows="6" className='bg-gray-300 text-gray-500 outline-none rounded-md pl-5 pt-1 pr-2'></textarea>
                                {/* <input type="text" value={process.env.REACT_APP_SERVICE_KEY} /> */}
                                <button className="bg-[#806DD6] rounded-lg text-white h-8">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </main>
    )
}

export default Form