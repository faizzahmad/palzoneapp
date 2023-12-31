import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { subscriptiondata } from '../Data/Dummydata';
import { useLocation } from 'react-router-dom';


export default function Subscription() {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(subscriptiondata);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)

    }, [pathname])


    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);

        if (newSearchTerm.length >= 3) {
            const filtered = subscriptiondata.filter((item) =>
                item.fullname.toLowerCase().includes(newSearchTerm.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(subscriptiondata);
        }
    };

    return (
        <>
            <div>
                <div className='w-full grid grid-cols-2 gap-2'>
                    <div className={` bg-[#DFF2E6] w-100 h-24 flex flex-col justify-center items-center rounded shadow`} >
                        <h5 className=' text-3xl font-semibold'>300K</h5>
                        <p className=' font-semibold text-sm'>Revenue (In Rs)</p>
                    </div>

                    <div className={` bg-[#DFEDF2] w-100 h-24 flex flex-col justify-center items-center rounded shadow`} >
                        <h5 className=' text-3xl font-semibold'>400</h5>
                        <p className=' font-semibold text-sm'>Subscription</p>
                    </div>
                </div>
                <div className='mt-2 mb-3'>
                    <div className='full flex rounded shadow items-center'>
                        <BiSearch className='w-1/12 m-3 text-[20px] font-bold' />
                        <input type="search" value={searchTerm} onChange={handleInputChange} className=' w-full p-3 placeholder:text-gray-600 focus:outline-none' placeholder='Search by User Name' />
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
                                    Country
                                </th>
                                <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                    Amount
                                </th>
                                <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                    Status
                                </th>
                                <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                    Date
                                </th>
                                <th scope="col" className="md:px-2 md:py-2 px-1 py-2">
                                    Plan
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
                                        <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer" >
                                            {items.fullname}
                                        </td>
                                        <td className="md:px-2 md:py-2 px-1 py-2">
                                            {items.contry}
                                        </td>
                                        <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer" >
                                            {items.amount}
                                        </td>
                                        <td className={`md:px-2 md:py-2 font-semibold px-1 py-2 cursor-pointer ${items.status === 'Ongoing' ? 'text-[#005818]' : 'text-[#707070]'}`} >
                                            {items.status}
                                        </td>
                                        <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer" >
                                            {items.date}
                                        </td>
                                        <td className="md:px-2 md:py-2 px-1 py-2 cursor-pointer" >
                                            {items.plan}
                                        </td>


                                    </tr>

                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
