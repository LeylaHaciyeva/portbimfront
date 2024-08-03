import React from 'react'
import PageHeader from '../../components/header/pageheader/PageHeader'
import './Projects.css'
import ProjectHeader from '../../components/projectheader/ProjectHeader'
import ProjectCards from '../../components/projectcards/ProjectCards'
import Footer from '../../components/footer/Footer'
const Projects = () => {
  return (
    <div>
      <PageHeader />
      <ProjectHeader />
      <ProjectCards/>
      <Footer/>
    </div>
  )
}

export default Projects
