import React from 'react'
import Navbar from '../Reusable_comp/Navbar';
import Footer from '../Reusable_comp/Footer';

const BlogPage = () => {
    const handleClick = () => {
        window.scrollBy({
            top: 900,
            behavior: 'smooth'
        });
    };
  return (
    <main>
        <Navbar/>
        <div className="bg-[url(/Blog_page_img/bg.jpg)] bg-no-repeat bg-cover bg-center bg-fixed z-10 -mt-24">
        <div className="flex justify-center h-screen align-middle items-center pb-28 flex-col">
                    <div>
                        <p className="text-gray-400 text-8xl">Post Your</p>
                        <p className="text-Royal-Golden text-10xl font-Lavishly_Yours ml-44">Happiness</p>
                    </div>
                    <div>
                        <div className="mt-40 -mb-80 animate-bounce flex flex-col justify-center max-sm:mt-60 " >
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} />
                            <img src="/BodyImg/symbol.svg" alt="Gt Symbol" className="cursor-pointer" onClick={handleClick} />
                        </div>
                    </div>
                    <div className="fixed right-8 bottom-28">
                        <img src="/Blog_page_img/comment.png" alt="add post" className="w-20 h-20 invert cursor-pointer" />
                    </div>
                </div>
                <Footer />
                <div className="flex flex-col justify-between">
                    <div className="h-72 w-3/5 bg-pappy-brown outline-dotted outline-offset-8 rounded-sm outline-Royal-Golden self-center mt-96">
                        <div className="flex">
                            <div className="flex flex-col h-72 justify-evenly pl-9 w-4/5">
                                <img src="/Blog_page_img/profile-1.jpg" alt="Profile photo" className="h-48 w-44 rounded-full border-2" />
                                <p className="text-white font-Inter text-xl ml-6">Mavia Kaur</p>
                            </div>
                            <div className="flex flex-col justify-evenly">
                                <p className="text-white pl-20 pr-10 pt-5 font-Roboto font-light">Immersed in an electrifying atmosphere, the AP Dhillo concert was a spectacle of sheer brilliance. Surrounded by an exuberant crowd, each moment pulsated with energy, celebrating music in its purest form. From the captivating performances to the infectious party vibe, every element coalesced into an unforgettable experience. It was a night where euphoria reigned supreme, leaving indelible memories etched in the heart.</p>
                                <div className="flex w-20 snap-center justify-evenly ml-28 mt-4">
                                    <img src="/Blog_page_img/heart.png" alt="Like" className="invert w-6 h-6" />
                                    <p className="text-white font-Roboto">12</p>
                                </div>
                                <div className="flex justify-around">
                                    <p className="text-white text-s">Posted on - 21 Aug 2023</p>
                                    <div className="flex">
                                        <img src="/Blog_page_img/location.png" alt="Location" className="w-3 h-3 invert self-center" />
                                        <p className="text-white text-s">Lovely Professional University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-4/5 self-center mt-16" />
                    <div className="h-72 w-3/5 bg-pappy-brown outline-dotted outline-offset-8 rounded-sm outline-Royal-Golden self-center m-16">
                        <div className="flex">
                            <div className="flex flex-col h-72 justify-evenly pl-9 w-4/5">
                                <img src="/Blog_page_img/profile-1.jpg" alt="Profile photo" className="h-48 w-44 rounded-full border-2" />
                                <p className="text-white font-Inter text-xl ml-6">Mavia Kaur</p>
                            </div>
                            <div className="flex flex-col justify-evenly">
                                <p className="text-white pl-20 pr-10 pt-5 font-Roboto font-light">Immersed in an electrifying atmosphere, the AP Dhillo concert was a spectacle of sheer brilliance. Surrounded by an exuberant crowd, each moment pulsated with energy, celebrating music in its purest form. From the captivating performances to the infectious party vibe, every element coalesced into an unforgettable experience. It was a night where euphoria reigned supreme, leaving indelible memories etched in the heart.</p>
                                <div className="flex w-20 snap-center justify-evenly ml-28 mt-4">
                                    <img src="/Blog_page_img/heart.png" alt="Like" className="invert w-6 h-6" />
                                    <p className="text-white font-Roboto">12</p>
                                </div>
                                <div className="flex justify-around">
                                    <p className="text-white text-s">Posted on - 21 Aug 2023</p>
                                    <div className="flex">
                                        <img src="/Blog_page_img/location.png" alt="Location" className="w-3 h-3 invert self-center" />
                                        <p className="text-white text-s">Lovely Professional University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="w-4/5 self-center" />
                    <div className="h-72 w-3/5 bg-pappy-brown outline-dotted outline-offset-8 rounded-sm outline-Royal-Golden self-center mt-16">
                        <div className="flex">
                            <div className="flex flex-col h-72 justify-evenly pl-9 w-4/5">
                                <img src="/Blog_page_img/profile-1.jpg" alt="Profile photo" className="h-48 w-44 rounded-full border-2" />
                                <p className="text-white font-Inter text-xl ml-6">Mavia Kaur</p>
                            </div>
                            <div className="flex flex-col justify-evenly">
                                <p className="text-white pl-20 pr-10 pt-5 font-Roboto font-light">Immersed in an electrifying atmosphere, the AP Dhillo concert was a spectacle of sheer brilliance. Surrounded by an exuberant crowd, each moment pulsated with energy, celebrating music in its purest form. From the captivating performances to the infectious party vibe, every element coalesced into an unforgettable experience. It was a night where euphoria reigned supreme, leaving indelible memories etched in the heart.</p>
                                <div className="flex w-20 snap-center justify-evenly ml-28 mt-4">
                                    <img src="/Blog_page_img/heart.png" alt="Like" className="invert w-6 h-6" />
                                    <p className="text-white font-Roboto">12</p>
                                </div>
                                <div className="flex justify-around">
                                    <p className="text-white text-s">Posted on - 21 Aug 2023</p>
                                    <div className="flex">
                                        <img src="/Blog_page_img/location.png" alt="Location" className="w-3 h-3 invert self-center" />
                                        <p className="text-white text-s">Lovely Professional University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div><p>asdaad</p></div> */}
                {/* <div><p>asdaad</p></div> */}

                {/* <div><p>asdaad</p></div> */}

                {/* <div><p>asdaad</p></div> */}

        </div>
    </main>
  )
}

export default BlogPage