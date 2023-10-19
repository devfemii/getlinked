import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints, colors } from "./theme";

export const Button = styled(motion.button)`
    background: ${colors.primary};
    color: ${colors.text};
    width: 150px;
    height: 45px;
    font-family: 'Montserrat', sans-serif;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    a{
        color: ${colors.text};
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        font-size: 16px;
    }
    ${breakpoints.lg} {
        max-width: 120px;
        height: 40px;
    }
    ${breakpoints.sm} {
        max-width: 90px;
        height: 35px;
    }
`

export const TinyWrap = styled.div`
    border-radius: 5px;
    border: 1px solid #D434FE;
    background: rgba(217, 217, 217, 0.03);
    padding: 2rem;
    p{
        font-size: 14px !important;
    }
    h5{
        color: #D434FE;
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
        span{
            color: #FFF;
        }
    }
    span{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1rem;
        img{
            margin-top: 10px;
        }
        p{
            margin: 0 !important;
            padding: 0 !important;
        }
    }
`

export const FormWrap = styled.div`
    padding: 4rem;
    border-radius: 12px;
    width: auto;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    ${breakpoints.md}{
        background: none;
        box-shadow: 0;
    }
    ${breakpoints.sm}{
        padding: 20px;
    }
    ${breakpoints.xs}{
        padding: 0px;
    }
    h3{
        color: #D434FE;
        font-family: ClashDisplay;
        font-size: 20px;
        font-weight: 600;
        line-height: normal;
        margin: 0;
    }
    h4{
        color: #FFF;
        font-family: Montserrat;
        font-size: 22px;
        font-weight: 400;
        margin-top: 14px;
        text-transform: uppercase;
    }
    #part{
        display: flex;
        align-items: flex-end;
        p{
            display: block;
            margin: 0;
        }
        span{
            border: 1px dotted #D434FE;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            padding: 0 10px;
            margin: 0;
        }
    }
    p{
        font-size: 16px;
        color: #FFF;
        display: none;
        ${breakpoints.md}{
            display: block;
            font-size: 12px;
        }
    }
    .pinkWarning{
        display: block;
        color: #FF26B9;
        font-size: 12px;
        font-style: italic;
        margin: 0;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin: 2rem 0;
        box-sizing: border-box;
        width: 400px;
        #checkBox{
            margin-top: -10px;
            display: flex;
            font-size: 12px;
            gap: .5rem;
            color: #FFF;
            input[type="checkbox"]{
                display: block;
                color: #FFF;
                width: auto;
                border-radius: 0;
                height: 12px;
                height: 12px;
                padding: 0;
                border: 1px solid #FFF;
                box-sizing: border-box;
                background-color: transparent;
                box-shadow: 0px;
            }
        }
        .splitForm{
            display: flex;
            align-items: center;
            gap: 20px;
            justify-content: space-between;
            ${breakpoints.md}{
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
            }
            span{
                width: 100%;
                label{
                    color: #FFF;
                    font-family: Montserrat;
                    font-size: 14px;
                }
                select{
                    min-width: 100%;
                    margin-top: 5px;
                    cursor: pointer;
                    option{
                        background: grey;
                        margin: 8px 0;
                    }
                }
                input{
                    margin-top: 5px;
                    width: 100%;
                    &::placeholder{
                        font-size: 12px;
                        color: grey;
                    }
                }
            }
        }
        ${breakpoints.lg}{
            width: 100%;
        }
        .splitLast{
            ${breakpoints.md}{
                display: flex !important;
                flex-direction: row;
                span:nth-child(1){
                    width: 60%;
                }
                span:nth-child(2){
                    width: 40%;
                }
            }
        }
        input{
            display: block;
            color: #FFF;
            width: 100%;
            border-radius: 4px;
            height: 40px;
            padding: 10px 10px;
            border: 1px solid #FFF;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.03);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            &::placeholder{
                color: #FFF;
                font-family: Montserrat;
                font-size: 16px;
            }
            ${breakpoints.md}{
                height: 45px;
            }
        }
        select{
            display: block;
            color: #FFF;
            width: 100%;
            border-radius: 4px;
            height: 40px;
            padding: 10px 10px;
            border: 1px solid #FFF;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.03);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            &::placeholder{
                color: #FFF;
                font-family: Montserrat;
                font-size: 16px;
            }
        }
        textarea{
            padding: 10px;
            display: block;
            width: 100%;
            color: #FFF;
            border-radius: 4px;
            border: 1px solid #FFF;
            box-sizing: border-box;
            background: rgba(255, 255, 255, 0.03);
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            &::placeholder{
                color: #FFF;
                font-family: Montserrat;
                font-size: 16px;
            }
        }
    }
`

export const RegForm = styled(FormWrap)`
    form{
        width: 500px;
        ${breakpoints.lg}{
            width: 100%;
        }
    }
    ${breakpoints.lg}{
        padding: 4rem 2rem;
    }
    ${breakpoints.md}{
        padding: 4rem 10px;
    }
`