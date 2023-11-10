import React from 'react'
import Navbar from '../components/Navbar'
import GateWayCard from '../components/homeComp/GateWayCard'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='min-h-[90vh] bg-[#0F0854] w-full flex flex-col lg:flex-row items-center relative'>
        <div className='px-4 mx-auto md:w-[50%] lg:w-full'>
          <h1 className="text-5xl font-extrabold text-white ">The Gateway To Blockchain Economy</h1>
          <p className='text-xs font-medium text-white mt-6 '>In an industry that is leading the next technological revolution, Cryptohub is your number one guide to tapping into the next big thing.</p>
        </div>
        <div className=' relative pt-12 pb-0 px-4  w-[80%] md:w-[50%] lg:w-full'>
          <div className='bg-white rounded-md flex flex-col gap-y-4 lg:gap-y-8  p-4 mx-auto z-10 relative lg:w-[70%]'>
            <h3 className='text-xl font-extrabold text-[#4C3AEF]'>Get access to our crypto report</h3>
            <p className='text-xs font-medium text-[#121212]'>Best And Up To Date Crypto News In Your Inbox!</p>

            <input placeholder='Give us a name' className='bg-[#F4F4F4] px-3 py-2 placeholder:text-[#474747] placeholder:text-xs rounded-md' />
            <input placeholder='We need your email address' className='bg-[#F4F4F4] px-3 py-2 placeholder:text-[#474747] placeholder:text-xs rounded-md' />

            <button className='font-normal text-sm text-white bg-[#4C3AEF] rounded-md py-2 px-6'> Get Free Access</button>
          </div>
          <img src='/assets/img/Frame.png' alt='' className='absolute -top-16 -right-6' />
          <img src='/assets/img/image 6bold.png' alt='' className='absolute top-0 -right-2 md:right-8 md:-top-6 ' />
          <img src='/assets/img/image 7part.png' alt='' className='absolute top-24 left-0 lg:rotate-180' />
          <img src='/assets/img/image 8bold.png' alt='' className='absolute bottom-16 right-0 md:right-12' />
          <img src='/assets/img/Frame 3449.png' alt='' className='mx-auto my-8' />
        </div>
      </div>


      <div className='flex items-center justify-between w-full md:w-[60%] mx-auto px-6 py-8 text-xs'>
        <div className='flex '>
          <img src='/assets/img/Group 40.png' alt='' className='w-full' />
          <h4 className='font-bold'>Home</h4>
        </div>
        <h4>Trading</h4>
        <h4>Cryptocurrency</h4>
      </div>

      <div className='w-[350px] mx-12'>
        <h4 className='text-xs font-bold'>Popular</h4>
        <h2 className='text-4xl font-extrabold my-4'>The Gateway To Blockchain Economy</h2>
        <p className='text-lg font-medium'>In an industry that is leading the next technological revolution, Cryptohub is your number one guide to tapping into the next big thing.</p>
        <div className='mt-4 flex items-center gap-x-8'>
          <p className='text-[14px]'>News</p>
          <p className='text-[14px]'>• Business</p>
          <p className='text-[14px]'>Nov 23, 2021</p>
        </div>
        <button className="font-normal text-sm text-white bg-[#8275F4] rounded-md py-2 px-10 my-6"> Read now</button>
      </div>


      <div className='overflow-scroll px-6 w-screen'>
        <div className='flex w-screen justify-between gap-x-6'>

          <GateWayCard />
          <GateWayCard />
          <GateWayCard />
        </div>
        <button className="font-normal text-sm text-white bg-[#8275F4] rounded-md py-2 px-10 my-6"> See All</button>


      </div>
    </div>
  )
}
