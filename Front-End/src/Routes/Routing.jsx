import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from '../Components/Home_page/Body'
import BlogPage from '../Components/Blog/BlogPage'
import EventPage from '../Components/Event/EventPage'
import Contact from '../Components/Contact_us/Contact'
import About from '../Components/About_us/About'
import { SignIn } from '@clerk/clerk-react'
import Explore from '../Components/Explore_page/Explore'
const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/Blog' element={<BlogPage/>} />
        <Route path='/Event' element={<EventPage/>} />
        <Route path='/Contact_Us' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/Explore' element={<Explore/>} />
    </Routes>
  )
}

export default Routing