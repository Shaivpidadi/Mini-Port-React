import React, { Component } from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe'
import Project from '../Projects/Projects'
import Testimonial from '../Testimonial/Testimonial'
import ContactUs from '../ContactUS/ContactUs'
import Footer from '../Footer/Footer'

class Layout extends Component {
  render () {
    return (
      <div>
        <Header />
        <Home />
        <AboutMe />
        <Project />
        <Testimonial />
        <ContactUs />
        <Footer />
      </div>
    )
  }
}

export default Layout
