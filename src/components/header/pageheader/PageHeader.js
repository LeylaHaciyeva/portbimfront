import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import './PageHeader.css'
import Navbar from '../../navbar/Navbar.js';
import { useDispatch, useSelector } from 'react-redux';

const PageHeader = () => {
  let openMenu = useSelector((state) => state.openMenu)
  const dispatch = useDispatch()
  let [language, setLanguage] = useState("en")
  let lngs = [{ id: 1, lng: "az" }, { id: 2, lng: "en" }, { id: 3, lng: "ru" }]
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div className='page-header d-flex align-items-center justify-content-center'>
      <div className='container '>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-6 col-md-6 col-sm-6">
            <h2 className="page-logo"><a href='#'>PortBIM</a></h2>
          </div>
          <div className="col-lg-6 col-6 col-md-6 col-sm-6 header-right d-flex justify-content-end">
            <div className='header-search mr-2'>
              <CiSearch cursor="pointer" color='black' size={20} className='' />
            </div>
            <div className='language mr-2'>
              {/* <GrLanguage cursor="pointer" color='white' size={20} className='' /> */}
              <select id='page-language' value={language} onChange={handleChangeLanguage}>
                {Object.values(lngs).map((lng) => (
                  <option key={lng.id} value={lng.lng}>
                    {lng.lng}
                  </option>
                ))}
              </select>
            </div>
            <div className='menu' onClick={() => dispatch({ type: "openMenu", payload: openMenu })} >
              <CiMenuBurger cursor="pointer" color='black' size={20} className='' />
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

export default PageHeader
