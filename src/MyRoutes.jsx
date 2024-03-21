import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './Pages/About'
import Home from './Pages/Home'
import Blogs from './Layout/Blogs'
import Popular from './Layout/Popular'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    {/* <Route index element={<Home/>}/> */}
                    <Route index element={<Home/>}/>
                    <Route path='/about' element={<About/>}/> 
                    <Route path='/blogs' element={<Blogs/>}/>
                    <Route path='/popular' element={<Popular/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes 
