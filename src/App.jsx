import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    
    </>
  )
}

export default App
