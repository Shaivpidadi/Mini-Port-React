import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt, faChartPie, faCode, faHeartbeat } from '@fortawesome/free-solid-svg-icons'

const Services = () => (
  <section id='service'>
    <div className='container'>
      <div className='row'>

        <div className='col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8'>
          <div className='section-title'>
            <h5>Professional Services</h5>
            <h4>Literally I can do anything.</h4>
          </div>
        </div>

        <div className='clearfix' />

        <div className='col-md-3 col-sm-6'>
          <div className='service-thumb'>
            <FontAwesomeIcon icon={faChartPie} />
            <h3>Creative</h3>
            <small>Brand Identity</small>
            <small>Creative Prototyping</small>
            <small>Minimal Design</small>
            <small>Funky Design</small>
          </div>
        </div>

        <div className='col-md-3 col-sm-6'>
          <div className='service-thumb'>
            <FontAwesomeIcon icon={faTicketAlt} />
            <h3>Blockchain Development</h3>
            <small>Blockchain Architecture</small>
            <small>ICO/STO Development</small>
            <small>Hyperledger</small>
          </div>
        </div>

        <div className='col-md-3 col-sm-6'>
          <div className='service-thumb'>
            <FontAwesomeIcon icon={faCode} />
            <h3>Web Development</h3>
            <small>HTML / CSS / Javascript</small>
            <small>Responsive Design</small>
            <small>E-Commerce</small>
            <small>CMS Implementation</small>
          </div>
        </div>

        <div className='col-md-3 col-sm-6'>
          <div className='service-thumb'>
            <FontAwesomeIcon icon={faHeartbeat} />
            <h3>Passionate</h3>
            <small>Programming</small>
            <small>Information Architecture</small>
            <small>Developing with Design</small>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Services
