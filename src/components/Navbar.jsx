import React, { useState } from 'react'
import { IconMenu } from './Icons'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  console.log(showNav)

  return (
    <div className='flex items-center justify-between w-screen py-2 px-4  md:px-4 lg:px-12 bg-white  relative z-10'>
      <img src='/assets/img/logo.png' alt='logo' className='' />

      <div className='md:hidden'>
        {showNav && <nav className='flex flex-col items-center gap-y-3 absolute w-screen h-screen -right-0 top-0 py-14 font-bold text-sm bg-[#ffffffcc]'>
          <Link>Pro group</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/services'>Our Services</Link>
          <Link to='/contact'>Contact Us</Link>
          <button className='font-normal text-sm text-white bg-[#4C3AEF] rounded-md py-2 px-6'>Join Our Community</button>
        </nav>}
      </div>
      <IconMenu className="md:hidden z-10 text-[#4c3aef] pointer" onClick={() => setShowNav(!showNav)} />

      <div className='hidden md:flex'>
        <nav className='flex  items-center gap-x-4 font-bold text-sm'>
          <Link>Pro group</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/services'>Our Services</Link>
          <Link to='/contact'>Contact Us</Link>
          <button className='font-normal text-sm text-white bg-[#4C3AEF] rounded-md py-2 px-6'>Join Our Community</button>
        </nav>
      </div>

    </div>
  )
}
