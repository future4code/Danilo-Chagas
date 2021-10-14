import styled from 'styled-components'
import COLOR from '../../constants/colors'
import fluidFontSize from '../../services/fluidFontSize'

const widthLowBox = `84%`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 186px;
    aspect-ratio: 2/4;
    border-radius: 10px;
    box-shadow: 0px 2px 4px;
    cursor: pointer;
    overflow: hidden;
    *{
        margin:0;
        padding:0
    };
    img{
        object-fit: cover;
        width: 100%;
        height: 300px;
        background-color: ${COLOR.GRAY_MIDDLE};
        background-size: 1vmin;
        background-repeat: no-repeat;       
    }

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${fluidFontSize(10, 16)} ;
        text-align: center;
        width: ${widthLowBox};
        margin-top: 2%;
    }
    .genres{
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-end;
        justify-content: flex-start;
        gap: 4px 2%;
        width: ${widthLowBox};
        margin-top: 2%;
        overflow: hidden;
        scrollbar-width:thin;
        -webkit-overflow-scrolling: touch; 
        :hover, :focus{            
            overflow: scroll;
            scroll-behavior: smooth;
            scrollbar-width: 8px; 
            cursor: move;
            ::-webkit-scrollbar {
                height: 8px;
                width: 8px;
                overflow-x: scroll;
            }
        }
        ::-webkit-scrollbar-thumb {
            background: ${COLOR.BLUE_MIDDLE};
        }
    }
    .launch{
        width: ${widthLowBox};
        margin-top: 2%;
        font-weight: 400;
        color: ${COLOR.GRAY_MIDDLE};
    }
    :hover{
        box-shadow: 1px 2px 4px ${COLOR.BLUE_DARK};
    }
    @media(max-width:600px){
        -webkit-overflow-scrolling: touch; 
        .genres{
            ::-webkit-scrollbar {
                height: 8px;
                width: 8px;
                overflow-x: scroll;
            }
        };
    }
`

export const Genre = styled.p`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: fit-content;
    margin: 0;
    padding: 0 2px;
    border: 1px solid ${COLOR.GRAY_LIGHT};
    border-radius: 10px;
    font-size: ${fluidFontSize(8, 12)};
    text-transform: lowercase;
    word-wrap: normal;
    white-space: nowrap;
    @media(max-width:600px){
        font-size: small;
    }
`