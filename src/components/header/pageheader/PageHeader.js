import React, { useState, useEffect } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import './PageHeader.css'
import Navbar from '../../navbar/Navbar.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
const PageHeader = () => {
  let openMenu = useSelector((state) => state.menuReducer.openMenu)
  let theme = useSelector((state) => state.themeReducer.theme)
  const dispatch = useDispatch()
  let [language, setLanguage] = useState("en")
  let lngs = [{ id: 1, lng: "az" }, { id: 2, lng: "en" }, { id: 3, lng: "ru" }]
  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  function handleDarkMode() {
    dispatch({ type: "DARK", payload: theme })
    // console.log(theme);
  }

  function handleLightMode() {
    dispatch({ type: "LIGHT", payload: theme })
    // console.log(theme);
  }
  useEffect(() => {
    openMenu ? window.document.body.style.overflow = "hidden" : window.document.body.style.overflow = "auto"
  }, [openMenu])

  return (
    <div className={theme ? 'dark-mode page-header d-flex align-items-center justify-content-center'
      : "light-mode page-header d-flex align-items-center justify-content-center"}>
      <div className='container '>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-6 col-md-6 col-sm-6">
            <h2 className="page-logo"><Link to="/">PortBIM</Link></h2>
          </div>
          <div className="col-lg-6 col-6 col-md-6 col-sm-6 header-right d-flex justify-content-end align-items-center">
            <div className='theme d-flex'>
              <div className='dark' onClick={handleDarkMode}>
                <IoMoonOutline color='black' className='pr-2' fontSize={25} />
              </div>
              <div className='light' onClick={handleLightMode}>
                <IoSunnyOutline color='black' size={25} />
              </div>
            </div>
            <div className='header-search mr-2'>
              <CiSearch cursor="pointer" color='black' size={25} className='' />
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
              <CiMenuBurger cursor="pointer" color='black' size={25} className='' />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default PageHeader
