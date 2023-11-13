import React from 'react'
import { ReadIcon } from '../Icons'

export default function CryptoGuideComp() {
  return (
    <div className='flex flex-col items-center justify-center w-[300px] border border-[#E5E5E5]'>
      <div className='relative w-fit'>
        <img src='/assets/img/unsplash_d.png' alt='' />
        <img src='/assets/img/Rectangle 5.png' alt='' className='absolute -bottom-4 left-6' />
      </div>
      <div className='mt-6 mx-6 w-[250px]'>
        <h5 className='text-xs font-bold'>The Elon effect: How the richest man influenced the price market last week</h5>
        <div className='flex items-center text-[10px] font-normal w-[300px] text-[#0F0F0F]'>
          <ReadIcon className="" />
          <p className='ml-2 mr-4'>by Adekunle Tobi</p>
          <p>10mins read</p>
        </div>
      </div>
    </div>
  )
}
