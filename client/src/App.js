import React from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Slider from './components/Slider'



const App = () => {
  return (
    <>
      <Navbar />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Slider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
