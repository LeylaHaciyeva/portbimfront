import React from 'react'
import './CareerCard.css'
import { Link } from 'react-router-dom'
const CareerCard = () => {
    return (
        <Link to="/carddetail">
        <div className='container career-card'>
            <div className='row'>
                        <div className='col-lg-4'>
                            <div>
                                <p className=''>Position</p>
                                <p className='position'>Electrical Design Engineer</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex justify-content-center'>
                            <div>
                                <p className=''>Location</p>
                                <p className='location'>Baku</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex justify-content-end'>
                            <div>
                                <p>Iş növü</p>
                                <p className='type'>Tam iş günü</p>
                            </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default CareerCard