import React from 'react'
import './ProjectHeader.css'
import ProjectSearch from '../projectsearch/ProjectSearch.js'
const ProjectHeader = () => {
    return (
        < >
            <div className='project-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                            <div className='project-header-text'>
                                <h2>
                                    Projects
                                </h2>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end'>
                            <div className='project-count d-flex align-items-center'>
                                <p>438 Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectSearch/>
        </>
    )
}

export default ProjectHeader
