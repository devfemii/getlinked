import React from 'react'
import { motion } from 'framer-motion'
// import { Container } from '../styles/home.style'
import Hero from '../components/hero'
import Nav from '../components/nav/nav'

// Images
import bulb from '../assets/Home/hbulb.webp'
import lady from '../assets/Home/lady.webp'
import clist from '../assets/Home/clist.webp'
import think from '../assets/Home/think.webp'
import trophy from '../assets/Home/trophy.webp'
import med1 from '../assets/Home/med1.webp'
import med2 from '../assets/Home/med2.webp'
import med3 from '../assets/Home/med3.webp'
import lock from '../assets/Home/lock.webp'
import list from '../assets/Home/list terms.svg'
import partners from '../assets/Home/partners.svg'
import { HomeWrapper, MobTimeBox, MobileTimeline, Partners, PrizesWrap, ReverseTimeLineBox, ReverseWrapper, TimeLine, TimeLineBox, Toggle } from '../styles/home.style'
import { Button, TinyWrap } from '../styles/global.style'
import Footer from '../components/Footer'

const Hompage = () => {

    const Textreveal = {
        hidden:{opacity: 1},
        visible:{opacity: 1,
            transition: {
                delay: .5,
                staggerChildren: .8,
            },
    }}
    const reveal = {
        hidden: {opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
        }
    }

    const boxVariant = {
        offscreen:{
            opacity: 0, x: -1000, scale: 0.2
        },
        onscreen:{
            opacity: 1, x: 1, scale: 1,
            transition:{
                // type:'spring',
                delay: 1,
                duration: 1.5,
                type: 'spring'
            },
        },
    }

  return (
    <>
        <Nav />
        <Hero />
        <div id="overview"></div>
        <HomeWrapper>
            <div className="LeftWrap">
                <motion.img 
                    initial='offscreen'
                    animate='onscreen'
                    variants={boxVariant}
                src={bulb} alt="" />
            </div>
            <motion.div 
                initial="hidden"
                animate='visible'
                variants={Textreveal}
                className="RightWrap">
                <div className="SubHead">
                    <motion.h2 variants={reveal}>
                    Introduction to getlinked<br />
                    <motion.span variants={reveal}>tech Hackathon 1.0</motion.span>
                    </motion.h2>
                </div>
                <motion.p variants={reveal}>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
                </motion.p>
            </motion.div>
        </HomeWrapper>
        <ReverseWrapper>
            <div className="LeftWrap">
                <img src={lady} alt="" />
            </div>
            <div className="RightWrap">
                <div className="SubHead">
                    <h2>
                    Rules and<br />
                    <span>Guidelines</span>
                    </h2>
                </div>
                <p>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as
                clear as day: to shape the future. Whether you're a coding genius, a 
                design maverick, or a concept wizard, you'll have the chance to transform 
                your ideas into reality. Solving real-world problems, pushing the boundaries
                of technology, and creating solutions that can change the world,
                that's what we're all about!
                </p>
            </div>
        </ReverseWrapper>
        <HomeWrapper>
            <div className="LeftWrap">
                <img src={clist} alt="" />
            </div>
            <div className="RightWrap">
                <div className="SubHead">
                    <h2>
                    Judging Criteria
                    <br />
                    <span>Key attributes</span>
                    </h2>
                </div>
                <p><span>Innovation and Creativity</span>
                : Evaluate the uniqueness and creativity of the
                solution. Consider whether it addresses a real-world problem in a novel 
                way or introduces innovative features.
                </p>
                <p><span>Functionality</span>
                : Assess how well the solution works. Does it perform its 
                intended functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
                </p>
                <p><span>Impact and Relevance</span>
                : Determine the potential impact of the solution 
                in the real world. Does it address a significant problem, and is it relevant 
                to the target audience? Judges would assess the potential social, 
                economic, or environmental benefits.
                </p>
                <p><span>Technical Complexity</span>
                : Evaluate the technical sophistication of the solution. 
                Judges would consider the complexity of the code, the use of advanced 
                technologies or algorithms, and the scalability of the solution.
                </p>
                <p><span>Adherence to Hackathon Rules</span>
                : Judges will Ensure that the team adhered 
                to the rules and guidelines of the hackathon, including deadlines, use of 
                specific technologies or APIs, and any other competition-specific requirements.
                </p>
                <Button as={motion.button}
              whileHover={{ scale: 1.1, y: -2 }} 
              whileTap={{ scale: 0.9 }}
              transition={{duration: .5}}
                >Read More</Button>
            </div>
        </HomeWrapper>
        <div id="faq"></div>
        <ReverseWrapper>
            <div className="LeftWrap">
                <img src={think} alt="" />
            </div>
            <div className="RightWrap">
                <div className="SubHead">
                    <h2>
                    Frequently Ask<br />
                    <span>Question</span>
                    </h2>
                </div>
                <p>
                We got answers to the questions that you might
                want to ask about getlinked Hackathon 1.0
                </p>
                <Toggle>
                    <span>
                        <p>Can I work on a project I started before the hackathon?</p>
                        <h4>+</h4>
                    </span>
                    <span>
                        <p>What happens if I need help during the hackathon?</p>
                        <h4>+</h4>
                    </span>
                    <span>
                        <p>What happens if I don't have an idea for a project?</p>
                        <h4>+</h4>
                    </span>
                    <span>
                        <p>What happens after the hackathon ends?</p>
                        <h4>+</h4>
                    </span>
                    <span>
                        <p>Can I work on a project I started before the hackathon?</p>
                        <h4>+</h4>
                    </span>
                </Toggle>
            </div>
        </ReverseWrapper>
        <TimeLine>
            <div className="TimeHead">
                <div id="timeline"></div>
                <h4>Timeline</h4>
                <p>Here is the breakdown of the time we anticipate 
                using for the upcoming event.</p>
            </div>
            <TimeLineBox>
                <div className="leftTime">
                        <h5>
                        Hackathon Announcement
                        </h5>
                        <p>
                        The getlinked tech hackathon 1.0 is formally announced
                        to the general public and teams begin to get ready to register
                        </p>
                </div>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        1
                    </div>
                </div>
                <div className="rightTime">
                    <h5>November 18, 20233</h5>
                </div>
            </TimeLineBox>
            <ReverseTimeLineBox>
                <div className="leftTime">
                        <h5>
                        Teams Registration begins
                        </h5>
                        <p>
                        Interested teams can now show their interest in the
                        getlinked tech hackathon 1.0 2023 by proceeding to register
                        </p>
                </div>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        2
                    </div>
                </div>
                <div className="rightTime">
                    <h5>November 18, 2023</h5>
                </div>
            </ReverseTimeLineBox>
            <TimeLineBox>
                <div className="leftTime">
                        <h5>
                        Teams Registration ends
                        </h5>
                        <p>
                        Interested Participants are no longer Allowed to
                        register
                        </p>
                </div>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        3
                    </div>
                </div>
                <div className="rightTime">
                    <h5>November 18, 20233</h5>
                </div>
            </TimeLineBox>
            <ReverseTimeLineBox>
                <div className="leftTime">
                        <h5>
                        Announcement of the accepted teams
                        and ideas
                        </h5>
                        <p>
                        All teams whom idea has been accepted into getlinked tech
                        hackathon 1.0 2023 are formally announced
                        </p>
                </div>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        4
                    </div>
                </div>
                <div className="rightTime">
                    <h5>November 18, 20233</h5>
                </div>
            </ReverseTimeLineBox>
            <TimeLineBox>
                <div className="leftTime">
                        <h5>
                        Getlinked Hackathon 1.0 Offically Begins
                        </h5>
                        <p>
                        Accepted teams can now proceed to build their
                        ground breaking skill driven solutions
                        </p>
                </div>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        5
                    </div>
                </div>
                <div className="rightTime">
                    <h5>November 18, 20233</h5>
                </div>
            </TimeLineBox>
            <ReverseTimeLineBox>
                <div className="leftTime">
                        <h5>
                        Demo Day
                        </h5>
                        <p>
                        Teams get the opportunity to pitch their projects to judges.
                        The winner of the hackathon will also be announced on
                        this day
                        </p>
                </div>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        6
                    </div>
                </div>
                <div className="rightTime">
                    <h5>November 18, 20233</h5>
                </div>
            </ReverseTimeLineBox>
        </TimeLine>
        <MobileTimeline>
            <div className="TimeHead">
            <div id="timelines"></div>
                <h4>Timeline</h4>
                <p>Here is the breakdown of the time we anticipate 
                using for the upcoming event.</p>
            </div>
            <MobTimeBox>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        1
                    </div>
                </div>
                <div className="rightTime">
                    <div className="leftTime">
                            <h5>
                            Hackathon Announcement
                            </h5>
                            <p>
                            The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register
                            </p>
                    </div>
                    <h5>November 18, 20233</h5>
                </div>
            </MobTimeBox>
            <MobTimeBox>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        2
                    </div>
                </div>
                <div className="rightTime">
                    <div className="leftTime">
                            <h5>
                            Teams Registration begins
                            </h5>
                            <p>
                            Interested teams can now show their interest in the
                            getlinked tech hackathon 1.0 2023 by proceeding to register
                            </p>
                    </div>
                    <h5>November 18, 20233</h5>
                </div>
            </MobTimeBox>
            <MobTimeBox>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        3
                    </div>
                </div>
                <div className="rightTime">
                    <div className="leftTime">
                            <h5>
                            Teams Registration ends
                            </h5>
                            <p>
                            Interested Participants are no longer Allowed to
                            register
                            </p>
                    </div>
                    <h5>November 18, 20233</h5>
                </div>
            </MobTimeBox>
            <MobTimeBox>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        4
                    </div>
                </div>
                <div className="rightTime">
                    <div className="leftTime">
                            <h5>
                            Announcement of the accepted teams
                            and ideas
                            </h5>
                            <p>
                            All teams whom idea has been accepted into getlinked tech
                            hackathon 1.0 2023 are formally announced
                            </p>
                    </div>
                    <h5>November 18, 20233</h5>
                </div>
            </MobTimeBox>
            <MobTimeBox>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        5
                    </div>
                </div>
                <div className="rightTime">
                    <div className="leftTime">
                            <h5>
                            Getlinked Hackathon 1.0 Offically Begins
                            </h5>
                            <p>
                            Accepted teams can now proceed to build their
                            ground breaking skill driven solutions
                            </p>
                    </div>
                    <h5>November 18, 20233</h5>
                </div>
            </MobTimeBox>
            <MobTimeBox>
                <div className="midTime">
                    <div id="midLine">

                    </div>
                    <div id="midRound">
                        6
                    </div>
                </div>
                <div className="rightTime">
                    <div className="leftTime">
                            <h5>
                            Demo Day
                            </h5>
                            <p>
                            Teams get the opportunity to pitch their projects to judges.
                            The winner of the hackathon will also be announced on
                            this day
                            </p>
                    </div>
                    <h5>November 18, 20233</h5>
                </div>
            </MobTimeBox>
        </MobileTimeline>

        {/* Rewards & Prizes */}

        <PrizesWrap>
                <div className="LeftWrap wrapLeft">
                    <img src={trophy} alt="" />
                </div>
                <div className="RightWrap wrapRight">
                    <div className="SubHead">
                        <h2>
                        Prizes and
                        <br />
                        <span>Rewards</span>
                        </h2>
                        <p>Highlight of the prizes or rewards for winners and
                        for participants.
                        </p>
                    </div>
                    <div className="thePrize">
                        <div className="priceBox">
                            <img src={med1} alt="" />
                            <h5>2nd</h5>
                            <p>Runner</p>
                            <h4>N300,000</h4>
                        </div>
                        <div className="priceBox">
                            <img className='nthMed' src={med2} alt="" />
                            <h5>1st</h5>
                            <p>Runner</p>
                            <h4>N400,000</h4>
                        </div>
                        <div className="priceBox">
                            <img src={med3} alt="" />
                            <h5>3rd</h5>
                            <p>Runner</p>
                            <h4>N150,000</h4>
                        </div>
                    </div>
                        
                </div>
            </PrizesWrap>
        <Partners>
            <div className="TimeHead">
                <h4>Partners and Sponsors</h4>
                <p>Getlinked Hackathon 1.0 is honored to have the following major 
                    companies as its partners and sponsors</p>
            </div>
            <div className="thePartners">
                <img src={partners} alt="" />
            </div>
        </Partners>
        <ReverseWrapper>
            <div className="LeftWrap">
                <img src={lock} alt="" />
            </div>
            <div className="RightWrap">
                <div className="SubHead">
                    <h2>
                    Privacy Policy and<br />
                    <span>Terms</span>
                    </h2>
                </div>
                <p>
                Below are our privacy & policy, which outline a lot of goodies. 
                it’s our aim to always take of our participant
                </p>
                <TinyWrap>
                    <p>
                    At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.
                    </p>
                    <h5>
                    Licensing Policy<br />
                    <span>Here are terms of our Standard License:</span>
                    </h5>
                    <span>
                        <img src={list} alt="" />
                        <p>The Standard License grants you a non-exclusive right to
                        navigate and register for our event</p>
                    </span>
                    <span>
                        <img src={list} alt="" />
                        <p>The Standard License grants you a non-exclusive right to
                        navigate and register for our event</p>
                    </span>
                    <Button as={motion.button}
                        whileHover={{ scale: 1.1, y: -2 }} 
                        whileTap={{ scale: 0.9 }}
                        transition={{duration: .5}}
                    >Read More</Button>
                </TinyWrap>
            </div>
        </ReverseWrapper>
        <Footer />
    </>
  )
}

export default Hompage