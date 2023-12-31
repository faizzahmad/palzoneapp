import React, { useEffect, useState } from 'react';
import { sidebardatas } from '../Data/Dummydata';
import { NavLink } from 'react-router-dom';

export default function Sidebar(props) {
  const [menuindex, setmenuindex] = useState(0)
  useEffect(() => {
    if (window.innerWidth < '1024' && menuindex != null) {
      props.closesidebar(true)
    }

  }, [])

  const handelactivelink = (index) => {
    setmenuindex(index)
    if (window.innerWidth < '1024') {
      props.closesidebar(true)
    }
  }
  return (

    <div className='flex flex-col items-center pt-10'>
      {
        sidebardatas.map((items, index) => (
          <NavLink to={items.link} key={index} className={`text-white transition-all duration-100 text-lg my-5 capitalize ${menuindex === index ? ' border-b-2 border-white' : null}`} onClick={() => handelactivelink(index)}>{items.name}</NavLink>
        ))
      }

    </div>
  )
}
