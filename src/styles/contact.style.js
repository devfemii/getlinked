import styled from "styled-components";
import { breakpoints } from "./theme";

export const ContactWrap = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 60px 20px;
    ${breakpoints.md}{
        padding: 80px 20px 40px 20px;
        flex-direction: column;
    }
    .leftWrap{
        max-width: 35vw;
        img{
            width: 100%;
        }
        ${breakpoints.md}{
            max-width: 100vw;
            display: none;
        }
        .contactHead{
            h3{
                color: #D434FE;
                font-family: ClashDisplay;
                font-size: 30px;
                font-weight: 600;
                line-height: normal;
            }
            li{
                margin: 15px 0;
                color: #FFF;
                font-family: Montserrat;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
                list-style-type: none;
            }
            span{
                p{
                color: #D434FE;
                font-family: Montserrat;
                font-size: 16px;
            }
            img{
                    width: 20px;
                    height: 20px;
                    flex-shrink: 0;
                    margin-right: 10px;
                }
        }
        }
    }
    .rightWrap{
        max-width: 70vw;
        ${breakpoints.md}{
            max-width: 100vw;
        }
    }
`

export const RegWrap = styled(ContactWrap)`
    align-items: center;
    .leftWrap{
        img{
            object-fit: cover;
            object-position: center;
        }
        ${breakpoints.md}{
            max-width: 100vw;
            display: block;
            object-fit: contain;
        }
    }
`