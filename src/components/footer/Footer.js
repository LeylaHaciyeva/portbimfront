import React from 'react'
import '../footer/Footer.css'
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer p-0 m-0'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <div className='footer-logo'>
                            <h2>PortBIM</h2>
                            <ul className='footer-menu'>
                                <li>
                                    <a href=''>sfsdf</a>
                                </li>
                                <li>
                                    <a href=''>sfsdf</a>
                                </li><li>
                                    <a href=''>sfsdf</a>
                                </li><li>
                                    <a href=''>sfsdf</a>
                                </li><li>
                                    <a href=''>sfsdf</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                        <ul>
                            <li><a href=''>
                                <FaLinkedinIn/>
                                </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
