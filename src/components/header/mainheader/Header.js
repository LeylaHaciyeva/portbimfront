import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import '../mainheader/Header.css'
import Navbar from '../../navbar/Navbar.js';
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
  let openMenu = useSelector((state) => state.openMenu)
  const dispatch = useDispatch()
  let [language, setLanguage] = useState("en")
  let lngs = [{ id: 1, lng: "az" }, { id: 2, lng: "en" }, { id: 3, lng: "ru" }]
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className='header d-flex align-items-center justify-content-center'>
      <div className='container '>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-6 col-md-6 col-sm-6">
            <h2 className="logo"><a href='#'>PortBIM</a></h2>
          </div>
          <div className="col-lg-6 col-6 col-md-6 col-sm-6 header-right d-flex justify-content-end">
            <div className='header-search mr-2'>
              {/* <a
                style={{ padding: "20px", cursor: `url(../../../images/cursor-pointer.png) 0 0, url(../../../images/cursor-pointer.png) 0 0, auto !important` }}>
              */}
                <CiSearch cursor="pointer" color='white' size={20} className='' />
              {/* </a> */}
            </div>
            <div className='language mr-2'>
              {/* <GrLanguage cursor="pointer" color='white' size={20} className='' /> */}
              {/* <a
                style={{
                  padding: "20px",
                  cursor: `url(../../../images/cursor-pointer.png) 0 0, url(../../../images/cursor-pointer.png) 0 0, auto !important`
                }}> */}
                <select id='language' value={language} onChange={handleChangeLanguage}>
                  {Object.values(lngs).map((lng) => (
                    <option key={lng.id} value={lng.lng}>
                      {lng.lng}
                    </option>
                  ))}
                </select>
              {/* </a> */}
            </div>
            <div className='menu' >
              {/* <a
                style={{
                  padding: "20px",
                  cursor: `url(../../../images/cursor-pointer.png) 0 0, url(../../../images/cursor-pointer.png) 0 0, auto !important`
                }}> */}

                <CiMenuBurger cursor="pointer" color='white' size={20} className='' onClick={() => dispatch({ type: "openMenu", payload: openMenu })} />
              {/* </a> */}
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
