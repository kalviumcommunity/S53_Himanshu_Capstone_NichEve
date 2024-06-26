import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from '../Components/Home_page/Body'
import BlogPage from '../Components/Blog/BlogPage'
import EventPage from '../Components/Event/EventPage'
import Contact from '../Components/Contact_us/Contact'
import About from '../Components/About_us/About'
import { SignIn } from '@clerk/clerk-react'
import Explore from '../Components/Explore_page/Explore'
import Form from '../Components/Form_page/Form'
import Listwithus from '../Components/Join_us/Listwithus'
import BlogForm from '../Components/Blog_Form/BlogForm'
import HoliEvent from '../Components/Listing_Events/HoliEvent'
import DanceEvent from '../Components/Listing_Events/DanceEvent'
import WowEvent from '../Components/Listing_Events/WowEvent'
import FlutterEvent from '../Components/Listing_Events/FlutterEvent'
import EventForm from '../Components/Event/Event_Form/EventForm'
import Event_collection from '../Components/Listing_Events/Event_collection'
import Dashboard from '../Components/Dashboard/Dashboard'
import UserBlogCollection from '../Components/Blog/UserBlogCollection'
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
        <Route path='/Form' element={<Form/>} />
        <Route path='/ListWithUs' element={<Listwithus/>} />
        <Route path='/PostBlog' element={<BlogForm/>} />
        <Route path='/Events/:id' element={<Event_collection/>} />
        <Route path='/EventForm' element={<EventForm/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/Blogs/:id' element={<UserBlogCollection/>} />
    </Routes>
  )
}

export default Routing