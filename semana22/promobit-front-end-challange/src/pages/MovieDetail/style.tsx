import styled from 'styled-components'
import COLOR from '../../constants/colors'

export const Container = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
    /* height: 100%; */
    margin: auto auto;
    /* padding: 0 2% 2% 2%; */
    overflow: auto;
    @media(max-width: 600px){
         height: 100% !important;
    }
`

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1%;
`

export const RowContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: fit-content;
    margin: auto;
    @media(max-width: 600px){
        flex-direction: column;
    }
`
export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin: auto;
`

export const Poster = styled.div`
    min-width: fit-content;
    height: fit-content;
    overflow: hidden;
    border-radius: 10px;
    .poster{
        width: 20vw;
        aspect-ratio: 2/3;
        object-fit: contain;
        object-position: center;
        border-radius: 10px;
        background-color: gray;
    };
    @media(max-width: 600px){
        display: none;
    }
`

export const Detail = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 70%;
    margin: 0 0 0 2%;
    *{
        margin: 0;
        padding: 0;
    };
    .title{
        font-variant: small-caps;
    };
    .tagline{
        width: 100%;
        font-style:italic;
    };
    #movie-infos{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        gap: 2%;
        margin: 1% 0;
        .info{
            display: flex;
            align-items: center;
            font-size: small;
            color: ${COLOR.GRAY_MIDDLE};
        };
    }   
    .genres{
        display: flex;
        align-items: center;
        gap:2%;
        width: 100%;
        font-size: small;
        color: ${COLOR.GRAY_MIDDLE};
    };
  
    .synopsis{
        flex-grow: 1;
        margin-top: 2%;
        p{
            font-size: medium;
        }
    };
    @media(max-width: 600px){
        width: 90%;
        margin: 0 0 0 2%;
        height: 100% !important;
    }
`

export const Cast = styled.div`
    position:relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: fit-content;
    margin: 2% 0 0 0;
    overflow: hidden;
    overflow-x: scroll;
    scrollbar-width: thin;
    background-color: ${COLOR.GRAY_LIGHT};
    border-radius: 4px;    
`

export const ContainerWithNoVideo = styled.video`
    width: 50%;
    aspect-ratio: 16/9;
    margin-left: 4%;
    background-color: ${COLOR.GRAY_DARK};
    background-image: url("https://fonts.gstatic.com/s/i/materialiconsoutlined/link_off/v11/24px.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20%;
    @media(max-width: 600px){
        display: none;
    }
`

export const VideoContainer = styled.iframe`
    width: 50%;
    aspect-ratio: 16/9;
    margin-left: 4%;
    @media(max-width: 600px){
        display: none;
    }
`