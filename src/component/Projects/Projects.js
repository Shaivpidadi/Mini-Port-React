import React from 'react'
import './Projects.css'

const Project = () => (
  // <!-- Work Section -->
  <section id='work'>
    <div className='container'>
      <div className='row'>

        <div className='col-md-5 col-sm-10'>
          {/* <!-- SECTION TITLE --> */}
          <div className='section-title'>
            <h5>Featured Projects</h5>
            <h4>I develop websites with minimal designs. Here are some of my work.</h4>
          </div>
        </div>

        <div className='clearfix' />

        <div className='col-md-3 col-sm-6'>
          <div className='work-thumb'>
            <a href='vendors/images/pickABook.png' className='image-popup'>
              <img src='vendors/images/pickABook1.png' className='img-responsive' alt='Work' />
            </a>
          </div>
          <div className='work-overlay'>
            <h5>E-Commerce</h5>
            <h4>Pick-A-Book</h4>
          </div>
        </div>

        <div className='col-md-3 col-sm-6'>
          {/* <!-- WORK THUMB --> */}
          <div className='work-thumb'>
            <a href='vendors/images/utopia.png' className='image-popup'>
              <img src='vendors/images/utopia.png' className='img-responsive' alt='Work' />
            </a>
          </div>
          <div className='work-overlay'>
            <h5>Social Media</h5>
            <h4>Utopia</h4>
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Project
