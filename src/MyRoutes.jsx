import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './Pages/About'
import Home from './Pages/Home'
import Test from './Pages/Test'
import Blogs from './Layout/Blogs'
import Popular from './Layout/Popular'
import Activities from './Pages/Activities'
import AutoPlay from './Pages/Autoplay'
import TripTypes from './Pages/TripTypes'
import BlogDetail from './Layout/BlogDetail'
import BlogDetaill from './Layout/BlogDetaill'
import BlogDetailll from './Layout/BlogDetailll'
import Cart from './Pages/Cart'



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
                    <Route path='/blogdetail' element={<BlogDetail/>}/>
                    <Route path='/blogdetaill' element={<BlogDetaill/>}/>
                    <Route path='/blogdetailll' element={<BlogDetailll/>}/>
                    
                    <Route path='/popular' element={<Popular/>}/>
                    <Route path='/activity' element={<Activities/>}/>
                    
                    <Route path='/triptypes' element={<TripTypes/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes 
