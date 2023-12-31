import React from 'react'
import Navbar from '../components/Navbar'
import BannerComp from '../components/BannerComp'
import OurServicesComp from '../components/servicesComp/OurServicesComp'
import Footer from '../components/Footer'

export default function Service() {
  return (
    <div>
      <Navbar />

      <div className='bg-white'>
        {/* banner */}
        <BannerComp title="Our Services" />
        <div className='px-4 md:px-8 lg:px-12'>
          <OurServicesComp
            icon={'/assets/img/image 47.png'}
            header="Bitcoin And Blockchain Technology Education"
            desc={["We've put together the best knowledge to get you started in the blockchain space.",
              "We educate both new and existing members of the cryptocurrency community.",
              "We offer basic and advanced knowledge on bitcoin and blockchain technology. We equip people with the right knowledge for creating wealth in the cryptocurrency industry."]}
          />
          <div className='md:ml-[10%] lg:ml-[20%]'>
            <OurServicesComp
              icon={'/assets/img/image 49.png'}
              header="Cryptocurrency Trading & Investment"
              desc={["We complete guide to mastering the art of cryptocurrency trading.",
                "We trade, invest, and manage clients’ portfolios through our sister company, Crypto Life Capital.",
                "We guide our clients on cryptocurrency trading and investment. "]}
            /></div>
          <OurServicesComp
            icon={'/assets/img/image 51.png'}
            header="Research, Analysis & Signals"
            desc={["Based off our research and analytics, we give you signals to make better trades.",
              "We understand that the cryptocurrency market is dynamic, so we carry out regular studies and analysis on the market.",
              "We keep members of our community updated with information on market sentiments and possible price movements.",
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
