import styled from 'styled-components'
import fluidFontSize from '../../services/fluidFontSize'
import COLOR from '../../constants/colors'

export const Logotype = styled.h2`
    justify-self: flex-start;
    margin: 1% 2% 1% 2%;
    font-size: ${fluidFontSize(28, 32)};
    font-family: 'Cinzel Decorative', cursive;
    font-style: oblique;
    font-weight: 900;
    font-variant: small-caps;
    line-height: 0.8;
    filter: drop-shadow(1px 2px 10px ${COLOR.YELLOW});
    color: ${COLOR.WHITE};
    cursor: pointer;
    @media(max-width: 600px){
     margin: 2% 0;
    }
`