import { useState } from 'react'
import MyRoutes from './MyRoutes'
// import Navbar from './Components/Navbar'
import './App.css'
import { generateDate } from './utils/calendar'


function App() {
  console.log(generateDate());
  return (
    
    // <div className='container'>
    //   <Navbar/>
    // </div>
    <>
      <MyRoutes/>   
    </>
    
  )
}

export default App
