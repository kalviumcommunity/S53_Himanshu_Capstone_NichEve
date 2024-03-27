import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from '../Components/Home_page/Body'
import BlogPage from '../Components/Blog/BlogPage'
import EventPage from '../Components/Event/EventPage'
const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Body/>} />
        <Route path='/Blog' element={<BlogPage/>} />
        <Route path='/Event' element={<EventPage/>} />
    </Routes>
  )
}

export default Routing