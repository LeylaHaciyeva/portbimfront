import React from 'react'
import './Navbar.css'
import { MdOutlineClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  let openMenu = useSelector((state) => state.menuReducer.openMenu)
  function handleClose() {
    dispatch({ type: "closeMenu", payload: openMenu })
  }
  const dispatch = useDispatch()
  return (
    <div className={openMenu ? 'open  ' : 'navbar-right'}>
      <div className='close-menu' onClick={handleClose}>
        <div>
          <MdOutlineClose className='closebtn' color="white" fontSize={18} />
        </div>
      </div>
      <div className='navbar-menu'>
        <span className='navbar-header-text' >Menu</span>
        <ul className='navbar-menu-links'>
          <li>
            <Link to="/about" onClick={handleClose}>About</Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleClose}>Projects</Link>
          </li>
          <li>
            <Link to="/design" onClick={handleClose}>Design and MEP</Link>
          </li>
          <li>
            <Link to="/bimservices" onClick={handleClose}>BIM Services</Link>
          </li>
          <li>
            <Link to="/news" onClick={handleClose}>News</Link>
          </li>
          <li>
            <Link to="/careers" onClick={handleClose}>Careers</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleClose}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-bottom d-flex align-items-center'>
        <ul>
          <li>
            <Link to="">
              <FaLinkedinIn fontSize=".875em" color='#1a1a1a' />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaFacebookF fontSize=".875em" color='#1a1a1a' />
            </Link>
          </li>
          <li>
            <Link to="">
              <FaYoutube fontSize=".875em" color='#1a1a1a' />
            </Link>
          </li>
        </ul>
        <div className='legal'>
          <Link to="">
            Legal and policies
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
