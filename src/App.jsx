import React from 'react';
import { About, Contact, Footer, Header, Nav, Portfolio, Skills, Testimonials } from './components';
import './App.scss';

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageXOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight, sectionTop = current.offsetTop - 58, sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)

const App = () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      <About />
      <Portfolio/>
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App