import React from 'react'
import PageHeader from '../header/pageheader/PageHeader'
import ProjectHeader from '../projectheader/ProjectHeader'
import './ProjectDetail.css'
import detailImage from '../../images/details.jpg'
const ProjectDetail = () => {
    return (
        <>
            <PageHeader />
            <div className='project-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                            <div className='project-header-text d-flex'>
                                <span className='p-0 m-0'>
                                    PROJECTS /
                                </span>
                                <span className='project-name'>
                                    SEA BREEZE – LIGHT HOUSE 4
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='project-details'>
                <div className='detail-image'>
                    <img src={detailImage} title='' srcSet=''/>
                    <p> SEA BREEZE – LIGHT HOUSE 4</p>
                    <div className='overlay'></div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetail