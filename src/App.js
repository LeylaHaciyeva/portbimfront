import './App.css';
import About from './pages/about/About.js'
import Projects from './pages/projects/Projects.js'
import ProjectDetail from './components/projectdetail/ProjectDetail.js'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home/Home.js';
import { useEffect } from 'react';


function App() {
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      window.document.body.style.overflow = "hidden"
    }
    else {
      window.document.body.style.overflow = "auto"
    }
  }, [location])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/detail' element={<ProjectDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
