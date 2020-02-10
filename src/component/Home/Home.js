import React from 'react'
import './Home.css'
const Home = () => (
  <section id='home'>
    <div className='container'>
      <div className='row'>

        <div className='col-md-7 col-sm-12 typewriter'>
          <h5>Hello,</h5>
          <h1>I am a creative, minimalist, Web developer</h1>
          <h5>Welcome to the place where development meets design.</h5>
          <a href='#about' className='btn section-btn smoothScroll'>Know More <i className='fa fa-angle-right' /></a>
        </div>

      </div>
    </div>
  </section>
)

export default Home
