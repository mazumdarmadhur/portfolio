import React from 'react';
import { About, Contact, Footer, Header, Nav, Skills, Testimonials } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App