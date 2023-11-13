import React from 'react'
import CopyRight from './CopyRight'

export default function Footer() {
  return (
    <div>
      <div className='bg-[#f4f4f4] px-6 py-12 flex flex-col lg:flex-row gap-y-6 items-center justify-center'>
        <div className='lg:w-[40%] mx-auto'>
          <h3 className='text-4xl font-extrabold'>      Introducing Cryptohub School      </h3>
          <p className='text-sm font-medium my-6'>In an industry that is leading the next technological revolution, Cryptohub is your number one guide to tapping into the next big thing.</p>
          <button className='font-normal text-sm text-white bg-[#4C3AEF] rounded-md py-2 px-6'>Join Waiting List</button>
        </div>
        <img src='/assets/img/Group 33123.png' alt='' className='mx-auto my-6' />
      </div>

      <div className=" bg-pattern w-full">
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
