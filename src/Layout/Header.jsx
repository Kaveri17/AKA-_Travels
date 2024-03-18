import React from 'react'

const Header = () => {
  return (
    <div className='grid w-full grid-cols-1 bg-slate-950 text-white py-3 md:grid-cols-5 sm:grid-cols-4 '>
            <div className="text-center text-3xl font-bolder">Our Store</div>
            <div className="flex px-3 sm:col-span-2 md:col-span-3 ">
            <input type="search" className="w-full rounded-s-lg px-3 py-1 outline-none text-purple-950"/>
            <button className="rounded-e-lg bg-orange-300 px-3">Search</button>
            </div>
            <div className="flex justify-evenly ">          
            <a href="/signin" className="text-3xl"><i className="bi bi-box-arrow-in-left text-white"></i></a>
            <a href="/register" className="text-3xl"><i className="bi bi-person-plus text-white"></i></a>
            <a href="" className="text-3xl"><i className="bi bi-cart text-white"></i></a>
            </div>     
      </div>
  )
}

export default Header