import './App.css';
import About from './pages/about/About.js'
import Projects from './pages/projects/Projects.js'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home/Home.js';
import { useEffect, useState } from 'react';
import ProjectDetail from './pages/projectdetail/ProjectDetail.js';
import Contact from './pages/contact/Contact.js';
import BimServices from './pages/bim/BimServices.js';
import Career from './pages/career/Career.js';
import CareerDetail from './pages/careerdetail/CareerDetail.js';
import axios from 'axios'

function App() {
  
  // const [token, setToken] = useState('');
  // let location = useLocation();
  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     window.document.body.style.overflow = "hidden"
  //   }
  //   else {
  //     window.document.body.style.overflow = "auto"
  //   }
  // }, [location])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/detail' element={<ProjectDetail/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/bimservices' element={<BimServices/>} />
        <Route path='/careers' element={<Career/>} />
        <Route path='/carddetail' element={<CareerDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
