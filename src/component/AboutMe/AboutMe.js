import React from 'react'
import './AboutMe.css'

const aboutMe = () => (
    // <!-- About Section -->
    <section id="about">
        <div className="container">
            <div className="row">

                <div className="col-md-5 col-sm-6">
                        <div className="about-text">
                            <h5>About my story</h5>
                            <h2>Shaishav is web developer and designer based in India</h2>
                            <div>
                                <p>I Believe in Living Minimal.</p>
                                <p>I believe in development with design. Just shoot me a message at <a href="mailto:shaipidadi@gmail.com">shaipidadi@gmail.com</a>.</p>
                                <p>A wonderful serenity has taken possession of my entire soul.</p>
                            </div>
                        </div>
                </div>

                <div className="col-md-4 col-sm-6">
                        <div className="about-image">
                            <img src="vendor/images/about-img.jpg" className="img-responsive" alt="about" />
                        </div>
                </div>

                <div className="col-md-3 col-sm-12">
                        <div className="skill-thumb">

                            <div className="section-title">
                                <h2>Skillset</h2>
                            </div>

                            <strong>Information Architecture</strong>
                                <span className="color-white pull-right">90%</span>
                                    <div className="progress">
                                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: '90%'}}></div>
                                    </div>

                            <strong>Brand Identity</strong>
                                <span className="color-white pull-right">70%</span>
                                    <div className="progress">
                                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}></div>
                                    </div>

                            <strong>CMS Implementation</strong>
                                <span className="color-white pull-right">85%</span>
                                    <div className="progress">
                                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}></div>
                                    </div>

                            <strong>Art Direction</strong>
                                <span className="color-white pull-right">60%</span>
                                    <div className="progress">
                                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}></div>
                                    </div>

                            <strong>HTML / CSS / Javascript</strong>
                                <span className="color-white pull-right">95%</span>
                                    <div className="progress">
                                            <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                                    </div>

                        </div>
                </div>
            </div>
        </div>
    </section>
)

export default aboutMe
