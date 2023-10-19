import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints, colors, sizes } from "./theme";

export const FlexNav = styled(motion.div)`
    /* max-width: ${sizes.bodyWidth}; */
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    margin: 0 auto;
    ul{
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: ${colors.text};
        a{
            text-decoration: none;
            list-style: none;
            font-size: 1.2rem;
            color: #FFF;
        }
    }
    .menu{
        display: none;
    }
    ${breakpoints.lg} {
        img{
            max-width: 150px;
        }
        ul{
            gap: 1.2rem;
            a{
                font-size: 1rem;
            }
        }
    }
    ${breakpoints.md} {
        padding: 20px;
        .menu{
            display: block;
        }
        button{
            display: none;
        }
        img{
            max-width: 140px;
        }
        ul{
            display: none;
            a{
                font-size: 1rem;
                text-decoration: none;
            }
        }
    }
`

export const MobileNav = styled(motion.div)`
    position: fixed;
    /* top: 80px; */
    display: block;
    border-radius: 8px;
    border: 0.5px solid rgba(255, 255, 255, 0.04);
    background: #150E28;
    backdrop-filter: blur(30px);
    margin: 0 5px;
    height: auto;
    width: calc(100vw - 10px);
    padding: 40px 40px 80px 20px;
    box-sizing: border-box;
    z-index: 100;
    span{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        padding: 40px 0;
        a{
            text-decoration: none;
            color: #FFF;
            font-weight: 500;
            font-size: 18px;
        }
    }
    .closer{
        position: relative;
        top: -20px;
        right: -20px;
        .closed{
            position: absolute;
            right: 0px;
            width: 25px;
            height: 25px;
        }
        .close{
            position: absolute;
            top: 7px;
            right: 7px;
        }
    }
`