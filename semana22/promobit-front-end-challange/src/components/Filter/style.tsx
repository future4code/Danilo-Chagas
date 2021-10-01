import styled from 'styled-components'
import COLOR from '../../constants/colors'
import fluidFontSize from '../../services/fluidFontSize'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: fit-content;
    height: 100%;
    padding: 0 2%;
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
    
`