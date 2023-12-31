import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { userinfos } from '../Data/Dummydata';
import { useLocation } from 'react-router-dom';
import { CgArrowTopRightO } from 'react-icons/cg';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import Modal from 'react-awesome-modal';



export default function Users() {
  const [showuserinfo, setshowuserinfo] = useState(false);
  const [openmodal, setopenmodal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(userinfos);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [pathname])

  const handelopenmodal = () => {
    setopenmodal(true)
  };

  const closeModal = () => {
    setopenmodal(false)
  };

  const heandelinfopage = () => {
    setshowuserinfo(!showuserinfo)
  }

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.length >= 3) {
      const filtered = userinfos.filter((item) =>
        item.fullname.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(userinfos);
    }
  };

  return (
    <div className=''>
      {
        showuserinfo ? <div className='w-full rounded-2xl border p-2 bg-white'>
          <div className='flex gap-2'>
            <div className='w-5/12 border-r-2'>
              <button className=' outline-none border-none bg-[#797979] p-2 rounded-full text-lg font-bold text-white' onClick={heandelinfopage}><AiOutlineLeft /></button>
              <div className='w-[60%] my-2'>
                <img src="https://www.mursion.com/wp-content/uploads/2022/09/Group-1377.png" className='h-full w-[100%]' alt="" />
              </div>

              <div className='contentuserinfo'>
                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Full Name</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>John Doe</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>user id </p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>CG004</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>verification status</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>verified</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>payenment status</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>Paid ( Payment ID maybe that can lead to payment detail page)</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Age</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>29years</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Location</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>Complete Location</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Languages</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>english, hindi</p>
                  </div>

                </div>

              </div>

            </div>
            <div className='w-7/12'>
              <div className='contentusers'>
                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>interest</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>Cycling, Swimming, Tennis, Reading, Gaming, Technology, Something else , something else. Should have a read more button at the end - opening up a modal so we can avoid scroll on the pag</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Active Interest</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>Cycling</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>About</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'> i am great </p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Pets</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>yes</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>married status</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>unmarried</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Kids</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>none</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Connection</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>Number - View All ( Opens up a scrollable modal with names & links to their profile )</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Current status</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>Status text here - since we have more space this can get really long. Should have a read more button at the end - opening up a modal so we can avoid scroll on the pag</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>events created</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize cursor-pointer' onClick={handelopenmodal}>Number - View All ( Opens up a scrollable modal with event names & links to the event detail page )</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Events RSPV</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize cursor-pointer' onClick={handelopenmodal}>Number - View All ( Opens up a scrollable modal with event names & links to the event detail page )</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize '>Reports</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize cursor-pointer' onClick={handelopenmodal}>Number - View All ( Opens up a scrollable modal with report details - User, Messages ( Reported by, contents, date ))</p>
                  </div>

                </div>


                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div></div>
                  <button className='w-full py-2 bg-[#AC1414] rounded-3xl text-sm text-white font-semibold flex items-center  justify-center '><BsFillTrashFill className='mr-2' /> Delete User</button>
                </div>
              </div>
            </div>


          </div>
        </div> : <div>
          <div className='mt-2 mb-3'>
            <div className='full flex rounded shadow items-center'>
              <BiSearch className='w-1/12 m-3 text-[20px] font-bold' />
              <input type="search" value={searchTerm} onChange={handleInputChange} className=' w-full p-3 placeholder:text-gray-600 focus:outline-none' placeholder='Search by Full Name' />
            </div>
          </div>
          <div className="relative  shadow-md sm:rounded-lg w-full lg:overflow-x-hidden overflow-x-scroll">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                    Sr no
                  </th>
                  <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                    Full Name
                  </th>
                  <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                    Image
                  </th>
                  <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                    Gender
                  </th>
                  <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                    Age
                  </th>
                  <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                    Location
                  </th>
                  <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                    Active Interest
                  </th>
                  <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredData.map((items, index) => (
                    <tr className="bg-white border-b" key={index}>
                      <th scope="row" className="md:px-2 md:py-2 px-1 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        {items.srno}
                      </th>
                      <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer" onClick={heandelinfopage} >
                        {items.fullname}
                      </td>
                      <td className="md:px-2 md:py-2 px-1 py-2">
                        <img src={items.image} className=' w-16 rounded-xl' alt="" />
                      </td>
                      <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer" >
                        {items.gender}
                      </td>
                      <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer" >
                        {items.Age}
                      </td>
                      <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer" >
                        {items.location}
                      </td>
                      <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer" >
                        {items.activeinterest}
                      </td>

                      <td className="md:px-2 md:py-2 px-1 py-2" onClick={heandelinfopage}>
                        <CgArrowTopRightO className=' bg-gray-900 text-white rounded-full cursor-pointer' size={40} style={{ padding: '10px' }} />
                      </td>

                    </tr>

                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      }


      <Modal
        visible={openmodal}
        width="500px"
        height="400"
        effect="fadeInDown"
        onClickAway={closeModal}

      >
        <div className=' w-full my-2 '>
          <div className='w-full flex  top-0 left-0 h-[30px] bg-white'>
            <button className=' ml-auto px-3 text-sm bg-gray-900 text-white mr-2 rounded-3xl' onClick={closeModal}>close X</button>
          </div>


          <div className='contentsec h-[340px] overflow-y-scroll p-4'>
            <div className=' pb-2 border-b'>
              <p className=' text-gray-900  px-2 capitalize font-bold text-center' >Connections</p>
            </div>
            <div className=' py-2 border-b'>
              <p className=' text-gray-900 text-sm px-2 capitalize font-semibold'>jane doe</p>
            </div>

            <div className=' py-2 border-b'>
              <p className=' text-gray-900 text-sm px-2 capitalize font-semibold'>Rackel Abraham</p>
            </div>

            <div className=' py-2 border-b'>
              <p className=' text-gray-900 text-sm px-2 capitalize font-semibold'>Jay sharma</p>
            </div>

            <div className=' py-2 border-b'>
              <p className=' text-gray-900 text-sm px-2 capitalize font-semibold'>Each of these</p>
            </div>
            <div className=' py-2 border-b'>
              <p className=' text-gray-900 text-sm px-2 capitalize font-semibold'>are a link to there</p>
            </div>

            <div className=' py-2 border-b'>
              <p className=' text-gray-900 text-sm px-2 capitalize font-semibold'>profile</p>
            </div>

            <div className=' py-2 border-b'>
              <p className=' text-gray-900 text-sm px-2 capitalize font-semibold'>Syed</p>
            </div>

            <div className=' py-2 border-b'>
              <p className=' text-gray-900 text-sm px-2 capitalize font-semibold'>Yushuf pathan</p>
            </div>

          </div>

        </div>
      </Modal>


    </div>
  )
}
