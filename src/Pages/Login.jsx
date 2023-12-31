import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

export default function Login(props) {

  const handellogin = (e) => {
    e.preventDefault();
    props.loggeddetail(true);

  }
  return (
    <section>
      <div className=' flex h-screen w-full lg:flex-row flex-col justify-center'>
        <div className='lg:w-5/12 w-full px-10  lg:px-16 flex flex-col justify-center'>
          <form onSubmit={handellogin}>
            <h5 className=' font-bold text-[20px]'>Log-in</h5>
            <h5 className=' font-bold text-[20px]'>Welcome back</h5>
            <div className=' grid lg:grid-cols-2 grid-cols-1 gap-3 my-2'>
              <button className=' border w-full font-semibold rounded py-2 text-sm flex items-center justify-center'><FcGoogle className='mr-2 text-[16px]' />Sing with Google</button>
              <button className='border w-full font-semibold rounded py-2 text-sm flex items-center justify-center'><FaApple className=' mr-2 text-[16px]' />Sing with Apple </button>
            </div>
            <hr className='my-2' />

            <div className=' grid grid-cols-1'>
              <div className='my-2'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="info@gmail.com" required />
              </div>

              <div className='mt-2'>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="Your Password" required />
              </div>
              <div>
                <p className='mb-0 text-blue-700 font-semibold text-sm float-right my-2'>Forgotten Password ? </p>
              </div>
              <div className='my-2'>
                <button className=' border-none out-of-range: w-full font-semibold text-white bg-blue-700 rounded text-sm py-2' type='submit'>Sing in to your acccount</button>
              </div>

              <div className='my-2'>
                <p className=' text-gray-400 text-sm'>Dont have an acccount ? <span className=' text-blue-700 font-semibold'>Register</span></p>
              </div>
            </div>
          </form>


        </div>
        <div className='w-7/12 hidden bg-blue-600 px-20  text-white lg:flex flex-col justify-center'>
          <h4 className=' font-bold text-2xl mb-3'>Palzone</h4>
          <h5 className='font-bold text-[30px] leading-[28px] mb-4'>Explore the world’s leading design portfolios.</h5>
          <p className=' text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quasi voluptate sint beatae aliquid labore reiciendis amet molestiae! Corrupti accusamus obcaecati aperiam ad nisi illum. Voluptatum praesentium ad dolorem id.</p>

          <div className='py-2 flex items-center'>
            <img src="./images/userslogin.png" alt="usersdemoimagelogin" className='w-[20%] pr-4 border-r-2 border-gray-100 border-opacity-10' />
            <p className='mb-0 px-3'>Over 13.5k Happy Customers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
