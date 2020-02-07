import React, { Component } from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'

class Layout extends Component {
  render () {
    return (
      <div>
        <Header />
        <Home />
        {/* <p>Main</p>
        <p>About me</p>
        <p>Projects</p>
        <p>Testimonial</p>
        <p>Let's talk</p> */}
      </div>
    )
  }
}

export default Layout
