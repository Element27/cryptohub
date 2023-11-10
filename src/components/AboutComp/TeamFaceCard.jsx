import React from 'react'

export default function TeamFaceCard({ src, name, position }) {
  return (
    <div className='w-[90%] md:w-[320px] flex flex-col items-center mx-auto text-[#474747]'>
      <div className='bg-black'>
        <img src={src} alt='' className='w-full' />
      </div>
      <h4 className='text-3xl font-extrabold'>{name}</h4>
      <p className='text-sm font-bold'>{position}</p>
    </div>
  )
}
