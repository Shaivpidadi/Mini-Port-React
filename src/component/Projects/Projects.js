import React from 'react'
import './Projects.css'

const Project = () => (
    // <!-- Service Section -->
    <section id="service">
         <div className="container">
              <div className="row">
    
                   <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                        {/* <!-- SECTION TITLE --> */}
                        <div className="section-title">
                             <h5>Professional Services</h5>
                             <h4>Brands, products and packaging, perfectly attuned to a strategy and precisely to the brief.</h4>
                        </div>
                   </div>
    
                   <div className="clearfix"></div>
    
                   <div className="col-md-3 col-sm-6">
                        {/* <!-- SERVICE THUMB --> */}
                        <div className="service-thumb">
                             <i className="fa fa-ticket"></i>
                                  <h3>Strategy idea</h3>
                                  <small>Social Media</small>
                                  <small>Audience Research</small>
                                  <small>User Testing</small>
                        </div>
                   </div>
    
                   <div className="col-md-3 col-sm-6">
                        {/* <!-- SERVICE THUMB --> */}
                        <div className="service-thumb">
                             <i className="fa fa-pie-chart"></i>
                                  <h3>Creative</h3>
                                  <small>Brand Identity</small>
                                  <small>Creative Prototyping</small>
                                  <small>Art Direction</small>
                        </div>
                   </div>
    
                   <div className="col-md-3 col-sm-6">
                        {/* <!-- SERVICE THUMB --> */}
                        <div className="service-thumb">
                             <i className="fa fa-code"></i>
                                  <h3>Development</h3>
                                  <small>HTML / CSS / Javascript</small>
                                  <small>Responsive Design</small>
                                  <small>E-Commerce</small>
                                  <small>CMS Implementation</small>
                        </div>
                   </div>
    
                   <div className="col-md-3 col-sm-6">
                        {/* <!-- SERVICE THUMB --> */}
                        <div className="service-thumb">
                             <i className="fa fa-heartbeat"></i>
                                  <h3>Passionate</h3>
                                  <small>Photography</small>
                                  <small>Information Architecture</small>
                                  <small>Animation Design</small>
                        </div>
                   </div>
              </div>
         </div>
    </section>
)

export default Project
