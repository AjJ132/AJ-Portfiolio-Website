import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './sections/home/Home'
import Navbar from './navbar/Navbar'
import About from './sections/About/About'
import SplashScreen from './pages/SplashScreen'
import Projects from './sections/projects/Projects'
import MySkills from './sections/Skills/MySkills'
import Contact from './sections/contact/Contact'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='page'>
      <SplashScreen />
      <Navbar />
      <Home id="home" />
      {/* <About id="about" /> */}
      <MySkills id="skills" />
      {/* <Projects id="projects" /> */}
      <Contact id="contact" />
       
    </div>
  </React.StrictMode>,
)
