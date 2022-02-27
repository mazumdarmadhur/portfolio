import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Services />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App