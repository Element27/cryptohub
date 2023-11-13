

import React, { useState } from 'react'
import { CaretDown, CaretRight } from '../Icons';

export default function DropDown({ title, dropdownList }) {

  const [open, setOpen] = useState(false);



  return (
    <div className='w-full'>
      <div onClick={() => setOpen(!open)} className='flex items-center gap-x-4 justify-between '>
        <p className='text-base lg:text-lg font-semibold'>{title}</p> {open ? <CaretRight /> : <CaretDown />}
      </div>
      {open && <div>
        {dropdownList ? dropdownList.map((item) => (
          <p className='text-xs lg:text-sm p-2 font-normal my-2 hover:bg-[#4747471a]'>{item}</p>
        )) : []}
      </div>}

    </div>
  )
}
