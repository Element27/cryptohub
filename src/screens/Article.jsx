import React from 'react'
import Navbar from '../components/Navbar'
import DropDown from '../components/ArticleComp/DropDown'
import { ThumbsDown, ThumbsUp } from '../components/Icons'

export default function Article() {

  const articleMenuList = ["Trading",
    "Cryptocurrency",
    "Blockchain & Business",
    "Bitcoin",
    "Altcoin",
    "Defi",
    "Ethereum",
    "NFT",
    "Technology",
    "Report",]

  return (
    <div>
      <Navbar />

      <div className='px-4 flex flex-col lg:flex-row gap-8'>
        <div className='flex lg:flex-col justify-between lg:justify-start gap-4 w-full lg:w-[20%]'>
          <DropDown title="Article" dropdownList={articleMenuList} />
          <DropDown title="Guides" dropdownList={[]} />
        </div>
        <div>

          <div>
            <h3 className='text-4xl lg:text-5xl font-bold'>Why you should Buy Wakanda INU</h3>
            <div className='flex items-center my-8'>
              <img src='/assets/img/Frame 3540.png' alt='' /> <p className='text-base font-semibold mx-4'>Nolan Amadi</p> <p className='text-sm border-l border-gray-500 px-4'>2 mins</p>
            </div>
          </div>

          <div>
            <img src='/assets/img/speaker.png' alt='' />

            <h4 className='text-2xl font-bold my-3'>History of Wakanda</h4>
            <p className=' text-sm lg:text-lg'>Cryptohub is a world-class platform for cryptocurrency trading, investment and education. We are the gateway to the blockchain economy.
              <br />
              <br />
              We have a mission to drive bitcoin and blockchain adoption and use crypto education as a tool to help people create wealth.
              <br />
              <br />
              We lead the next technological revolution by providing bitcoin and blockchain education, crypto market research and analysis, crypto trading and investment education , and trading signals.</p>
            <br />
            <h4 className='text-2xl font-bold my-3'>History of Wakanda</h4>
            <p className=' text-sm lg:text-lg'>Cryptohub is a world-class platform for cryptocurrency trading, investment and education. We are the gateway to the blockchain economy.
              <br />
              <br />
              We have a mission to drive bitcoin and blockchain adoption and use crypto education as a tool to help people create wealth.
              <br />
              <br />
              We lead the next technological revolution by providing bitcoin and blockchain education, crypto market research and analysis, crypto trading and investment education , and trading signals.</p>

            <div className='my-4 mx-auto w-fit'>
              <h5 className='text-base lg:text-lg font-bold'>Was this article helpful?</h5>
              <p className='text-xs lg:text-sm'>Give us your feedbacks</p>
            </div>

            <div className='flex items-center justify-center gap-x-4 w-fit mx-auto'>
              <div className='flex items-center gap-x-2'>
                <ThumbsUp /><p className='text-[10px]'>Yes, it was </p>
              </div>
              <div className='flex items-center gap-x-2'>
                <ThumbsDown /><p className='text-[10px]'>No, it wasn’t</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='px-4'>
        <h4 className='text-3xl lg:text-4xl font-bold'>Similar Articles</h4>

      </div>
    </div>
  )
}
