import React, { useContext, useState } from 'react'
import Navbar from '../Reusable_comp/Navbar'
import { AppContext } from '../../contexts/ParentContext'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const UserBlogCollection = () => {
    const [Posts, setIsPosts] = useState([]);
    const { id } = useParams();
    const URL = `http://localhost:4000/Blog/${id}`;
    useEffect(() => {
        axios.get(URL)
            .then(res => {
                setIsPosts(res.data.BlogPost.BlogList)
                console.log(res.data.BlogPost.BlogList);
            }).catch(err => {
                console.log(err);
            })
    }, [id])
    return (
        <main className='bg-black h-[100%] pb-24'>
            <Navbar />
            {
                Posts.map((data, index) => (
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className="w-[50%] rounded-2xl h-[14rem] mt-12 flex justify-center items-center" style={{ backgroundImage: `url(${data.ImagePost})`, backgroundSize: 'cover' }}>
                                <div className='flex flex-col items-center justify-center mt-80'>
                                    <img src={data.Profile} alt="Event_Photo" className='h-[7rem] w-[7rem] rounded-full' />
                                    <div className='flex flex-col items-center h-[7rem] justify-evenly'>
                                        <p className='text-white text-[1.3rem] font-display5'>{data.Name}</p>
                                        <p className='text-[#565555] text-[0.9rem] font-Inter'>{data.Location}</p>
                                        <p className='text-[#565555] text-[0.9rem] font-Inter'>{data.Date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-48 leading-[6rem]'>
                            <div className='flex items-center justify-center'>
                                <p className='text-white font-bold text-[2rem]'>{data.Title}</p>
                            </div>
                            <p className='text-[#b3abab] text-base pl-56 pr-56'><span className='text-3xl text-[#cfb93b]'>{data.Description && data.Description.split(' ')[0]}</span> {data.Description && data.Description.slice(data.Description && data.Description.indexOf(' ') + 1)}</p>
                        </div>
                    </div>
                ))
            }
        </main>
    )
}

export default UserBlogCollection