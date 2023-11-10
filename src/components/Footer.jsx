import React from 'react'
import CopyRight from './CopyRight'

export default function Footer() {
  return (
    <div>  <div className=" bg-pattern w-full">
      <div className='bg-[#4C3AEF80] w-full flex flex-col md:flex-row items-center justify-evenly px-4 pt-12 '>
        <div>
          <h3 className='text-5xl font-extrabold text-center text-white'>Cryptohub <br className='hidden lg:block' />Signal App</h3>
          <p className='text-white my-4 text-center'>Coming soon</p>
          <div className='flex items-center justify-evenly'>
            <img src='/assets/img/image 44.png' alt='' />
            <img src='/assets/img/image 45.png' alt='' />
          </div>
        </div>
        <img src='/assets/img/Rectangle.png' alt='' className='mx-auto md:mx-0' />

      </div>
    </div>
      <CopyRight /></div>
  )
}
