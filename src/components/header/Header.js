import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import '../header/Header.css'
import Navbar from '../navbar/Navbar';

const Header = () => {
  let [openMenu, setOpenMenu] = useState(false)
  function handleMenuClick() {
    setOpenMenu(!openMenu)
    console.log(openMenu);
  }

  return (
    <div className='header d-flex align-items-center justify-content-center'>
      <div className='container '>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-6 col-md-6 col-sm-6">
            <h2 className="logo"><a href='#'>PortBIM</a></h2>
          </div>
          <div className="col-lg-6 col-6 col-md-6 col-sm-6 header-right d-flex justify-content-end">
            <div className='header-search mr-2'>
              <CiSearch cursor="pointer" color='white' size={20} className='' />
            </div>
            <div className='language mr-2'>
              <GrLanguage cursor="pointer" color='white' size={20} className='' />
            </div>
            <div className='menu' >
              <CiMenuBurger cursor="pointer" color='white' size={20} className='' onClick={handleMenuClick} />
            </div>
          </div>
        </div>
      </div>
      {
        openMenu ? <Navbar /> : null 
      }
    </div>
  )
}

export default Header
