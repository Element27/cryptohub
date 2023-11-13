import React from 'react'
import { PlayIcon } from '../Icons'

export default function Youtube() {
  return (
    <div className='flex flex-col items-center justify-center w-[300px] border border-[#E5E5E5]'>
      <div className='relative w-fit'>
        <img src='/assets/img/base.png' alt='' />
      </div>
      <div className='mt-6 mx-6 w-[250px]'>
        <h5 className='text-xs font-bold'>The Elon effect: How the richest man influenced the price market last week</h5>
        <div className='flex items-center text-[10px] font-normal w-[300px] text-[#0F0F0F]'>
          <PlayIcon className="" />
          <p className='ml-2 mr-4'>The week on Cryptohub news</p>
          <p>10mins read</p>
        </div>
      </div>
    </div>
  )
}
