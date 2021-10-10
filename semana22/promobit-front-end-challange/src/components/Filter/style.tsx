import styled from 'styled-components'
import COLOR from '../../constants/colors'
import fluidFontSize from '../../services/fluidFontSize'

export const Container = styled.div`
    place-self: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: fit-content;
    height: 100%;
    padding: 0 2%;
    .visible-false{
        display: none;
    }
    
    @media(max-device-width: 500px){
        position: relative;
        padding: 0;
        width: 100%;
    }
`

export const FilterType = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-top: 8%;
    .name{
        margin: 0;
        font-size: ${fluidFontSize(14, 22)};
        font-weight: 800;
        font-variant: small-caps;
        color: ${COLOR.GRAY_DARK};
        cursor: pointer;
    }
    ul{
        margin: 4% 0 0 0;
        li{
        margin: 0 0 8% 0;
        list-style: none;
        cursor: pointer;
        }
    }   
    @media(max-device-width: 500px){
        .name{
        margin: 0;
        font-size: ${fluidFontSize(14, 22)};
        font-weight: 800;
        font-variant: small-caps;
        color: ${COLOR.GRAY_DARK};
        cursor: pointer;
        width: 100%;
    }
        #genres-container{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }
    }
`