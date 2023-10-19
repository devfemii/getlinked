import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../../styles/global.style'
import { FlexContainer } from '../../styles/home.style'
import logo from '../../assets/getlinked.svg'
import { FlexNav, MobileNav } from '../../styles/nav.style'
import menu from '../../assets/hero/menu.svg'
import close from '../../assets/hero/close.svg'
import closed from '../../assets/hero/closed.svg'
import { motion } from 'framer-motion'

const Nav = () => {

  const history = useNavigate();
  const navigateToHomepage = () => {
    history('/');
  };


  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };
  const offvariant = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  const [open, setOpen] = useState(false);

  return (
    <>
    <FlexContainer>
        <FlexNav>
            <img src={logo} alt="Homepage"
            onClick={navigateToHomepage}
            style={{ cursor: 'pointer' }}
             />
            <ul>
                <a href="#timeline">Timeline</a>
                <a href="#overview">Overview</a>
                <a href="#faq">FAQs</a>
                <Link to='/contact'>Contact</Link>
            </ul>
            <img onClick={()=> setOpen(open => !open)} src={menu} alt="menu" className='menu' />
            <Button><Link to='/register'>Register</Link></Button>
        </FlexNav>
    </FlexContainer>
    {
      open ? 
    <MobileNav as={motion.div}
      animate={open ? "open" : "closed"}
      variants={sidebar}
    >
      <div onClick={()=> setOpen(open => !open)} className="closer">
        <img className='closed' src={closed} alt="" />
        <img className='close' src={close} alt="" />
      </div>
      <motion.span variants={offvariant}>
        <motion.a 
        href="#timelines"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        variants={variants}
        >Timeline</motion.a>
        <motion.a
        href="#overview"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={variants}
        >Overview</motion.a>
        <motion.a
        href="#faq"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={variants}
        >FAQs</motion.a>
        <Link to='/contact'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={variants}
        >Contact</Link>
      </motion.span>
      <Button><Link to='/register'>Register</Link></Button>
    </MobileNav> :
    ""
    }
    </>
  )
}

export default Nav