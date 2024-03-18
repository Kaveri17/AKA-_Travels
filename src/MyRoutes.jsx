import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './Pages/About'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                   <Route path='/about' element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes