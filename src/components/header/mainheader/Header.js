import React, { useState, useEffect } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import '../mainheader/Header.css'
import Navbar from '../../navbar/Navbar.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
const Header = () => {
  let openMenu = useSelector((state) => state.menuReducer.openMenu)
  let theme = useSelector((state) => state.themeReducer.theme)
  const dispatch = useDispatch()
  let lang = useSelector((state) => state.languageReducer.lang)
  let lngs = [{ id: 1, lng: "az" }, { id: 2, lng: "en" }, { id: 3, lng: "ru" }]
  const handleChangeLanguage = (event) => {
    dispatch({ type: event.target.value, payload: lang })
  };
  function handleDarkMode() {
    dispatch({ type: "DARK", payload: theme })
  }

  function handleLightMode() {
    dispatch({ type: "LIGHT", payload: theme })
  }



  return (
    <div className={theme ? "dark-mode header d-flex align-items-center justify-content-center" :
      "light-mode header d-flex align-items-center justify-content-center"}>
      <div className='container '>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-6 col-md-6 col-sm-6">
            <h2 className="logo">
              <Link to="/">PortBIM</Link></h2>
          </div>
          <div className="col-lg-6 col-6 col-md-6 col-sm-6 header-right d-flex justify-content-end align-items-center">
            <div className='theme d-flex'>
              <div className='dark' onClick={handleDarkMode}>
                <IoMoonOutline color='white' className='pr-2' fontSize={25} />
              </div>
              <div className='light' onClick={handleLightMode}>
                <IoSunnyOutline color='white' size={25} />
              </div>
            </div>
            <div className='header-search mr-2'>
              <CiSearch cursor="pointer" color='white' size={25} className='' />
            </div>
            <div className='language mr-2'>
              <select id='language' value={lang} defaultValue={lang} onChange={handleChangeLanguage}>
                {Object.values(lngs).map((lng) => (
                  <option key={lng.id} value={lng.lng}>
                    {lng.lng}
                  </option>
                ))}
              </select>
            </div>
            <div className='menu'>
              <CiMenuBurger cursor="pointer" color='white' size={25} className=''
                onClick={() => dispatch({ type: "openMenu", payload: openMenu })} />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Header
