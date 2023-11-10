import React from 'react'

export default function GateWayCard() {
  return (
    <div className='p-3 bg-[#F7F5EC] w-[350px]'>
      <img src='/assets/img/unsplash.png' alt='' className='w-[350px]' />

      <h4 className='text-base font-bold'>The Gateway To Blockchain Economy</h4>
      <p className='text-xs'> In an industry that is leading the next technological revolution, Cryptohub is your number one guide to tapping into the next big thing.</p>
      <div className='mt-4 flex items-center justify-evenly gap-x-8'>
        <p className='text-[12px] w-full'>News</p>
        <p className='text-[12px] w-full'>Business</p>
        <p className='text-[12px] '>Nov 23, 2021</p>
      </div>
    </div>
  )
}
