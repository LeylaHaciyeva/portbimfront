import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import About from './pages/about/About.js'
import Projects from './pages/projects/Projects.js'
import SliderComponent from './components/slider/SliderComponent';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.js';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
