import React, { useEffect, useState, useRef } from 'react'
import { AiOutlinePlus, AiOutlineLeft } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { grouptabledata, grouptabs, inside_groupagetabs } from '../Data/Dummydata';
import { useLocation } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import { MdEdit } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import { GoFileMedia } from 'react-icons/go';
import { BsSignTurnSlightRightFill } from 'react-icons/bs'



export default function Groups() {
  const [openmodal, setopenmodal] = useState(false);
  const [modaldata, setmodaldata] = useState({
    name: '',
    img: '',
    interest: '',
    Description: '',
    category: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(grouptabledata);
  const [tabindex, settabindex] = useState(0);
  const [showinfo, setshowinfo] = useState(false);
  const [infotabs, setinfotabs] = useState(2)
  const fileInputRef = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [pathname]);

  const handelsettab = (index) => {
    settabindex(index)
  };
  const handelstinfotabs = (index) => {
    setinfotabs(index)
  }

  const handelopenmodal = (names, image, interst, description, category) => {
    setopenmodal(true)
    setmodaldata({
      name: names,
      img: image,
      interest: interst,
      Description: description,
      category: category
    })
  };

  const closeModal = () => {
    setopenmodal(false)
    setmodaldata({ ...modaldata, name: '', img: '', category: '', Description: '', interest: '' })
    setSelectedImage(null)
  };


  const openFileInput = () => {
    fileInputRef.current.click();
  };


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // accessing  the selected file here
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    } else {
      // No file selected
      console.log('No file selected');
    }
  };


  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.length >= 3) {
      const filtered = grouptabledata.filter((item) =>
        item.name.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(grouptabledata);
    }
  };


  const handelshowhideinfo = () => {
    setshowinfo(!showinfo)
  }
  return (
    <div>
      {
        showinfo ? <div className='w-full rounded-2xl border p-2 bg-white'>
          <div className='flex gap-2'>
            <div className='w-5/12 border-r-2'>
              <button className=' outline-none border-none bg-[#797979] p-2 rounded-full text-lg font-bold text-white' onClick={handelshowhideinfo}><AiOutlineLeft /></button>
              <div className='w-[60%] my-2'>
                <img src="https://www.wdwinfo.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-25-at-9.23.25-pm.png" className='h-full w-[100%]' />
              </div>

              <div className='contentuserinfo'>
                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Group Name</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>John Doe</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>
                    <p className=' font-semibold text-sm capitalize'>Interst </p>
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
                    <p className=' font-semibold text-sm capitalize cursor-pointer' onClick={handelopenmodal}>Members</p>
                  </div>

                  <div className=''>
                    <p className=' text-gray-600 text-sm px-2 capitalize'>John doe , Jay sahay</p>
                  </div>

                </div>

                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                  <div className='px-2'>

                  </div>

                  <div className=''>
                    <button className='w-[90%] py-2 bg-[#AC1414] rounded-3xl text-sm text-white font-semibold flex items-center  justify-center '><BsFillTrashFill className='mr-2' /> Delete User</button>
                  </div>

                </div>



              </div>

            </div>
            <div className='w-7/12'>
              <div className='contentusers'>
                <div className='grid md:grid-cols-3 grid-cols-1 mb-2'>
                  {
                    inside_groupagetabs.map((items, index) => (
                      <button key={index} className={` w-full text-center  py-2 font-semibold  border ${infotabs === index ? 'bg-[#3ACCE1] text-white' : ' bg-gray-50 text-gray-900'} `} onClick={() => handelstinfotabs(index)}>{items.name}</button>
                    ))
                  }
                </div>
                <div className='mb-2'>
                  <p className='text-sm font-semibold mb-1' >Rihaana redel </p>
                  <div className='w-full flex md:flex-row flex-col bg-gray-100 border rounded-lg p-2'>
                    <div className='w-full md:w-8/12 flex items-start'>
                      <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat necessitatibus</p>
                    </div>
                    <div className='w-full flex md:w-4/12 items-center '>
                      <div className='flex flex-col w-full'>
                        <button className=' ml-auto p-1 bg-[#AC1414] rounded-full text-sm text-white font-semibold flex items-center  justify-center '><BsFillTrashFill className='text-[10px]' /></button>
                        <p className='mt-2 text-[8px] ml-auto'>
                          23rd September 2023, 23:11
                        </p>
                      </div>
                    </div>
                  </div>



                </div>

                <div className='mb-2'>
                  <p className='text-sm font-semibold mb-1' >Rihaana redel </p>
                  <div className='w-full flex md:flex-row flex-col bg-gray-100 border rounded-lg p-2'>
                    <div className='w-full md:w-8/12 flex items-start'>
                      <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat necessitatibus</p>
                    </div>
                    <div className='w-full flex md:w-4/12 items-center '>
                      <div className='flex flex-col w-full'>
                        <button className=' ml-auto p-1 bg-[#AC1414] rounded-full text-sm text-white font-semibold flex items-center  justify-center '><BsFillTrashFill className='text-[10px]' /></button>
                        <p className='mt-2 text-[8px] ml-auto'>
                          23rd September 2023, 23:11
                        </p>
                      </div>
                    </div>
                  </div>



                </div>

                <div className='mb-2'>
                  <p className='text-sm font-semibold mb-1' >Rihaana redel </p>
                  <div className='w-full flex md:flex-row flex-col bg-gray-100 border rounded-lg p-2'>
                    <div className='w-full md:w-8/12 flex items-start'>
                      <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat necessitatibus</p>
                    </div>
                    <div className='w-full flex md:w-4/12 items-center '>
                      <div className='flex flex-col w-full'>
                        <button className=' ml-auto p-1 bg-[#AC1414] rounded-full text-sm text-white font-semibold flex items-center  justify-center '><BsFillTrashFill className='text-[10px]' /></button>
                        <p className='mt-2 text-[8px] ml-auto'>
                          23rd September 2023, 23:11
                        </p>
                      </div>
                    </div>
                  </div>



                </div>

                <div className='mb-2'>
                  <p className='text-sm font-semibold mb-1' >Rihaana redel </p>
                  <div className='w-full flex md:flex-row flex-col bg-gray-100 border rounded-lg p-2'>
                    <div className='w-full md:w-8/12 flex items-start'>
                      <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat necessitatibus</p>
                    </div>
                    <div className='w-full flex md:w-4/12 items-center '>
                      <div className='flex flex-col w-full'>
                        <button className=' ml-auto p-1 bg-[#AC1414] rounded-full text-sm text-white font-semibold flex items-center  justify-center '><BsFillTrashFill className='text-[10px]' /></button>
                        <p className='mt-2 text-[8px] ml-auto'>
                          23rd September 2023, 23:11
                        </p>
                      </div>
                    </div>
                  </div>



                </div>

                <div className='mb-2'>
                  <p className='text-sm font-semibold mb-1' >Rihaana redel </p>
                  <div className='w-full flex md:flex-row flex-col bg-gray-100 border rounded-lg p-2'>
                    <div className='w-full md:w-8/12 flex items-start'>
                      <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat necessitatibus</p>
                    </div>
                    <div className='w-full flex md:w-4/12 items-center '>
                      <div className='flex flex-col w-full'>
                        <button className=' ml-auto p-1 bg-[#AC1414] rounded-full text-sm text-white font-semibold flex items-center  justify-center '><BsFillTrashFill className='text-[10px]' /></button>
                        <p className='mt-2 text-[8px] ml-auto'>
                          23rd September 2023, 23:11
                        </p>
                      </div>
                    </div>
                  </div>



                </div>



              </div>
            </div>


          </div>
        </div> : <div>
          <div className='grid grid-cols-2 mb-3 rounded'>
            {
              grouptabs.map((items, index) => (
                <button key={index} className={` w-full text-center  py-3  font-bold  border ${tabindex === index ? 'bg-[#3ACCE1] text-white' : ' bg-gray-50 text-gray-900'} `} onClick={() => handelsettab(index)}>{items.name}</button>
              ))
            }
          </div>
          <div className='mb-2 flex w-full'>
            <button className=' ml-auto  flex items-center bg-[#3ACCE1] px-4 py-2 border-none outline-none rounded-3xl text-white font-semibold text-sm' onClick={handelopenmodal}><AiOutlinePlus className=' font-semibold mr-2' /> Add New Interest</button>
          </div>

          <div className='my-2'>
            <div className='full flex rounded shadow items-center'>
              <BiSearch className='w-1/12 m-3 text-[20px] font-bold' />
              <input type="search" value={searchTerm} onChange={handleInputChange} className=' w-full p-3 placeholder:text-gray-600 focus:outline-none' placeholder='Search by Groups Name' />
            </div>
          </div>



          <div className="relative  shadow-md sm:rounded-lg w-full lg:overflow-x-hidden overflow-x-scroll">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-2">
                    Sr no
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Group Name
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Image
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Interest
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Category
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Description
                  </th>
                  <th scope="col" className="px-2 py-2">
                    View
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Edit
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  filteredData.map((items, index) => (
                    <tr className="bg-white border-b" key={index}>
                      <td className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        {items.srno}
                      </td>
                      <td className="px-2 py-2 cursor-pointer" onClick={() => handelopenmodal(items.name, items.image, items.interesttext, items.Description, items.category)}>
                        {items.name}
                      </td>
                      <td className="px-2 py-2">
                        <img src={items.image} className=' w-14 rounded-xl' />
                      </td>

                      <td className="px-2 py-2">
                        <button className=' bg-[#3ACCE1] text-white rounded-lg cursor-pointer' style={{ padding: '10px' }} >
                          {items.interest}
                        </button>
                      </td>
                      <td scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        {items.category}
                      </td>

                      <td scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        {items.Description}
                      </td>
                      <td className="px-2 py-2">
                        <BsSignTurnSlightRightFill className=' bg-[#000000] text-white rounded-full cursor-pointer' size={40} style={{ padding: '10px' }} onClick={handelshowhideinfo} />
                      </td>
                      <td className="px-2 py-2" onClick={() => handelopenmodal(items.name, items.image, items.interesttext, items.Description, items.category)}>
                        <MdEdit className=' bg-[#AC1414] text-white rounded-full cursor-pointer' size={40} style={{ padding: '10px' }} />
                      </td>
                      <td className="px-2 py-2">
                        <BsFillTrashFill className=' bg-[#797979] text-white rounded-full cursor-pointer' size={40} style={{ padding: '10px' }} />
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
        height="470"
        effect="fadeInDown"
        onClickAway={closeModal}

      >
        {
          showinfo ? <div className=' w-full my-2 '>
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

          </div> : <div className=' w-full my-2 '>
            <div className='w-full flex  top-0 left-0 h-[30px] bg-white'>
              <button className=' ml-auto px-3 text-sm bg-gray-900 text-white mr-2 rounded-3xl' onClick={closeModal}>close X</button>
            </div>

            <div className='contentsec h-[370px] overflow-y-scroll mt-2 p-4'>
              <div className='w-full'>
                <label htmlFor="interestname" className="block mb-1  font-semibold text-gray-900 dark:text-white">Interest name</label>
                <input type="text" defaultValue={modaldata.img == null ? '' : modaldata.name} id="interestname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none font-semibold" required />
              </div>
              <div className='w-full grid grid-cols-2 gap-2 my-3'>
                <div className=''>
                  <p className=' font-semibold mb-2'>Inserted image</p>
                  <div className=' w-[90%]  relative'>
                    {modaldata.img == null ? <div className=' h-[155px] border w-full rounded-3xl flex flex-col justify-center items-center '> {selectedImage ? <img src={selectedImage} className='rounded-2xl h-auto w-auto'></img> : <> <GoFileMedia className='  text-[#4A4A4B] rounded-lg cursor-pointer' size={50} style={{ padding: '10px' }} /> <span className=' font-semibold mb-0'>OR</span> <p className='text-sm'>Drag & drop</p> </>}</div> : <img src={selectedImage ? selectedImage : modaldata.img} alt="" className=' rounded-2xl h-auto w-auto' />}
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={handleFileChange}
                    />
                    <button className=' absolute bottom-3 rounded-3xl text-white bg-[#4A4A4B] text-xs font-semibold md:left-[22%] left-[15%]  px-3 shadow-[#3ACCE1]' onClick={openFileInput}>Update image

                    </button>
                  </div>
                </div>

                <div className='w-full'>
                  <div className='w-full mb-2'>
                    <label htmlFor="sleectinterest" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Interest</label>
                    <select id="sleectinterest" defaultValue={modaldata.name == null ? '' : modaldata.interest} className="bg-white border appearance-none text-gray-900 text-sm rounded-lg  focus:outline-blue-400 transition-all duration-75 cursor-pointer px-2 py-1 w-full font-semibold">
                      <option >Slect one</option>
                      <option value="Exampled text">Exampled text</option>
                      <option value="sleeping">Sleeping</option>

                    </select>
                  </div>

                  <div className='w-full mb-2'>
                    <label htmlFor="selectcategory" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <select id="selectcategory" defaultValue={modaldata.name == null ? '' : modaldata.category} className="bg-white border appearance-none text-gray-900 text-sm rounded-lg  focus:outline-blue-400 transition-all duration-75 cursor-pointer px-2 py-1 w-full font-semibold">
                      <option >Slect one</option>
                      <option value="Exampled text">Exampled text</option>
                      <option value="demotext">Demo text</option>

                    </select>
                  </div>


                  <div className='w-full'>
                    <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="description" defaultValue={modaldata.name == null ? '' : modaldata.Description} className="bg-white border appearance-none text-gray-900 text-sm rounded-lg  focus:outline-blue-400 transition-all duration-75 cursor-pointer px-2 py-1 w-full font-semibold" placeholder='Enter your Description'>

                    </textarea>
                  </div>


                </div>


              </div>

              <div className='w-full '>
                <div className='flex '>
                  <div className='ml-auto'>
                    <button className='mx-2 py-2 px-6 text-sm font-semibold outline-none border-2 rounded-3xl bg-transparent text-gray-500'>Cancel</button>
                    <button className='mx-2 py-2 px-6 text-sm font-semibold border-none  outline-none bg-[#3ACCE1] text-white rounded-3xl'>Edit interest</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        }
      </Modal>

    </div>
  )
}
