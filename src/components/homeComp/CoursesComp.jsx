import React from 'react'

export default function CoursesComp() {
  return (
    <div className='bg-black w-[300px] p-2 rounded-md flex flex-col items-center justify-center'>
      <img src='/assets/img/unsplash_.png' alt='' className='w-full' />

      <div className='text-white flex flex-col space-y-3 my-2'>
        <h5 className='text-base font-bold'>Introduction to Blockchain</h5>
        <p className='text-sm font-medium'>In an industry that is leading the next technological revolution, Cryptohub is your number one guide to tapping into the next big thing.</p>
      </div>
      <button className='text-white bg-[#8275F4] py-2 text-sm font-medium  w-[200px] md:w-[280px] rounded-sm'>Start Course</button>
    </div>
  )
}
