import React from 'react'
import './Navbar.css'
import { MdOutlineClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {
  function handleCloseMenuClick() {
  }
  return (
    <div className='navbar-right'>
      <div className='close-menu'>
        <div>
          <MdOutlineClose className='closebtn' color="white" fontSize={18} onClick={handleCloseMenuClick} />
        </div>
      </div>
      <div className='navbar-menu'>
        <span className='navbar-header-text' >Menu</span>
        <ul className='navbar-menu-links'>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/design">Design and MEP</Link>
          </li>
          <li>
            <Link to="/bimservices">BIM Services</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
