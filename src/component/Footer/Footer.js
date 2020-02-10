import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faDribbble, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

const footer = () => (
  <footer>
    <div className='container'>
      <div className='row'>

        <div className='col-md-12 col-sm-12'>
          <div className='footer-copyright'>
            <p>© Shaishav - Minimal Portfolio Template 2017 | All Rights Reserved.</p>
          </div>

          <ul className='social-icon'>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebookF} />
            </li>
            <li>
              <FontAwesomeIcon icon={faDribbble} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            {/* <li><a href='#' className='fa fa-twitter'>1</a></li>
            <li><a href='#' className='fa fa-facebook'>1</a></li>
            <li><a href='#' className='fa fa-dribbble'>1</a></li>
            <li><a href='#' className='fa fa-instagram'>1</a></li>
            <li><a href='#' className='fa fa-github'>1</a></li> */}
          </ul>
        </div>

      </div>
    </div>
  </footer>
)

export default footer
