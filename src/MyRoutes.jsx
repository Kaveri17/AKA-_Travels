import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
import Layout from './components/Layout'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const MyRoutes = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
     <Route path='/home' element={<Home/>}/>

    </Route>
   
   </Routes>
   </BrowserRouter>
  )
}

export default MyRoutes