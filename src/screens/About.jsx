import React from 'react'
import Navbar from '../components/Navbar'
import BannerComp from '../components/BannerComp'
import Footer from '../components/Footer'
import TeamFaceCard from '../components/AboutComp/TeamFaceCard'

export default function About() {
  return (
    <div>
      <Navbar />
      <BannerComp title="About Us" />

      <div className='flex flex-col md:flex-row items-center justify-between py-12 px-4  gap-x-4'>
        <div className='mb-4 md:mb-0 w-full'>
          <h3 className='text-base font-bold mb-4'>Who We Are</h3>
          <p className='text-sm'>Cryptohub is a world-class platform for cryptocurrency trading, investment and education. We are the gateway to the blockchain economy.
            <br />
            <br />
            We have a mission to drive bitcoin and blockchain adoption and use crypto education as a tool to help people create wealth.
            <br />
            <br />
            We lead the next technological revolution by providing bitcoin and blockchain education, crypto market research and analysis, crypto trading and investment education , and trading signals.</p>
        </div>
        <img src='/assets/img/people.png' alt='' className='w-full' />
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between py-12 px-4  gap-x-4'>
        <img src='/assets/img/people.png' alt='' className='w-full' />
        <div className='mb-4 md:mb-0 w-full'>
          <h3 className='text-base font-bold mb-4'>Our Area</h3>
          <p className='text-sm'>Bitcoin and Blockchain Education, Crypto trading and Investment, Research and Analytics, Signals</p>
        </div>
      </div>

      <div className='px-4'>
        <p className='capitalize text-sm lg:text-3xl'>Meet The Team</p>
        <h3 className='text-lg font-bold lg:text-6xl text-[#474747]'>The Faces Behind Our Success</h3>

        <div className='my-6 flex flex-col md:flex-row gap-x-6 gap-y-8'>
          <TeamFaceCard
            src="/assets/img/chris.png"
            name="Chris Ani"
            position="Founder"
          />
          <TeamFaceCard
            src="/assets/img/nolan.png"
            name="Nolan Amadi"
            position="Manager & Tech Analyst"
          />
          <TeamFaceCard
            src="/assets/img/Ruth.png"
            name="Ruth"
            position="Customer Care Rep"
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
