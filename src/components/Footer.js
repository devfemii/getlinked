import React from 'react'
import logo from '../assets/getlinked.svg'
import insta from '../assets/footer/mdi_instagram.svg'
import x from '../assets/footer/Vector.svg'
import fb from '../assets/footer/Vector-1.svg'
import call from '../assets/footer/call.svg'
import map from '../assets/footer/map.svg'
import link from '../assets/footer/ri_linkedin-fill.svg'
import { FooterWrap } from '../styles/footer.style'

const Footer = () => {
  return (
    <div>
        <FooterWrap>
            <div className="wrapOne">
                <div className="linkLogo">
                    <img src={logo} alt="" />
                    <p>
                    Getlinked Tech Hackathon is a technology
                    innovation program established by a group 
                    of organizations with the aim of showcasing 
                    young and talented individuals in the field 
                    of technology
                    </p>
                    <div className="linkTerms">
                        <p>Terms of Use</p>
                        <div id="divide">
                            .
                        </div>
                        <p>Privacy Policy</p>
                    </div>
                </div>

            </div>
            <div className="wrapTwo">
                <div className="footHead">
                    <div className="theHead">
                        <h5>Useful Links</h5>
                        <li>Overview</li>
                        <li>Timeline</li>
                        <li>FAQs</li>
                        <li>Register</li>
                        <span>
                            <p>Follow us</p>
                            <img src={insta} alt="" />
                            <img src={x} alt="" />
                            <img src={fb} alt="" />
                            <img src={link} alt="" />
                        </span>
                    </div>
                </div>

            </div>
            <div className="wrapTwo">
                <div className="footHead">
                        <div className="theHead">
                            <h5>Contact Us</h5>
                            <li> <img src={call} alt="" /> +234 6707653444</li>
                            <li> <img src={map} alt="" /> 27,Alara Street
                            Yaba 100012
                            Lagos State
                            </li>
                        </div>
                </div>
            </div>
            <p className='Copyright'>All rights reserved. © getlinked Ltd.</p>
        </FooterWrap>
    </div>
  )
}

export default Footer