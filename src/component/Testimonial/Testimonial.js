import React, { Component } from 'react'
import './Testimonial.css'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import * as jQuery from 'jquery'

class Testimonial extends Component {
  componentDidMount () {
    // var owl = $('#owl-testimonial')

    jQuery(function ($) {
      $('#owl-testimonial').owlCarousel({
        autoPlay: 6000,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        Speedfast: 200
      })
    })
  }

  render () {
    return (
      // <!-- Testimonial Section -->
      <section id='testimonial'>
        <div className='container'>
          <div className='row'>

            <div className='col-md-offset-3 col-md-6 col-sm-12'>
              {/* <!-- SECTION TITLE --> */}
              <div className='section-title'>
                <h2>what people say</h2>
              </div>
            </div>

            <div className='clearfix' />

            <div className='col-md-offset-2 col-md-8 col-sm-12'>
              <div id='owl-testimonial'>
                <OwlCarousel
                  className='owl-carousel' >

                  <div className='item'>
                    <p>I've been blown away with the results  has helped us achieve in an incredible short space of time.  In less than 3 months we had more than a 300% uplift in organic traffic</p>
                    <div className='tst-author'>
                      <div className='tst-foto'>
                        <img src='vendors/images/testimonial-img1.jpg' className='img-responsive img-circle' alt='Testimonial' />
                      </div>
                      <div className='tst-author-info'>
                        <h4>Lindane</h4>
                        <h5>Creative Director</h5>
                      </div>
                    </div>
                  </div>

                  <div className='item'>
                    <p>Shaishav is an amazing marketer. With his guidance, we managed to form a strategy that lead to consistent page 1 rankings for high competition keywords across our brand new blog. His strategy doubled our blog traffic within 3 months!</p>
                    <div className='tst-author'>
                      <div className='tst-foto'>
                        <img src='vendors/images/testimonial-img2.jpg' className='img-responsive img-circle' alt='Testimonial' />
                      </div>
                      <div className='tst-author-info'>
                        <h4>Bacelo</h4>
                        <h5>Web Designer</h5>
                      </div>
                    </div>
                  </div>

                  <div className='item'>
                    <p>I’m a author, speaker and multi-focused designer working on interfaces and branding for digital products and working with established global brands and startups to create digital experiences and products.</p>
                    <div className='tst-author'>
                      <div className='tst-foto'>
                        <img src='vendors/images/testimonial-img3.jpg' className='img-responsive img-circle' alt='Testimonial' />
                      </div>
                      <div className='tst-author-info'>
                        <h4>Donald</h4>
                        <h5>Project Manager</h5>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Testimonial
