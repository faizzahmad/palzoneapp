import React from 'react';
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function Pagination() {
  return (
    <div className='mt-2'>
      <div className=' flex gap-3 items-start float-right mt-2'>
        <p className='flex items-center mb-0'>View 2 <AiOutlineDown className=' ml-1 font-semibold' /></p>
        <p className=' text-gray-600 mb-0'>Page 1 of 2</p>
        <p className=' cursor-pointer leading-[1rem] mb-0'><AiOutlineLeft /> <span className='text-[10px]'>pre</span></p>
        <p className=' cursor-pointer leading-[1rem] mb-0'><AiOutlineRight /> <span className='text-[10px] '>next</span></p>
      </div>
    </div>
  )
}
