import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container, Heros, HeroBlock, HeroH2, HeroTitle, HeroRight } from '../styles/home.style'
import stroke from '../assets/strokes/hero stroke.svg'
import bulb from '../assets/hero/bulb.webp'
import blast from '../assets/hero/blast.webp'
import chain from '../assets/hero/chain.webp'
import globe from '../assets/hero/globes.webp'
import fstar from '../assets/hero/fade star.svg'
import heroman from '../assets/hero/heroman.webp'
import { Button } from '../styles/global.style'

const Hero = () => {
  return (
    <Heros>
        <HeroH2 as={motion.h2}
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.4, duration:1}}
        >Igniting a Revolution in <span>HR Innovation<img src={stroke} alt="" /></span></HeroH2>
        <Container>
            <HeroBlock>
                <HeroTitle as={motion.h2}
                    initial={{opacity:0, x:-80}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.7, duration:1.3}}
                >
                    getlinkedTech
                    <img className='bub' src={bulb} alt="" />
                </HeroTitle>
                <HeroTitle as={motion.h2}
                    initial={{opacity:0, x:80}}
                    animate={{opacity:1, x:0}}
                    transition={{delay:0.7, duration:1}}
                >
                Hackathon <span className='hdic'>1.0 <img src={chain} alt="" /><img src={blast} alt="" /></span>
                </HeroTitle>
                <motion.p 
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:0.9, duration:1}}
                >Participate in getlinked tech Hackathon 2023 stand 
                    a chance to win a Big prize</motion.p>
                <Button
                    as={motion.button}
                    whileHover={{ scale: 1.1, y: -2 }} 
                    whileTap={{ scale: 0.9 }}
                    initial={{opacity:0, x:-400}}
                    animate={{opacity:1, x:0}}
                    transition={{delay: 1.1, duration: .5}}
                ><Link to='/register'>Register</Link></Button>
            </HeroBlock>
            <HeroRight>
                <img className='heroman' src={heroman} alt="" />
                <motion.img 
                    animate={{ rotate: [0, 180, 180, 0]}}
                    transition={{repeat: 5, duration: 50 }}
                className='globe' src={globe} alt="" />
                <img className='fstar' src={fstar} alt="" />
            </HeroRight>
        </Container>
    </Heros>
  )
}

export default Hero