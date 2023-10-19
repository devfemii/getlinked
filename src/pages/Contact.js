import React from 'react'
import { motion } from 'framer-motion'
import Nav from '../components/nav/nav'
import insta from '../assets/footer/mdi_instagram.svg'
import x from '../assets/footer/Vector.svg'
import fb from '../assets/footer/Vector-1.svg'
import link from '../assets/footer/ri_linkedin-fill.svg'
import { ContactWrap } from '../styles/contact.style'
import { Button, FormWrap } from '../styles/global.style'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
        <Nav />
        <ContactWrap>
            <div className="leftWrap">
                <div className="contactHead">
                    <h3>Get in touch</h3>
                    <li>Contact <br /> Information</li>
                    <li>27,Alara Street <br />
                        Yaba 100012 <br />
                        Lagos State
                    </li>
                    <li>Call Us : 07067981819</li>
                    <li>we are open from Monday-Friday <br />
                        08:00am - 05:00pm
                    </li>
                    <span>
                            <p>Share on</p>
                            <img src={insta} alt="" />
                            <img src={x} alt="" />
                            <img src={fb} alt="" />
                            <img src={link} alt="" />
                    </span>
                </div>
            </div>
            <div className="rightWrap">
                <FormWrap>
                    <h3>Questions or need assistance? <br /> 
                    Let us know  about it!
                    </h3>
                    <p>Email us below to any question related 
                    to our event</p>
                    <form action="">
                        <input type="text" placeholder="Your Name" id="" />
                        <input type="email" placeholder="E-mail" id="" />
                        <textarea placeholder="Your Message" id="" cols="4" rows="8"></textarea>
                        <Button
                            as={motion.button}
                            whileHover={{ scale: 1.1, y: -2 }} 
                            whileTap={{ scale: 0.9 }}
                            transition={{duration: .5}}
                        >Submit</Button>
                    </form>
                </FormWrap>
            </div>
        </ContactWrap>
        <Footer />
    </>
  )
}

export default Contact