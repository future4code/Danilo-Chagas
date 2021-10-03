import styled from 'styled-components'
import COLOR from '../../constants/colors'
import fluidFontSize from '../../services/fluidFontSize'

const widthLowBox = `84%`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 148px;
    height: 342px;
    border: 1px solid ${COLOR.GRAY_LIGHT};
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    *{
        margin:0;
        padding:0
    };
    img{
        object-fit: cover;
        /* width: 100%; */
        height: 222px;
        background-color: blue;
    }
    .title{
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${fluidFontSize(12, 16)} ;
        text-align: center;
        width: ${widthLowBox};
        /* margin-top: 2%; */
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

        :hover, :focus{
            overflow-x: visible;
            flex-wrap: wrap;
        }
        
    }
    .launch{
        width: ${widthLowBox};
        margin-top: 2%;
        font-weight: 400;
        color: ${COLOR.GRAY_MIDDLE};
    }
`

export const Genre = styled.p`
    box-sizing: content-box;
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
`