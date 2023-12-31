import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
// import { BiMessageRoundedDots, BiBell } from 'react-icons/bi';

export default function Header() {
  const [profile, setprofile] = useState(false);

  const hadelshowprofile = () => {
    setprofile(!profile)
  }
  return (
    <div className='flex w-full mr-2 relative'>
      <div className='ml-auto mr-2 flex gap-2'>
        {/* <button type="button" className="relative inline-flex items-center p-2 bg-gray-100 text-blue-600 rounded-full text-sm  text-center">
          <BiMessageRoundedDots className='text-[18px]' />

          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[8px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
        </button>

        <button type="button" className="relative inline-flex items-center p-2 bg-gray-100 text-blue-600 rounded-full text-sm  text-center">
          <BiBell className='text-[18px]' />

          <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[8px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">12</div>
        </button> */}

        <div className=' flex gap-1 items-center px-2 cursor-pointer' onClick={hadelshowprofile}>
          <p className=' lg:text-sm text-[10px]'> <span className=' font-semibold cursor-pointer'>Hii,</span> John doe</p>
          <img src="https://media.licdn.com/dms/image/C5603AQEB1URyIySZHA/profile-displayphoto-shrink_400_400/0/1605608903759?e=1696464000&v=beta&t=z6YfXOoC6hdUlk7tJWAp9pvVxEEpGtXoFQLA0Dl2468" className=' w-9 rounded-full' alt="" />
        </div>
      </div>

      {
        profile ? <div className='  absolute top-12 bg-white border shadow rounded right-2'>
          <div className='w-[300px] py-2 px-3'>
            <div className=' flex items-center gap-3'>
              <div className='w-2/12'>  <img src="https://media.licdn.com/dms/image/C5603AQEB1URyIySZHA/profile-displayphoto-shrink_400_400/0/1605608903759?e=1696464000&v=beta&t=z6YfXOoC6hdUlk7tJWAp9pvVxEEpGtXoFQLA0Dl2468" className=' w-[100%] rounded-full' alt="" /></div>
              <div className='w-10/12 '>
                <p className='text-sm font-semibold inline'>jay sharma</p>
                <button className=' float-right p-1 text-[10px] bg-gray-900 text-white font-bold rounded-full' onClick={hadelshowprofile}><RxCross1 /></button>
                <p className='text-[10px] font-semibold text-purple-500'>Frontend developer</p>

              </div>
            </div>

            <div className='my-2 w-full'>
              <p className=' text-[10px] text-gray-600'>Fitness, Fanatic, Desing Enthusit, Meetup Mentor Oragnize and React js Developer  </p>
            </div>

            <div className='w-full'>
              <div className='w-full  py-1 grid grid-cols-2'>
                <p className=' capitalize text-xs font-semibold p-1' >Full Name </p>
                <p className=' capitalize text-xs  p-1'>Jay sharma</p>
              </div>

              <div className='w-full  py-1 grid grid-cols-2'>
                <p className=' capitalize text-xs font-semibold p-1' >Email </p>
                <p className='text-xs  p-1'>jaysharma@gmail.com</p>
              </div>

              <div className='w-full  py-1 grid grid-cols-2'>
                <p className=' capitalize text-xs font-semibold p-1' >Contact </p>
                <p className='capitalize text-xs  p-1'>+91 : 6287368847</p>
              </div>

              <div className='w-full  py-1 grid grid-cols-2'>
                <p className=' capitalize text-xs font-semibold p-1' >DOB </p>
                <p className='capitalize text-xs  p-1'>23rd March 2003</p>
              </div>

              <div className='w-full  py-1 grid grid-cols-2'>
                <p className=' capitalize text-xs font-semibold p-1' >Edit profile </p>
                <button className='border-none bg-gray-900 text-white font-semibold py-1 text-xs rounded'>Edit Details</button>
              </div>
            </div>



          </div>
        </div> : null
      }
    </div>
  )
}
