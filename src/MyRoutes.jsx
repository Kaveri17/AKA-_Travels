import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './Pages/About'
import Home from './Pages/Home'
import Test from './Pages/Test'
import Blogs from './Layout/Blogs'
import Popular from './Layout/Popular'
import Activities from './Pages/Activities'
import TripTypes from './Pages/TripTypes'



const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/test' element={<Test/>}/>            

                    <Route path='about' element={<About/>}/>
                    <Route path='/blogs' element={<Blogs/>}/>
                    <Route path='/popular' element={<Popular/>}/>
                    <Route path='/activity' element={<Activities/>}/>
                    <Route path='/triptypes' element={<TripTypes/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes 
