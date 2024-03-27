import React from 'react'
import Navbar from '../Reusable_comp/Navbar'
import Footer from '../Reusable_comp/Footer'


const EventPage = () => {
    const handleClick = () => {
        window.scrollBy({
            top: 900,
            behavior: 'smooth'
        });
    };
    return (
        <main>
            <Navbar />
            <div className="bg-[url(/Event_page_Img/Bg.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10 -mt-24">
                <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <h1 className=" font-LED_Dot_Matrix text-10xl text-white  max-sm:text-7xl">Events</h1>
                    <div>
                        <div className="mt-40 -mb-80 animate-bounce flex flex-col justify-center max-sm:mt-60 " >
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} />
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} />
                        </div>
                    </div>
                </div>
                <Footer />
                <div>
                    <div className="mt-72 pl-52">
                        <select name="Sort By" className="text-white text-xl bg-black outline-sweet-Purple border-sweet-Purple border-2 outline-none w-24 pl-3 h-9">
                            <option value="All">All</option>
                            <option value="value 1">Free</option>
                            <option value="value 2">Paid</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 pl-52 pt-32 gap-32">
                        <div>
                            <img src="/Event_page_Img/img_1.jpg" alt="Event_Image" className=" h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div>
                            <img src="/Event_page_Img/img_2.jpg" alt="Event_Image" className="h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div>
                            <img src="/Event_page_Img/img_1.jpg" alt="Event_Image" className=" h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div>
                            <img src="/Event_page_Img/img_2.jpg" alt="Event_Image" className="h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div>
                            <img src="/Event_page_Img/img_1.jpg" alt="Event_Image" className=" h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                        <div>
                            <img src="/Event_page_Img/img_2.jpg" alt="Event_Image" className="h-72 w-72 outline-sweet-Purple border-sweet-Purple border-2 outline-none" />
                            <div className="flex outline-Royal-Golden border-Royal-Golden border-2 outline-none justify-evenly w-72 mt-3">
                                <button className="w-16 text-white">Register</button>
                                <p className="text-white">|</p>
                                <button className="text-white">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EventPage