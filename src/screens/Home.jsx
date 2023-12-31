import React from 'react'
import Navbar from '../components/Navbar'
import GateWayCard from '../components/homeComp/GateWayCard'
import CoursesComp from '../components/homeComp/CoursesComp'
import CryptoGuideComp from '../components/homeComp/CryptoGuideComp'
import Youtube from '../components/homeComp/Youtube'
import OurServicesComp from '../components/servicesComp/OurServicesComp'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="overflow-hidden">
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


      <div className='flex items-center justify-between md:w-[60%] mx-auto px-6 py-8 text-xs'>
        <div className='flex '>
          <img src='/assets/img/Group 40.png' alt='' className='w-full' />
          <h4 className='font-bold'>Home</h4>
        </div>
        <h4>Trading</h4>
        <h4>Cryptocurrency</h4>
      </div>

      <div className='w-[90%] md:w-[350px] mx-6'>
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


      <div className=' mx-6 '>
        <div className='flex justify-between lg:justify-normal gap-x-6 overflow-x-scroll'>

          <GateWayCard />
          <GateWayCard />
          <GateWayCard />
        </div>
        <button className="font-normal text-sm text-white bg-[#8275F4] rounded-md py-2 px-10 my-6"> See All</button>
      </div>

      <div className='bg-[#FFF9D8] p-12 w-screen flex items-center md:items-start justify-between flex-col lg:flex-row'>

        <div className='w-full md:w-[45%] lg:w-[35%] mb-4'>
          <h4 className='font-bold md:font-extrabold text-3xl md:text-5xl'>Learn from our free courses</h4>
          <p className='font-semibold md:font-bold text-base lg:text-xl mt-4'> In an industry that is leading the next technological revolution, Cryptohub is your number one guide to tapping into the next big thing.</p>
        </div>

        <div className='w-full lg:w-[60%]'>
          {/* <div className=' '> */}
          <div className='overflow-scroll flex gap-x-4 lg:justify-center py-4 '>
            <CoursesComp />
            <CoursesComp />
            <CoursesComp />
            {/* </div> */}
          </div>
          <p className='text-sm md:text-base font-medium text-[#4C3AEF] mt-8 text-center mx-auto'>Create my own account</p>
        </div>
      </div>


      <div className='px-4 py-8'>

        <div className='md:mx-auto lg:w-fit'>
          <h3 className='text-4xl font-extrabold'>Crypto Guides</h3>
          <h5 className='text-xs my-5 font-semibold'>• Select Topic</h5>
          <div className='flex overflow-x-scroll gap-x-4 py-3 '>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Trading</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Menu</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Cryptocurrency</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Blockchain & Business</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Bitcoin</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Altcoin</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Defi</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Ethereum</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>NFT</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Technology</p>
            <p className='text-xs text-[#4c3aef] font-normal py-2 px-4 rounded-sm bg-[#4C3AEF1A] min-w-fit '>Report</p>
          </div>

        </div>

        <div className='w-screen my-5'>
          <div className=' overflow-scroll flex gap-x-4 lg:justify-center py-4'>
            <CryptoGuideComp />
            <CryptoGuideComp />
            <CryptoGuideComp />
            <CryptoGuideComp />
          </div>

          <p className='text-sm md:text-base font-medium text-[#4C3AEF] mt-6 text-center mx-auto'>View More</p>
        </div>
      </div>

      <div>

        <div className='w-screen my-5'>
          <h3 className='text-4xl font-extrabold mx-4 mb-4'>Crypto Guides from Youtube</h3>

          <div className=' overflow-scroll flex gap-x-4 lg:justify-center py-4'>
            <Youtube />
            <Youtube />
            <Youtube />
            <Youtube />
          </div>

          <p className='text-sm md:text-base font-medium text-[#4C3AEF] mt-6 text-center mx-auto'>View More</p>
        </div>
      </div>


      <div className='px-4 md:px-8 lg:px-12 flex gap-x-4 justify-between '>

        <div className='w-full lg:w-[30%]'><OurServicesComp
          icon={'/assets/img/image 47.png'}
          header="Bitcoin And Blockchain Technology Education"
          desc={["We've put together the best knowledge to get you started in the blockchain space.",
            "We educate both new and existing members of the cryptocurrency community.",
            "We offer basic and advanced knowledge on bitcoin and blockchain technology. We equip people with the right knowledge for creating wealth in the cryptocurrency industry."]}
        /></div>

        <div className='w-full lg:w-[30%]'><OurServicesComp
          icon={'/assets/img/image 49.png'}
          header="Cryptocurrency Trading & Investment"
          desc={["We complete guide to mastering the art of cryptocurrency trading.",
            "We trade, invest, and manage clients’ portfolios through our sister company, Crypto Life Capital.",
            "We guide our clients on cryptocurrency trading and investment. "]}
        /></div>
        <div className='w-full lg:w-[30%]'><OurServicesComp
          icon={'/assets/img/image 51.png'}
          header="Research, Analysis & Signals"
          desc={["Based off our research and analytics, we give you signals to make better trades.",
            "We understand that the cryptocurrency market is dynamic, so we carry out regular studies and analysis on the market.",
            "We keep members of our community updated with information on market sentiments and possible price movements.",
          ]}
        />
        </div></div>


      <Footer />

    </div>
  )
}
