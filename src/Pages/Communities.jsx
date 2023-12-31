import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { communitiesdata } from '../Data/Dummydata';
import { useLocation } from 'react-router-dom';
import { CgArrowTopRightO } from 'react-icons/cg';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';




export default function Communities() {
    const [showuserinfo, setshowuserinfo] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(communitiesdata);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [pathname])



    const heandelinfopage = () => {
        setshowuserinfo(!showuserinfo)
    }

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);

        if (newSearchTerm.length >= 3) {
            const filtered = communitiesdata.filter((item) =>
                item.Location.toLowerCase().includes(newSearchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(communitiesdata);
        }
    };

    return (
        <div className=''>
            {
                showuserinfo ? <div className='w-full rounded-2xl border p-2 bg-white'>
                    <div className='flex gap-2'>
                        <div className='w-1/12 '>
                            <button className=' outline-none border-none bg-[#797979] p-2 rounded-full text-lg font-bold text-white' onClick={heandelinfopage}><AiOutlineLeft /></button>



                        </div>
                        <div className='w-11/12'>
                            <div className='content-sec'>
                                <div className='mb-2'>
                                    <p className='text-sm font-semibold mb-1' >Rihaana redel </p>
                                    <div className='w-full flex md:flex-row flex-col bg-gray-100 border rounded-lg p-2'>

                                        <div className='w-full md:w-8/12 flex-col justify-center items-start'>
                                            <p className='text-[10px] font-semibold text-[#6561FE]'>Announcement</p>
                                            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nemo aut facilis beatae non nobis omnis aliquam quibusdam deserunt. Provident maiores alias iste atque odit incidunt repudiandae aperiam unde enim.</p>
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

                                        <div className='w-full md:w-8/12 flex-col justify-center items-start'>
                                            <p className='text-[10px] font-semibold text-[#6561FE]'>Announcement</p>
                                            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nemo aut facilis beatae non nobis omnis aliquam quibusdam deserunt. Provident maiores alias iste atque odit incidunt repudiandae aperiam unde enim.</p>
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

                                        <div className='w-full md:w-8/12 flex-col justify-center items-start'>
                                            <p className='text-[10px] font-semibold text-[#6561FE]'>Announcement</p>
                                            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nemo aut facilis beatae non nobis omnis aliquam quibusdam deserunt. Provident maiores alias iste atque odit incidunt repudiandae aperiam unde enim.</p>
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

                                        <div className='w-full md:w-8/12 flex-col justify-center items-start'>
                                            <p className='text-[10px] font-semibold text-[#6561FE]'>Announcement</p>
                                            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nemo aut facilis beatae non nobis omnis aliquam quibusdam deserunt. Provident maiores alias iste atque odit incidunt repudiandae aperiam unde enim.</p>
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

                                        <div className='w-full md:w-8/12 flex-col justify-center items-start'>
                                            <p className='text-[10px] font-semibold text-[#6561FE]'>Announcement</p>
                                            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nemo aut facilis beatae non nobis omnis aliquam quibusdam deserunt. Provident maiores alias iste atque odit incidunt repudiandae aperiam unde enim.</p>
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

                                        <div className='w-full md:w-8/12 flex-col justify-center items-start'>
                                            <p className='text-[10px] font-semibold text-[#6561FE]'>Announcement</p>
                                            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nemo aut facilis beatae non nobis omnis aliquam quibusdam deserunt. Provident maiores alias iste atque odit incidunt repudiandae aperiam unde enim.</p>
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
                    <div className='mt-2 mb-3'>
                        <div className='full flex rounded shadow items-center'>
                            <BiSearch className='w-1/12 m-3 text-[20px] font-bold' />
                            <input type="search" value={searchTerm} onChange={handleInputChange} className=' w-full p-3 placeholder:text-gray-600 focus:outline-none' placeholder='Search by Location Name' />
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
                                        Location name
                                    </th>
                                    <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                        Users
                                    </th>
                                    <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                        Views
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredData.map((items, index) => (
                                        <tr className="bg-white border-b" key={index}>
                                            <td className="md:px-2 md:py-2 px-1 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                {index + 1}
                                            </td>
                                            <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer capitalize" onClick={heandelinfopage} >
                                                {items.Location}
                                            </td>
                                            <td className="md:px-2 md:py-2 px-1 py-2">
                                                {items.users}
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





        </div>
    )
}
