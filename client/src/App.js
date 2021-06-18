import React, { useEffect } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Slider from './components/Slider'
import sr from './sr'



const App = () => {

  useEffect(() => {
    sr.reveal('.home__title', {});
    sr.reveal('.button', { delay: 100 });
    sr.reveal('.home__img', { delay: 300, origin: 'left' });
    sr.reveal('.home__social-icon', { interval: 200 });

    /*SCROLL ABOUT*/
    sr.reveal('.about__subtitle', {});
    sr.reveal('.ab_t', { delay: 100 });
    sr.reveal('.ab_i', { delay: 200 });
    sr.reveal('.about__text1', { delay: 300 });
    sr.reveal('.about__text2', { delay: 100 });
    sr.reveal('.about__img1', { delay: 100 });

    /*SCROLL SKILLS*/
    sr.reveal('.skills__subtitle', { interval: 100 });
    sr.reveal('.skills__data', { interval: 100 });

    /*SCROLL WORK*/

    /*SCROLL CONTACT*/
    sr.reveal('.c_i', { interval: 100 });
  }, [])

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
