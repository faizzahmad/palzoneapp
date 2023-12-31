
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import { FaBars } from 'react-icons/fa'
import Home from './Pages/Home';
import Interest from './Pages/Interest';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import Header from './Components/Header';
import Users from './Pages/Users';
import Groups from './Pages/Groups';
import Communities from './Pages/Communities';
import Events from './Pages/Events';
import Subscription from './Pages/Subscription';



function App() {
  const [loggedin, setloggedin] = useState(false);
  const [toggle, settoggle] = useState(false);

  const hadeltogglesidebar = () => {
    settoggle(!toggle);

  }
  return (
    <>
      {
        loggedin ? <BrowserRouter>
          <div className={`${toggle ? ' w-0 ' : 'lg:w-[20%] w-[80%]'} h-screen bg-[#6561FE] fixed top-0 left-0 bottom-0 transition-all duration-100`}>
            <div className={`${toggle ? ' hidden' : ' block'} relative`}>
              <BsChevronDoubleLeft className={` lg:hidden block absolute top-3 right-3  text-white font-bold text-[30px] `} onClick={hadeltogglesidebar} />
              <Sidebar closesidebar={settoggle} />
            </div>
          </div>

          <div className={`${toggle ? 'w-[100%]' : 'lg:w-[80%] lg:block w-0 hidden'} py-3 bg-white shadow float-right transition-all duration-100 h-[55px] sticky z-10 top-0`}>
            <div className=' flex w-full items-center'>
              <div className=' flex px-3 items-center'>
                <FaBars className=' cursor-pointer mr-2 text-gray-600' onClick={hadeltogglesidebar} /><span className=' text-gray-600 '>Dashboard</span>
              </div>
              <Header />
            </div>
          </div>
          <div className={`${toggle ? 'w-[100%]' : 'lg:w-[80%] hidden lg:block'} float-right p-3`}>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/Home' element={<Home />}></Route>
              <Route path='/Interest' element={<Interest />}></Route>
              <Route path='/Users' element={<Users />}></Route>
              <Route path='/Groups' element={<Groups />}></Route>
              <Route path='/Communities' element={<Communities />}></Route>
              <Route path='/Events' element={<Events />}></Route>
              <Route path='/Subscription' element={<Subscription />}></Route>
            </Routes>
          </div>
        </BrowserRouter> : <Login loggeddetail={setloggedin} />

      }
    </>
  );
}

export default App;
