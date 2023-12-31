import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { eventsdatas } from '../Data/Dummydata';
import { useLocation } from 'react-router-dom';
import { CgArrowTopRightO } from 'react-icons/cg';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import Modal from 'react-awesome-modal';



export default function Events() {
    const [showuserinfo, setshowuserinfo] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(eventsdatas);

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
            const filtered = eventsdatas.filter((item) =>
                item.interest.toLowerCase().includes(newSearchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(eventsdatas);
        }
    };

    return (
        <div className=''>
            {
                showuserinfo ? <div className='w-full rounded-2xl border p-2 bg-white'>
                    <div className='flex gap-2'>
                        <div className='w-5/12 border-r-2'>
                            <button className=' outline-none border-none bg-[#797979] p-2 rounded-full text-lg font-bold text-white' onClick={heandelinfopage}><AiOutlineLeft /></button>
                            <div className='w-[60%] mb-2 mt-4'>
                                <img src="https://i.pinimg.com/564x/08/63/f4/0863f4739a4d65cab2633d6aad6f77b1.jpg" className='h-full w-[100%] rounded-2xl' alt="" />
                            </div>

                            <div className='contentuserinfo'>


                                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-4'>
                                    <div className='px-2'>
                                        <button className='w-[90%] py-2 bg-[#AC1414] rounded-3xl text-sm text-white font-semibold flex items-center  justify-center '><BsFillTrashFill className='mr-2' /> Delete User</button>
                                    </div>

                                    <div className=''>

                                    </div>

                                </div>

                            </div>

                        </div>
                        <div className='w-7/12'>
                            <div className='contentusers'>
                                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                                    <div className='px-2'>
                                        <p className=' font-semibold text-sm capitalize'>Events Name</p>
                                    </div>

                                    <div className=''>
                                        <p className=' text-gray-600 text-sm px-2 capitalize'>Marathon 223</p>
                                    </div>

                                </div>

                                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                                    <div className='px-2'>
                                        <p className=' font-semibold text-sm capitalize'>Dates</p>
                                    </div>

                                    <div className=''>
                                        <p className=' text-gray-600 text-sm px-2 capitalize'>20-2-2022 to 30-202023</p>
                                    </div>

                                </div>

                                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                                    <div className='px-2'>
                                        <p className=' font-semibold text-sm capitalize'>Interest</p>
                                    </div>

                                    <div className=''>
                                        <p className=' text-gray-600 text-sm px-2 capitalize'> Sports </p>
                                    </div>

                                </div>

                                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                                    <div className='px-2'>
                                        <p className=' font-semibold text-sm capitalize'>Type</p>
                                    </div>

                                    <div className=''>
                                        <p className=' text-gray-600 text-sm px-2 capitalize'>Virtual</p>
                                    </div>

                                </div>

                                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                                    <div className='px-2'>
                                        <p className=' font-semibold text-sm capitalize'>Organiser</p>
                                    </div>

                                    <div className=''>
                                        <p className=' text-gray-600 text-sm px-2 capitalize'>Tammy Dsouza. ( Opens up their profile )</p>
                                    </div>

                                </div>

                                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                                    <div className='px-2'>
                                        <p className=' font-semibold text-sm capitalize'>Link</p>
                                    </div>

                                    <div className=''>
                                        <p className=' text-gray-600 text-sm px-2 capitalize'>Link - Opens up the link url</p>
                                    </div>

                                </div>

                                <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-2 border-b py-2 '>
                                    <div className='px-2'>
                                        <p className=' font-semibold text-sm capitalize'>Members</p>
                                    </div>

                                    <div className=''>
                                        <p className=' text-gray-600 text-sm px-2 capitalize'>Number - View All ( Opens up a scrollable modal with names & links to their profile )</p>
                                    </div>

                                </div>

                            </div>
                        </div>


                    </div>
                </div> : <div>
                    <div className='mt-2 mb-3'>
                        <div className='full flex rounded shadow items-center'>
                            <BiSearch className='w-1/12 m-3 text-[20px] font-bold' />
                            <input type="search" value={searchTerm} onChange={handleInputChange} className=' w-full p-3 placeholder:text-gray-600 focus:outline-none' placeholder='Search by Interest' />
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
                                        Event Name
                                    </th>
                                    <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                        Image
                                    </th>
                                    <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                        Interest
                                    </th>
                                    <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                        Type
                                    </th>
                                    <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                        Start Date
                                    </th>
                                    <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                        End Date
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
                                                {index + 1}
                                            </th>
                                            <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer capitalize" onClick={heandelinfopage} >
                                                {items.eventsname}
                                            </td>
                                            <td className="md:px-2 md:py-2 px-1 py-2">
                                                <img src={items.image} className=' w-16 rounded-xl' alt="" />
                                            </td>
                                            <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer capitalize" onClick={heandelinfopage} >
                                                {items.interest}
                                            </td>
                                            <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer capitalize" onClick={heandelinfopage} >
                                                {items.type}
                                            </td>
                                            <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer capitalize" onClick={heandelinfopage} >
                                                {items.startdate}
                                            </td>
                                            <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer capitalize" onClick={heandelinfopage} >
                                                {items.enddate}
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
