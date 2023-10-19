import React from 'react'
import { motion } from 'framer-motion'
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
        <HeroH2>Igniting a Revolution in <span>HR Innovation<img src={stroke} alt="" /></span></HeroH2>
        <Container>
            <HeroBlock>
                <HeroTitle>
                    getlinkedTech
                    <img className='bub' src={bulb} alt="" />
                </HeroTitle>
                <HeroTitle>
                Hackathon <span className='hdic'>1.0 <img src={chain} alt="" /><img src={blast} alt="" /></span>
                </HeroTitle>
                <p>Participate in getlinked tech Hackathon 2023 stand 
                    a chance to win a Big prize</p>
                <Button>Register</Button>
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