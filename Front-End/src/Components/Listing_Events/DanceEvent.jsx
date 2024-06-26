import React, { useContext, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import './Events.css'
import { AppContext } from '../../contexts/ParentContext'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const DanceEvent = () => {
    const { likes, Islikes, clicked, SetClicked } = useContext(AppContext)
    const [Posts, setIsPosts] = useState([]);
    const {id} =useParams();
    const handleLikes = () => {
        Islikes(prevLikes => (prevLikes + 1) % 2 ? prevLikes + 1 : prevLikes - 1);
        SetClicked(!clicked)
    };
    // const URL = `http://localhost:4000/Eventlist/${id}`;
    const URL = `https://s53-himanshu-capstone-nicheve.onrender.com/Eventlist/${id}`
    useEffect(()=>{
        axios.get(URL)
            .then(res => {
                setIsPosts(res.data)
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            })
    },[])
    console.log(Posts);
    return (
        <main className="bg-black h-auto pb-24">
            <Navbar />
            <div>
                <div className="bg-[url('/Event_list/Dance.svg')] w-[100%] h-[27rem] mt-12 flex pl-36 items-center">
                    <div className='flex items-center'>
                        <img src="/Event_list/MagicDance.jpg" alt="Event_Photo" className='h-[24rem] w-[20rem] rounded-lg' />
                        <div className='flex flex-col items-center h-[23rem] justify-evenly'>
                            <p className='text-white text-[4rem] font-display5'>Beat Blitz</p>
                            <div className='flex w-[6.8rem] justify-between items-center self-start pl-10'>
                                <div class="heart-container" title="Like" onClick={handleLikes}>
                                    <input type="checkbox" class="checkbox" id="Give-It-An-Id" checked={clicked} />
                                    <div class="svg-container">
                                        <svg viewBox="0 0 24 24" class="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                            </path>
                                        </svg>
                                        <svg viewBox="0 0 24 24" class="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                            </path>
                                        </svg>
                                        <svg class="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                            <polygon points="10,10 20,20"></polygon>
                                            <polygon points="10,50 20,50"></polygon>
                                            <polygon points="20,80 30,70"></polygon>
                                            <polygon points="90,10 80,20"></polygon>
                                            <polygon points="90,50 80,50"></polygon>
                                            <polygon points="80,80 70,70"></polygon>
                                        </svg>
                                    </div>
                                </div>
                                <p className='text-white text-[1.5rem]'>{likes}</p>
                            </div>
                            <div className='text-white flex w-[27rem] justify-evenly'>
                                <ul>
                                    <li>24 Aug, 2024</li>
                                </ul>
                                <div className='flex items-center'>
                                    <img src="/Blog_page_img/location.png" alt="Location" className='invert w-5 h-5' />
                                    <p className='text-white'>Lovely professional university</p>
                                </div>
                            </div>
                            <button className="bg-[#F84464] rounded w-52 h-11 font-bold text-white hover:bg-[#e1566b]">Book Ticket</button>
                        </div>
                    </div>
                </div>
                <div className='pl-36 pr-96 mt-20 leading-[6rem]'>
                    <p className='text-white font-bold text-[2rem]'>About The Event</p>
                    <p className='text-[#b3abab] text-base'><span className='text-3xl text-[#cfb93b]'>Welcome</span> to Beat Blitz, where rhythm meets excitement in a spectacular showcase of dance talent! Set to electrify the stage with pulsating beats and sensational moves, Beat Blitz is the ultimate celebration of dance. From contemporary to hip-hop, classical to freestyle, dancers from all genres come together to compete for the coveted prize pool of 40,000 INR.</p>
                    <p className='text-[#b3abab] text-base mt-6'>Join us for an unforgettable journey of passion, creativity, and pure adrenaline as performers captivate audiences and judges alike with their awe-inspiring performances. Whether you're a dancer ready to shine or an enthusiast eager to witness the magic unfold, Beat Blitz promises an exhilarating experience that will leave you breathless and craving for more. Don't miss out on this epic dance extravaganza!</p>
                </div>
                <div className='text-white mt-16 pl-36 leading-[7rem]'>
                    <p className='font-bold text-[2rem]'>Chief Guest</p>
                    <div className='flex w-[25rem] justify-between text-[#b3abab]'>
                        <div>
                            <img src="/Event_list/Guest1.jpg" alt="Guest1" className='w-24 h-24 rounded-full cursor-pointer' />
                            <p>Sagar Tiwari</p>
                        </div>
                        <div>
                            <img src="/Event_list/Guest2.jpg" alt="Guest2" className='w-24 h-24 rounded-full cursor-pointer' />
                            <p>Amit Gupta</p>
                        </div>
                        <div>
                            <img src="/Event_list/Guest3.jpg" alt="Guest3" className='w-24 h-24 rounded-full cursor-pointer' />
                            <p>Deepika Singh</p>
                        </div>
                    </div>
                </div>
                <div className='pl-36 mt-14 leading-[6rem]'>
                    <p className='text-white font-bold text-[2rem]'>You Might Also Like</p>
                    <div className='flex justify-between pr-[35rem]'>
                        <NavLink to='/wonderofwonders'>
                            <div
                                class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[url('/Event_list/Wow.jpg')] bg-no-repeat bg-cover"
                            >
                                <div class="z-10 absolute w-full h-full peer"></div>
                                <div
                                    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                                ></div>
                                <div
                                    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
                                >
                                    Wow<br />Event
                                </div>
                            </div>

                        </NavLink>
                        <NavLink to='/flutter'>
                            <div
                                class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[url('/Event_list/Flutter.png')] bg-no-repeat bg-cover"
                            >
                                <div class="z-10 absolute w-full h-full peer"></div>
                                <div
                                    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                                ></div>
                                <div
                                    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
                                >
                                    Flutter<br />Event
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/holi'>
                            <div
                                class="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-[url('/Event_list/HOLI.jpg')] bg-no-repeat bg-cover"
                            >
                                <div class="z-10 absolute w-full h-full peer"></div>
                                <div
                                    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
                                ></div>
                                <div
                                    class="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
                                >
                                    Color-Thrills <br />Event
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className='mt-14 pl-36 leading-[6rem]'>
                    <p className='text-white font-bold text-[2rem]'>Follow us on</p>
                    <div class="card">
                        <a class="social-link1" href='https://www.instagram.com/silent_lover__7080?igsh=MWtycGl3aTBhanZiMA%3D%3D&utm_source=qr' target='_blank'>
                            <svg viewBox="0 0 16 16" class="bi bi-instagram" fill="currentColor" height="16" width="16">
                                <path fill="white" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                            </svg>
                        </a>
                        <a class="social-link2">
                            <svg viewBox="0 0 16 16" class="bi bi-twitter" fill="currentColor" height="16" width="16">
                                <path fill="white" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                            </svg>
                        </a>
                        <a class="social-link3">
                            <svg viewBox="0 0 16 16" class="bi bi-discord" fill="currentColor" height="16" width="16">
                                <path fill="white" d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                            </svg>
                        </a>
                        <a class="social-link4">
                            <svg viewBox="0 0 16 16" class="bi bi-whatsapp" fill="currentColor" height="16" width="16">
                                <path fill="white" d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                            </svg>
                        </a>
                    </div>
                </div>



            </div>
        </main>
    )
}

export default DanceEvent