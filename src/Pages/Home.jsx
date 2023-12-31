import React, { useEffect, useState } from 'react';
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import Modal from 'react-awesome-modal';


export default function Home() {
  const [openmodal, setopenmodal] = useState(false);
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  const handelopenmodal = () => {
    setopenmodal(true)
  }

  const closeModal = () => {
    setopenmodal(false)
  }

  return (
    <>
      <div className=''>
        <div className=' w-full grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-2 mb-4'>
          <div className={` bg-[#F2F1DF] w-100 h-28 flex flex-col justify-center items-center rounded shadow`} >
            <h5 className=' text-3xl font-semibold'>100K</h5>
            <p className=' font-semibold text-sm'>Total User</p>
          </div>

          <div className={` bg-[#F2DFF0] w-100 h-28 flex flex-col justify-center items-center rounded shrink-0`} >
            <h5 className=' text-3xl font-semibold'>20K</h5>
            <p className=' font-semibold text-sm'>Active User(30 days)</p>
          </div>

          <div className={` bg-[#E2DFF2] w-100 h-28 flex flex-col justify-center items-center rounded shadow`} >
            <h5 className=' text-3xl font-semibold'>40</h5>
            <p className=' font-semibold text-sm'>community</p>
          </div>

          <div className={` bg-[#DFF2E6] w-100 h-28 flex flex-col justify-center items-center rounded shadow`} >
            <h5 className=' text-3xl font-semibold'>300K</h5>
            <p className=' font-semibold text-sm'>Revenue (In Rs)</p>
          </div>

          <div className={` bg-[#DFEDF2] w-100 h-28 flex flex-col justify-center items-center rounded shadow`} >
            <h5 className=' text-3xl font-semibold'>400</h5>
            <p className=' font-semibold text-sm'>Subscription</p>
          </div>
        </div>

        <div className=' rounded-xl bg-white shadow p-3 h-auto pb-[40px] mb-4'>
          <h4 className=' font-semibold mb-3'>Reported Messages and Comments</h4>

          <div className=' w-full lg:flex block gap-2 border rounded-xl shadow px-2 py-2 lg:h-32 h-auto mb-4 relative'>
            <span className=' font-semibold text-sm absolute right-5 top-[-10px] bg-[#6561FE] text-white px-2 rounded-lg'>Message</span>
            <div className='lg:w-9/12 text-sm text-justify'>
              <p className='mb-0'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam sunt ullam possimus eos fugiat adipisicing elit. Blanditiis facilis quasi! Pariatur delectus et soluta doloremque, deleniti voluptates voluptatem nisi perferendis ea earum quae consequuntur expedita. Aliquid doloribus provident recusandae magni ex dignissimos isi perferendis illo quidem... <span className=' font-semibold    cursor-pointer' onClick={handelopenmodal}>Read more</span></p>
            </div>
            <div className=' lg:w-3/12 flex gap-2 h-auto lg:items-center lg:justify-center my-3 lg:my-0'>

              <button className=' bg-[#AC1414] px-5 py-2 text-white font-semibold text-sm rounded-3xl border-none outline-none'>Delete</button>
              <button className=' bg-[#2BAC14] px-5 py-2 text-white font-semibold text-sm rounded-3xl border-none outline-none'>Ignore</button>
            </div>
          </div>

          <div className=' w-full lg:flex block gap-2 border rounded-xl shadow px-2 py-2 lg:h-32 h-auto mb-4 relative'>
            <span className=' font-semibold text-sm absolute right-5 top-[-10px] bg-[#3ACCE1] text-white px-2 rounded-lg'>Comment</span>
            <div className='lg:w-9/12 text-sm text-justify'>
              <p className='mb-0'>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam sunt ullam possimus eos fugiat adipisicing elit. Blanditiis facilis quasi! Pariatur delectus et soluta doloremque, </p>
            </div>
            <div className=' lg:w-3/12 flex gap-2 h-auto lg:items-center lg:justify-center my-3 lg:my-0'>

              <button className=' bg-[#AC1414] px-5 py-2 text-white font-semibold text-sm rounded-3xl border-none outline-none'>Delete</button>
              <button className=' bg-[#2BAC14] px-5 py-2 text-white font-semibold text-sm rounded-3xl border-none outline-none'>Ignore</button>
            </div>
          </div>



          <div className=''>
            <div className=' flex gap-3 items-start float-right'>
              <p className='flex items-center mb-0'>View 2 <AiOutlineDown className=' ml-1 font-semibold' /></p>
              <p className=' text-gray-600'>Page 1 of 2</p>
              <p className=' cursor-pointer leading-[1rem]'><AiOutlineLeft /> <span className='text-[10px]'>pre</span></p>
              <p className=' cursor-pointer leading-[1rem]'><AiOutlineRight /> <span className='text-[10px] '>next</span></p>
            </div>
          </div>
        </div>



        <div className=' rounded-xl bg-white shadow p-3 h-auto pb-[40px]'>
          <h4 className=' font-semibold mb-3'>Reported users</h4>

          <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-3 p-2'>
            <div className='flex border rounded p-2 gap-3 items-center'>
              <div className='lg:w-5/12 w-4/12 lg:h-28 h-auto'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3SuujvIM16kO6W-DeZSoAAyhLBTOpJt-_Hs3q18jfuaoh0rQqS9UweASzHdiKtr7y3c&usqp=CAU" alt="userimage" className=' h-full w-full rounded-xl' />
              </div>
              <div className='w-5/12'>
                <p className=' text-sm font-semibold'>John Doe</p>
                <p className='text-sm'>29 Years</p>
                <p className=' text-sm'>Mumbai India</p>
                <p className=' text-sm'> Swimming Lorem, ipsum dolor.</p>
              </div>

              <div className='lg:w-2/12 w-3/12'>
                <button className=' bg-[#3ACCE1] outline-none border-none rounded-3xl px-4 py-2 font-semibold text-sm text-white'>View</button>
              </div>
            </div>
            <div className='flex border rounded p-2 gap-3 items-center'>
              <div className='lg:w-5/12 w-4/12 lg:h-28 h-auto'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3SuujvIM16kO6W-DeZSoAAyhLBTOpJt-_Hs3q18jfuaoh0rQqS9UweASzHdiKtr7y3c&usqp=CAU" alt="userimage" className=' h-full w-full rounded-xl' />
              </div>
              <div className='w-5/12'>
                <p className=' text-sm font-semibold'>John Doe</p>
                <p className='text-sm'>29 Years</p>
                <p className=' text-sm'>Mumbai India</p>
                <p className=' text-sm'> Swimming Lorem, ipsum dolor.</p>
              </div>

              <div className='lg:w-2/12 w-3/12'>
                <button className=' bg-[#3ACCE1] outline-none border-none rounded-3xl px-4 py-2 font-semibold text-sm text-white'>View</button>
              </div>
            </div>
            <div className='flex border rounded p-2 gap-3 items-center'>
              <div className='lg:w-5/12 w-4/12 lg:h-28 h-auto'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3SuujvIM16kO6W-DeZSoAAyhLBTOpJt-_Hs3q18jfuaoh0rQqS9UweASzHdiKtr7y3c&usqp=CAU" alt="userimage" className=' h-full w-full rounded-xl' />
              </div>
              <div className='w-5/12'>
                <p className=' text-sm font-semibold'>John Doe</p>
                <p className='text-sm'>29 Years</p>
                <p className=' text-sm'>Mumbai India</p>
                <p className=' text-sm'> Swimming Lorem, ipsum dolor.</p>
              </div>

              <div className='lg:w-2/12 w-3/12'>
                <button className=' bg-[#3ACCE1] outline-none border-none rounded-3xl px-4 py-2 font-semibold text-sm text-white'>View</button>
              </div>
            </div>
            <div className='flex border rounded p-2 gap-3 items-center'>
              <div className='lg:w-5/12 w-4/12 lg:h-28 h-auto'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3SuujvIM16kO6W-DeZSoAAyhLBTOpJt-_Hs3q18jfuaoh0rQqS9UweASzHdiKtr7y3c&usqp=CAU" alt="userimage" className=' h-full w-full rounded-xl' />
              </div>
              <div className='w-5/12'>
                <p className=' text-sm font-semibold'>John Doe</p>
                <p className='text-sm'>29 Years</p>
                <p className=' text-sm'>Mumbai India</p>
                <p className=' text-sm'> Swimming Lorem, ipsum dolor.</p>
              </div>

              <div className='lg:w-2/12 w-3/12'>
                <button className=' bg-[#3ACCE1] outline-none border-none rounded-3xl px-4 py-2 font-semibold text-sm text-white'>View</button>
              </div>
            </div>
          </div>


          <div className='mt-2'>
            <div className=' flex gap-3 items-start float-right'>
              <p className='flex items-center mb-0'>View 2 <AiOutlineDown className=' ml-1 font-semibold' /></p>
              <p className=' text-gray-600'>Page 1 of 2</p>
              <p className=' cursor-pointer leading-[1rem]'><AiOutlineLeft /> <span className='text-[10px]'>pre</span></p>
              <p className=' cursor-pointer leading-[1rem]'><AiOutlineRight /> <span className='text-[10px] '>next</span></p>
            </div>
          </div>
        </div>

      </div>


      <Modal
        visible={openmodal}
        width="80%"
        height="400"
        effect="fadeInDown"
        onClickAway={closeModal}

      >
        <div className=' w-full my-2 '>
          <div className='w-full flex  top-0 left-0 h-[30px] bg-white'>
            <button className=' ml-auto px-3 text-sm bg-gray-900 text-white mr-2 rounded-3xl' onClick={closeModal}>close X</button>
          </div>

          <div className='contentsec h-[340px] overflow-y-scroll mt-2 p-3'>
            <p className=' text-sm text-gray-600 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sint placeat repellendus consequuntur deleniti facilis explicabo omnis incidunt quam labore, inventore in cum quas itaque assumenda eligendi reiciendis ducimus alias. Cum velit rem atque, accusantium veniam quibusdam placeat ducimus magnam reiciendis impedit voluptatum aliquam repudiandae facere sequi aut, porro quia doloribus non dolorem obcaecati qui. Ex sint reiciendis maiores illum error adipisci, nostrum voluptate modi repellendus vitae distinctio cumque!</p>
            <p className=' text-sm text-gray-600 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sint placeat repellendus consequuntur deleniti facilis explicabo omnis incidunt quam labore, inventore in cum quas itaque assumenda eligendi reiciendis ducimus alias. Cum velit rem atque, accusantium veniam quibusdam placeat ducimus magnam reiciendis impedit voluptatum aliquam repudiandae facere sequi aut, porro quia doloribus non dolorem obcaecati qui. Ex sint reiciendis maiores illum error adipisci, nostrum voluptate modi repellendus vitae distinctio cumque!</p>
            <p className=' text-sm text-gray-600 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sint placeat repellendus consequuntur deleniti facilis explicabo omnis incidunt quam labore, inventore in cum quas itaque assumenda eligendi reiciendis ducimus alias. Cum velit rem atque, accusantium veniam quibusdam placeat ducimus magnam reiciendis impedit voluptatum aliquam repudiandae facere sequi aut, porro quia doloribus non dolorem obcaecati qui. Ex sint reiciendis maiores illum error adipisci, nostrum voluptate modi repellendus vitae distinctio cumque!</p>
            <p className=' text-sm text-gray-600 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis mollitia sint placeat repellendus consequuntur deleniti facilis explicabo omnis incidunt quam labore, inventore in cum quas itaque assumenda eligendi reiciendis ducimus alias. Cum velit rem atque, accusantium veniam quibusdam placeat ducimus magnam reiciendis impedit voluptatum aliquam repudiandae facere sequi aut, porro quia doloribus non dolorem obcaecati qui. Ex sint reiciendis maiores illum error adipisci, nostrum voluptate modi repellendus vitae distinctio cumque!</p>
          </div>

        </div>
      </Modal>

    </>
  )
}
