import styled from 'styled-components'
import COLOR from '../../constants/colors'

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4vmax;
    margin: 0;
    background-color: ${COLOR.GRAY_DARK};
    h6{
        text-align: center;
        color: ${COLOR.WHITE};
    }
    *{
        margin: 0;
        padding: 0
    }
`