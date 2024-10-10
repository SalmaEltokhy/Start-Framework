import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  const [open, setOpen] = useState(false)



  function toggle(){
    setOpen(!open)
  
  
  }
  return (<>
  <nav className="border-gray-200 dark:bg-slate-700 fixed top-0 left-0 right-0 z-50 py-2 text-white">
  <div className="max-w-screen-xl md:flex flex-wrap items-center md:justify-between p-4 px-3 mx-10 relative">
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse uppercase">
 <span className="self-center text-xl md:text-3xl font-bold whitespace-nowrap dark:text-white">Start Framework
</span>
    </Link>
    
    <div className={`${open?'block':'hidden'} w-full md:block md:w-auto`} id="navbar-default">
      <ul className='font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-slate-700 md:dark:bg-slate-700 dark:border-gray-700 '>
        <li className='me-2'>
          <NavLink to="about" className="block py-2 px-3 text-white  rounded  md:text-blue-700 dark:text-white md:dark:text-white" aria-current="page">ABOUT</NavLink>
        </li>
        <li className='me-3'>
          <NavLink to="portfolio" className="block py-2 px-3 text-white  rounded  md:text-blue-700  dark:text-white " aria-current="page">PORTFOLIO</NavLink>
        </li>
        <li className='me-3'>
          <NavLink to="contact" className="block py-2 px-3 text-white rounded  md:text-blue-700 dark:text-white " aria-current="page">CONTACT</NavLink>
        </li>
        
        
        
 
      </ul>
    </div>
    <div className='block md:hidden'>
      <i onClick={toggle} className={`fa-solid ${!open?'fa-bars':'fa-close'} fa-2x absolute top-4 right-0 cursor-pointer `}></i>

        </div>
  </div>
</nav>

  



  </>

  )
}
