import React from 'react'

export default function OurServicesComp({ icon, header, desc }) {
  return (
    <div className='px-4 my-6'>
      <img src={icon} alt='' />
      <h2 className='text-2xl font-extrabold mt-4'>{header}</h2>
      {desc.map((p, index) => (
        <p key={index} className='text-sm my-3 md:my-2 lg:text-base lg:my-4'>{p}</p>

      ))}
    </div>
  )
}
