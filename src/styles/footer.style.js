import styled from "styled-components";
import { breakpoints } from "./theme";

export const FooterWrap = styled.section`
    background: #100B20;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 2fr repeat(2, 1fr);
    grid-template-areas: ". . ."
    "Copyright Copyright Copyright"; 
    gap: 2rem;
    padding: 60px 40px 40px 40px;
    color: #FFF;
    .Copyright { grid-area: Copyright; }
    p{
        font-size: 12px;
    }
    .Copyright{
        text-align: center !important;
        padding: 0;
        margin: 0;
    }
    p:last-child{
        
    }
    .wrapOne{
        max-width: 40vw;
        ${breakpoints.md}{
            max-width: 100vw;
        }
    }
    .linkLogo > p{
        padding-right: 4rem;
        line-height: 20px;
        ${breakpoints.md}{
            padding: 0;
        }
    }
    .linkTerms{
        margin-top: 3rem;
        display: flex;
        align-items: center;
        gap: .4rem;
        #divide{
            display: block;
            color: transparent;
            width: 1px;
            background-color: #D434FE;
        }
        ${breakpoints.md}{
            margin-top: 2rem;
        }
    }
    .wrapTwo{
        .footHead{
            h5{
                color: #D434FE;
                font-weight: 600;
                font-size: 14px;
                margin: 10px 0;
            }
            li{
                display: flex;
                list-style-type: none;
                font-size: 12px;
                padding: 8px 0;
                align-items: center;
                gap: .5rem;
            }
            .theHead{
                span{
                    color: #D434FE;
                    display: flex;
                    align-items: center;
                    gap: .5rem;
                    img{
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }
    }
    ${breakpoints.md}{
        display: flex;
        flex-direction: column;
        padding: 60px 20px 30px 20px;

    }
`