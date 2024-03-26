import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
      <div className='px-16 pt-16 -my-20 relative'>
     <div className="Ready flex border-2 border-solid border-bg-slate-600 ps-8 pt-16 " style={{backgroundColor:"wheat"}}>
      <div>
        <h1 className='text-2xl font-bold pb-3'>Ready to get Started? </h1>
        <p className='text-xl pb-9' > It only takes a few minutes to register you FREE AKA Travel account.</p>
        <button className='font-bold border-2 border-solid px-2 py-2 bg-slate-200 hover:bg-fuchsia-200'>OPEN AN ACCOUNT</button>
        </div>
        <div className='ps-80 ' >
        <img src="/Image/clip-removebg-preview.png" alt="" className='w-2/4' />
        </div>
     </div>
     </div>

     {/* Aka trvael */}
     
<div className="row flex flex-wrap">
  <div className="col">
    <img src="/Image/logo2.png" alt=""  className='logo'/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, laudantium.</p>
    <i>aa</i>
    <i>aa</i>
    <i>aa</i>
    <i>aa</i>
  </div>
  <div className="row flex flex-wrap ">
    <h1>useful links</h1>
   <li><a href="">home</a></li>
   <li><a href="">home</a></li>

  </div>
</div>

      
    </footer>
    </>
  )
}

export default Footer