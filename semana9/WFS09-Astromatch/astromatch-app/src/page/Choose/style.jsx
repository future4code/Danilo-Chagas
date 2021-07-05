import styled from 'styled-components'
import { FaRegKissWinkHeart } from 'react-icons/fa'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
`

export const CardProfile = styled.div`
    position: relative;
    width: 25%;
    height: 90%;
    border: 1px solid lightgray;
    box-shadow: 1px 1px 5px;
    border-radius: 10px;
    overflow: hidden;
 

    #container-bg{
        position: absolute;
        z-index:-1;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;        
        background-image: url(${(props) => props.img});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -o-filter: blur(20px);
        -ms-filter: blur(20px);
        filter: blur(20px);
        overflow: hidden;
    }

    #container-content{
        position: relative;
        left: 0;
        right: 0; 
        z-index: 999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        .container-profile-img{
            flex-grow: 1;
            width: 100%;
            height: 50%;
            background-image: url(${(props) => props.img});
            background-position: top center;
            background-size: cover;
            background-clip: border-box;
            background-repeat: no-repeat;
        }

        .container-card-botton{
            display: flex;
            width: 100%;
            height: fit-content;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            background-color: #ffffff73;
        }
        
        .container-profile-detail{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin: 2% 0 2% 5%;
            h4{
                flex-grow: 1;
                width: 100%;
                text-align: left;
            }
            p{
                width: 100%;    
                text-align: left;
                -webkit-hyphens: auto;
                -ms-hyphens: auto;
                hyphens: auto;
                text-overflow:ellipsis;
            }

        }
        .container-top-buttons{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 10%;
            background-color: #ffffff73;
            overflow: hidden;
        }

        #button-refresh{
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;   
            background: none;
            border: none;            
            padding: 0 5%;
            color: #003b00;
            font-size: 1.5em;
            :hover,:focus{
                    background-color: #003b003e;
                    transform: scale(1.1);
                    cursor: pointer;
                    :after{
                        font-size: 0.6em;
                        content: " reiniciar";
                    }
                }
        }

        #button-matches{
            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;   
            background: none;
            border: none;                
            padding: 0 5%;
            color: #af0000;
            font-size: 1.5em;
            :hover,:focus{
                    color: #af0000;
                    background-color: #ff000030;
                    transform: scale(1.1);
                    cursor: pointer;
                    :after{
                        font-size: 0.6em;
                        content: " matches";
                    }   
                }
        }
        
        #button-like{
            font-size: 6em;
            margin-right: 5%;
            filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
            fill: #831e1e;
            :hover,:focus{
                position: relative;
                z-index:1;
                transform: scale(1.5);
                cursor: pointer;
                fill: red;
                filter: drop-shadow(-3px -5px 2px rgb(0 0 0 / 0.4));
                :active{
                        transform: scale(1.3);    
                        filter: drop-shadow(-1px -1px 2px rgb(0 0 0 / 0.4));                    
                    }
            }
        }

        .container-botton-buttons{
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
        #button-discard{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 2%;
            font-size: 1.2em;
            background: none;
            color: #505050;
            box-shadow: 1px 0px 2px;
            border: none;
            border-radius: 10px;
            padding: 1% 2%;
                :hover,:focus{
                    box-shadow: 2px 0px 2px;
                    background-color: #ffffff2d;
                    transform: scale(0.9);  
                    cursor: pointer;
                }
        }
        #container-empty{
            flex-grow: 1;
            color: #3a3a3a;
        }
    }
        @media (max-device-width: 414px) {
            width: 90vw;
        }
`