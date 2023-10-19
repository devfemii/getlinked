import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints, sizes, colors } from './theme';
import pright from '../assets/hero/pright.svg'
import padimage from '../assets/Home/Vector.svg'
import purple from '../assets/Home/purple.svg'

export const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    /* max-width: ${sizes.bodyWidth}; */
    padding: 0 20px;
    margin: 0 auto;
    ${breakpoints.md}{
        position: static;
        color: ${colors.primary};
        flex-direction: column;
    }
`;

export const Heros = styled.section`
    background-image: url(${pright});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
    background-blend-mode: hard-light;
`

export const HeroBlock = styled.div`
    max-width: 50%;
    padding-left: 20px;
    margin: 60px 0;
    p{
    color: #FFF;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    max-width: 520px;
    ${breakpoints.md}{
        font-size: 13px;
        line-height: 20px;
    }
    }
    @media (max-width: 1114px) {
        max-width: 55%;
    }
    @media (max-width: 1000px) {
        max-width: 50%;
    }
    ${breakpoints.md} {
        text-align: center;
        max-width: 100%;
        padding: 20px;
        margin: 60px auto;
    }
`

export const HeroRight = styled.div`
    box-sizing: border-box;
    max-width: 50%;
    .heroman{
        max-width: fit-content;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center right;
    }
    .globe{
        position: absolute;
        bottom: 0px;
        right: 40px;
        max-width: 500px;
        object-fit: contain;
        background-blend-mode: hard-light;
        box-sizing: border-box;
        ${breakpoints.lg}{
            display: none;
        }
        ${breakpoints.md}{
            display: block;
        }
    }
    .fstar{
        position: absolute;
        top: 0px;
        right: 45vw;
    }
    @media (max-width: 1080px) {
        max-width: 45%;
    }
    @media (max-width: 1000px) {
        max-width: 50%;
    }
    ${breakpoints.md} {
        position: relative;
        max-width: 100%;
        margin: 0 auto;
        .heroman{
            position: static;
            object-fit: contain;
        }
        .globe{
        position: absolute;
        bottom: 0px;
        right: 0;
        max-width: 100%;
        object-fit: contain;
        }
        .fstar{
            position: absolute;
            top: 0px;
            right: 0;
        }
    }
`

export const FlexContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0px !important;
    border-bottom: 1px solid #FFFFFF2E;
    border-color: #FFFFFF2E;
`

// Hero

export const HeroH2 = styled(motion.p)`
    text-align: right;
    color: #FFF;
    font-size: 28px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    padding-right: 30px;
    span{
        position: relative;
        border-right: .15em solid #D434FE;
        white-space: nowrap;
        overflow: hidden;
        width: 7.3em;
        -webkit-animation: type 2s steps(40, end);
        animation: type 2s steps(40, end);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        img{
            position: absolute;
            bottom: -15px;
            right: 0;
            width: 100%;
        }
    }
    @keyframes type {
        0% {
            width: 0;
        }
        99.9% {
            border-right: .15em solid #D434FE;
        }
        100% {
            border: none;
        }
        }

        @-webkit-keyframes type {
        0% {
            width: 0;
        }
        99.9% {
            border-right: .15em solid #D434FE;
        }
        100% {
            border: none;
        }
        }
    ${breakpoints.md} {
        text-align: center;
        font-size: 24px;
        padding-right: 0;
    }
    ${breakpoints.sm} {
        text-align: center;
        font-size: 17px;
    }
`

export const HeroTitle = styled(motion.h2)`
    display: flex;
    gap: .5rem;
    align-items: center;
    position: relative;
    width: fit-content;
    color: #FFF;
    font-family: ClashDisplay;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 0;
    .bub{
        position: absolute;
        top: -65px;
        right: 35px;
        max-width: 40px;
    }
    span{
        color: #D434FE;
    }
    .hdic{
        display: flex;
        align-items: center;
        gap: .5rem;
        img{
            width: 60px;
        }
    }
    ${breakpoints.lg} {
        font-size: 62px;
        .hdic{
        img{
            width: 30px;
        }
        }
       .bub{
        top: -65px;
        right: 35px;
        max-width: 30px;
        } 
    }
    ${breakpoints.md} {
        text-align: center;
        justify-content: center;
        font-size: 42px;
        margin: 0 auto;
        line-height: 40px;
        .bub{
        top: -25px;
        right: 15px;
        max-width: 25px;
        } 
    }
    ${breakpoints.sm} {
        font-size: 32px;
    }
`

// First Section

export const HomeWrapper = styled.div`
    padding: 60px 40px 80px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-left: 0;
    border-right: 0;
    background-image: url(${purple});
    background-size: contain;
    background-position: left center;
    .LeftWrap{
            img{
                max-width: 500px;
            }
        }
    .RightWrap{
        max-width: 45vw;
        .SubHead{
            h2{
                font-family: ClashDisplay, sans-serif;
                font-weight: 700;
                font-size: 28px;
                color: #FFF;
                display: inline-block;
                span{
                    color: #D434FE;
                }
            }
        }
        p{
            color: #FFF;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 30px;
            margin: 0;
            padding: 0;
            padding-bottom: 0.6rem;
        }
        p>span{
            color: #FF26B9;
        }
        Button{
            margin-top: 2rem;
        }
    }
    ${breakpoints.lg}{
        .LeftWrap{
            img{
                max-width: 300px;
            }
        }
    }
    ${breakpoints.md}{
        padding: 60px 20px;
        flex-direction: column;
        gap: 0;
        .LeftWrap{
            img{
                max-width: 300px;
            }
        }
        .RightWrap{
            text-align: center;
            max-width: 100vw;
        }
    }
`

export const ReverseWrapper = styled(HomeWrapper)`
    padding: 40px 40px 40px 40px;
    flex-direction: row-reverse;
    .LeftWrap{
        img{
            background-image: url(${padimage});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: top center;
        }
    }
    .RightWrap{
        p{
            padding: .5rem 0 1rem 0;
        }
        p>span{
            color: #FF26B9;
        }
    }
    ${breakpoints.md}{
        padding: 40px 20px;
        flex-direction: column;
    }
`

export const Toggle = styled.div`
    padding: 2rem 0;
    text-align: left;
    span{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #D434FE;
        h4{
            color: #D434FE;
        }
    }

`

export const TimeLine = styled.section`
    padding: 40px 20px 80px 20px;
    .TimeHead{
        max-width: 350px;
        margin: 1rem auto;
        padding-bottom: 2rem;
        text-align: center;
        color: #FFF;
        h4{
            font-weight: 700;
            font-size: 30px;
            padding: 1rem;
            margin: 0;
        }
        p{
            padding: 0;
            margin: 0;
        }
    }
    ${breakpoints.md}{
        display: none;
    }
`

export const TimeLineBox = styled.div`
    box-sizing: border-box;
    padding: 1rem 0 0 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 4rem;
    /* > *{
        width: calc(100%/3);
    } */
    .leftTime{
        width: calc(100%/2.5);
        text-align: right;
        h5{
            font-size: 22px;
            color: #D434FE;
            font-weight: 700;
            margin: 0;
        }
        p{
            color: #FFF;
        }
    }
    .rightTime{
        width: calc(100%/2.5);
        text-align: left;
        font-size: 22px;
        color: #D434FE !important;
        font-weight: 700;
        h5{
            margin: 0;
        }
    }
    .midTime{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        #midLine{
            border-left: 4px solid #D434FE;
            height: 100px;
            /* left: 50%; */
            margin-left: -2px;
            top: 0;
        }
        #midRound{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFF;
            font-size: 22px;
            font-weight: 700;
            border-radius: 50%;
            height: 40px;
            width: 40px;
            text-align: center;
            background: linear-gradient(270deg, #903AFF 0%, #D434FE 100%);
    }
}
${breakpoints.lg}{
        gap: 2rem;
        .leftTime{
            h5{
                font-size: 20px;
            }
            p{
                font-size: 14px;
            }
        }
        .rightTime{
            font-size: 20px;
        }
    }
    ${breakpoints.md}{
        gap: 2rem;
        .leftTime{
            h5{
                font-size: 18px;
            }
            p{
                font-size: 14px;
            }
        }
        .rightTime{
            font-size: 18px;
        }
    }
`
export const ReverseTimeLineBox = styled(TimeLineBox)`
    flex-direction: row-reverse;
    .rightTime{
        text-align: right;
        font-size: 22px;
        color: #D434FE !important;
        font-weight: 700;
    }
    .leftTime{
        text-align: left;
    }
`

export const MobileTimeline = styled(TimeLine)`
    display: none;
    ${breakpoints.md}{
        display: block;
        gap: 2rem;
        .leftTime{
            h5{
                font-size: 20px;
            }
            p{
                font-size: 14px;
            }
        }
        .rightTime{
            font-size: 20px;
        }
    }
`

export const MobTimeBox = styled(TimeLineBox)`
    justify-content: flex-start;
    align-items: stretch;
    gap: .8rem;
    margin: 1rem 0;
    .leftTime{
        width: 100%;
        text-align: left;
        h5{
            font-size: 22px;
            color: #D434FE;
            font-weight: 700;
            margin: 0;
        }
        p{
            color: #FFF;
        }
    }
    .rightTime{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        width: auto;
        text-align: left;
        font-size: 22px;
        color: #D434FE !important;
        font-weight: 700;
        h5{
            margin: 0;
        }
        .leftTime{
            h5{
                font-size: 18px;
            }
            p{
                font-size: 12px;
                font-weight: 400;
            }
        }
        .rightTime{
            font-size: 18px;
        }
    }
    .midTime{
        display: flex;
        justify-content: stretch;
        align-items: center;
        flex-direction: column;
        #midLine{
            border-left: 4px solid #D434FE;
            height: 120px;
            /* left: 50%; */
            margin-left: -2px;
            top: 0;
        }
        #midRound{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFF;
            font-size: 22px;
            font-weight: 700;
            border-radius: 50%;
            height: 30px;
            width: 30px;
            text-align: center;
            background: linear-gradient(270deg, #903AFF 0%, #D434FE 100%);
    }
}
`

export const PrizesWrap = styled(HomeWrapper)`
    padding: 60px 40px 80px 40px;
    gap: 2rem;
    justify-content: flex-start;
    .wrapLeft{
        max-width: 35vw;
        img{
            max-width: 100%;
        }
        ${breakpoints.md}{
            max-width: 100vw;
        }
    }
    .wrapRight{
        width: 100%;
        .SubHead{
            padding-left: 4rem;
            max-width: 300px;
            ${breakpoints.lg}{
                    margin: 0 auto;
                    max-width: 100%;
                    padding-left: 0;
                    text-align: center;
                }
        }
        ${breakpoints.lg}{
            padding: 0;
            width: 100%;
            max-width: 100vw;
        }
    }
    .thePrize{
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 100%;
        box-sizing: border-box;
        .priceBox{
            margin-top: 12rem;
            text-align: center;
            padding: 8rem 1rem 2rem 1rem;
            min-width: calc(100%/3);
            border-radius: 8px;
            border: 1px solid #D434FE;
            background: rgba(212, 52, 254, 0.12);
            position: relative;
            min-height: 150px !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            box-sizing: border-box;
            img{
                max-width: 200px;
                position: absolute;
                left: 50%;
                top: 50%;
                top: 0px;
                margin: auto;
                transform: translateY(-50%) translateX(-50%);
            }
            .nthMed{
                max-width: 250px;
                position: absolute;
                top: -20px;
                margin: auto;
            }
            h4,h5,p{
                margin: 0;
                padding: 0;
            }
            h5{
                color: #FFF;
                font-weight: 700;
                font-size: 30px;
            }
            p{
                font-size: 22px;
            }
            h4{
                color: #D434FE;
                font-size: 28px;
                font-weight: 700;
            }
            ${breakpoints.lg}{
                img{
                    max-width: 150px;
                }
                .nthMed{
                    max-width: 150px;
                }
                h5{
                    font-size: 1.4rem;
                }
            }
            ${breakpoints.md}{
                padding-top: 4rem;
                margin-top: 6rem;
                img{
                    max-width: 100px;
                }
                h5{
                    font-size: 1rem;
                }
                p{
                    font-size: 17px;
                }
                h4{
                    font-size: 1.2rem;
                }
            }
            ${breakpoints.sm}{
                padding-top: 4rem;
                margin-top: 6rem;
                img{
                    max-width: 100px;
                }
                h5{
                    font-size: 1.1rem;
                }
                h4{
                    font-size: 1rem;
                }
            }
        }
        >:nth-child(2){
                border: 1px solid #903AFF;
                background: rgba(144, 58, 255, 0.12);
            } 
        ${breakpoints.lg}{
            justify-content: center;
            align-items: center;
            padding: 20px;
        }          
    }
    ${breakpoints.lg}{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    ${breakpoints.md}{
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const Partners = styled.section`
    padding: 60px 40px 80px 40px;
    .TimeHead{
        max-width: 450px;
        margin: 1rem auto;
        padding-bottom: 2rem;
        text-align: center;
        color: #FFF;
        h4{
            font-weight: 700;
            font-size: 30px;
            padding: 1rem;
            margin: 0;
        }
        p{
            padding: 0;
            margin: 0;
        }
    }
    .thePartners{
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #D434FE;
        border-radius: 5px;
        padding: 6rem 4rem;
        margin-left: 40px;
        margin-right: 40px;
        img{
            width: 100%;
        }
        ${breakpoints.lg}{
            margin-left: 0;
            margin-right: 0;
            padding: 4rem 2rem;
        }
    }
    ${breakpoints.md}{
        padding-left: 20px;
        padding-right: 20px;
    }
`