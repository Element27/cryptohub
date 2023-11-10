import React from 'react'

export default function BannerComp({ title }) {
  return (
    <div className='bg-[#0F0854] h-[30vh] md:h-[45vh] w-screen relative overflow-hidden'>
      <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl text-white absolute top-[35%] left-[5%] md:left-[12%] lg:left-[10%]'>{title}</h1>
      <img src='/assets/img/image 6.png' alt='coin' className='hidden md:block md:w-[300px] lg:w-[400px] absolute -bottom-4 right-[12%]' />
      <img src='/assets/img/image 7.png' alt='coin' className='md:hidden absolute -bottom-4 left-0' />
      <img src='/assets/img/image 7alt.png' alt='coin' className='hidden md:block absolute -bottom-12 -left-4 w-[200px]' />
      <img src='/assets/img/image 8.png' alt='coin' className='hidden md:block  absolute top-0 right-0 ' />
    </div>
  )
}
