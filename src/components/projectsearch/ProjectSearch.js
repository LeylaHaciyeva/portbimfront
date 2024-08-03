import React from 'react'
import './ProjectSearch.css'
import { CiCalendarDate } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BsSortAlphaDown } from "react-icons/bs";
const ProjectSearch = () => {
  return (
    <div style={{borderBottom:"1px solid #ebebeb"}}>
      <div className='project-search container pb-4'>
        <div className='row'>
          <div className='col-lg-6 search-container'>
            <div>
              <input type='text' className='project-search-input' placeholder='Search project...' />
              <CiSearch cursor="pointer" color='grey' size={20} className='project-search-btn' />
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-between'>
            <div className='col-lg-4'>
              <div className='filterbytype'>
                <select id="select-project-type" >
                <option value="allprojecttypes">All project types</option>
                  <option value="culture">Culture</option>
                  <option value="industry">Industry</option>
                  <option value="civic">Civic</option>
                  <option value="Health">Health</option>
                </select>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='filterbylocation'>
                <select id="select-project-location" >
                <option value="allprojectlocations">All locations </option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Canada">Canada</option>
                  <option value="Argentina">Argentina</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </div>
            <div className='col-lg-4 filter-right'>
              <div className='col-lg-5 filter-date'>
                  <button className=''>
                    <p>Date</p>
                    <CiCalendarDate color='#1a1a1a'/>
                  </button>
              </div>
              <div className='col-lg-7 filter-alpha'>
                <button className=''>
                  <p>Alphabetical</p>
                  <BsSortAlphaDown color='#1a1a1a'/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSearch