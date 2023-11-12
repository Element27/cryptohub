import React from 'react'

export default function GateWayCard() {
  return (
    <div className='p-3 bg-[#F7F5EC] lg:w-[350px] rounded-md'>
      <img src='/assets/img/unsplash.png' alt='' className='w-[350px]' />

      <h4 className='text-base font-bold'>The Gateway To Blockchain Economy</h4>
      <p className='text-xs'> In an industry that is leading the next technological revolution, Cryptohub is your number one guide to tapping into the next big thing.</p>
      <div className='mt-4 flex items-center justify-between w-[200px] lg:w-[100%] '>
        <p className='text-[12px] font-semibold'>News</p>
        <p className='text-[12px] font-semibold'>Business</p>
        <p className='text-[12px] font-semibold'>Nov 23, 2021</p>
      </div>
    </div>
  )
}
