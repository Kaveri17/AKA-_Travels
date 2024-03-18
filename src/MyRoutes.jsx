import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blogs from './Layout/Blogs'
import Popular from './Layout/Popular'
import Header from './Layout/Header'

const MyRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
        <Route path='/' element={<Popular/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default MyRoutes