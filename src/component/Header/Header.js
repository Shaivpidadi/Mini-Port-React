import React, { Component } from 'react'
// import $ from 'jquery'
import './Header.css'

class Header extends Component {
  componentDidMount () {
    // $('.navbar-collapse a').on('click', function () {
    //   $('.navbar-collapse').collapse('hide')
    // })

    // $(window).scroll(function () {
    //   if ($('.navbar').offset().top > 50) {
    //     $('.navbar-fixed-top').addClass('top-nav-collapse')
    //   } else {
    //     $('.navbar-fixed-top').removeClass('top-nav-collapse')
    //   }
    // })

    // $(function () {
    //   $('.custom-navbar a, #home a').on('click', function (event) {
    //     var $anchor = $(this)
    //     $('html, body').stop().animate({
    //       scrollTop: $($anchor.attr('href')).offset().top - 49
    //     }, 1000)
    //     event.preventDefault()
    //   })
    // })
  }

  render () {
    return (
      <div className='navbar custom-navbar navbar-fixed-top' role='navigation'>
        <div className='container'>

          {/* <!-- NAVBAR HEADER --> */}
          <div className='navbar-header'>
            <button className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
              <span className='icon icon-bar' />
              <span className='icon icon-bar' />
              <span className='icon icon-bar' />
            </button>
            {/* <!-- lOGO --> */}
            <a href='index.html' className='navbar-brand'>Shaishav</a>
          </div>
          {/* <!-- NAVIGATION LINKS --> */}
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#home' className='smoothScroll'>Home</a></li>
              <li><a href='#about' className='smoothScroll'>About Me</a></li>
              <li><a href='#work' className='smoothScroll'>Projects</a></li>
              <li><a href='#testimonial' className='smoothScroll'>Testimonial</a></li>
              <li><a href='#contact' className='smoothScroll'>Let's talk</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
