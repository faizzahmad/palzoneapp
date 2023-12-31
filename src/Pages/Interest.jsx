import React, { useEffect, useState, useRef } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { interestdata } from '../Data/Dummydata';
import { useLocation } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import { MdEdit } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';
import { GoFileMedia } from 'react-icons/go';


export default function Interest() {
  const [openmodal, setopenmodal] = useState(false);
  const [modaldata, setmodaldata] = useState({
    name: '',
    img: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(interestdata);
  const fileInputRef = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [pathname])

  const handelopenmodal = (names, image) => {
    setopenmodal(true)
    setmodaldata({
      name: names,
      img: image
    })
  };

  const closeModal = () => {
    setopenmodal(false)
    setmodaldata({ ...modaldata, name: '', img: '' })
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
      const filtered = interestdata.filter((item) =>
        item.name.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(interestdata);
    }
  };
  return (
    <div>
      <div className='mb-2 flex w-full'>
        <button className=' ml-auto  flex items-center bg-[#3ACCE1] px-4 py-2 border-none outline-none rounded-3xl text-white font-semibold text-sm' onClick={handelopenmodal}><AiOutlinePlus className=' font-semibold mr-2' /> Add New Interest</button>
      </div>

      <div className='my-2'>
        <div className='full flex rounded shadow items-center'>
          <BiSearch className='w-1/12 m-3 text-[20px] font-bold' />
          <input type="search" value={searchTerm} onChange={handleInputChange} className=' w-full p-3 placeholder:text-gray-600 focus:outline-none' placeholder='Search by Interest Name' />
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
                Interest Name
              </th>
              <th scope="col" className="px-2 py-2">
                Image
              </th>
              <th scope="col" className="px-2 py-2">
                Icon
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
                  <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                    {items.srno}
                  </th>
                  <td className="px-2 py-2 cursor-pointer" onClick={() => handelopenmodal(items.name, items.image)}>
                    {items.name}
                  </td>
                  <td className="px-2 py-2">
                    <img src={items.image} className=' w-20 rounded-xl' alt="movieimage" />
                  </td>
                  <td className="px-2 py-2">
                    <GoFileMedia className=' bg-[#3ACCE1] text-white rounded-lg cursor-pointer' size={40} style={{ padding: '10px' }} />
                  </td>
                  <td className="px-2 py-2" onClick={() => handelopenmodal(items.name, items.image)}>
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

          <div className='contentsec h-[340px] overflow-y-scroll mt-2 p-4'>
            <div className='w-full'>
              <label htmlFor="interestname" className="block mb-1  font-semibold text-gray-900 dark:text-white">Interest name</label>
              <input type="text" defaultValue={modaldata.name} id="interestname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none font-semibold" required />
            </div>
            <div className='w-full grid grid-cols-2 gap-2 my-3'>
              <div className=''>
                <p className=' font-semibold mb-2'>Inserted image</p>
                <div className=' w-[90%]  relative'>
                  {modaldata.img == null ? <div className=' h-[155px] border w-full rounded-3xl flex flex-col justify-center items-center '> {selectedImage ? <img src={selectedImage} className='rounded-2xl h-auto w-auto' alt='movieimage'></img> : <> <GoFileMedia className='  text-[#4A4A4B] rounded-lg cursor-pointer' size={50} style={{ padding: '10px' }} /> <span className=' font-semibold mb-0'>OR</span> <p className='text-sm'>Drag & drop</p> </>}</div> : <img src={selectedImage ? selectedImage : modaldata.img} alt="" className=' rounded-2xl h-auto w-auto' />}
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

              <div className=''>
                <p className=' font-semibold mb-2'>Inserted icon</p>
                <div className=' w-[90%]  relative border p-2 rounded-xl'>
                  <div className='flex items-center w-full justify-center flex-col'>
                    <GoFileMedia className=' bg-[#3ACCE1] text-white rounded-lg cursor-pointer' size={40} style={{ padding: '10px' }} />
                    <button className='mt-3 rounded-3xl bg-[#4A4A4B] text-gray-50 text-xs font-semibold  px-3 py-1 shadow-[#3ACCE1]'>Upload from device</button>
                  </div>
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
      </Modal>

    </div>
  )
}
