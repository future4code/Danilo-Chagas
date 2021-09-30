import styled from 'styled-components'
import COLOR from '../../constants/colors'

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 20vmin;
    margin: 0;
    background-color: ${COLOR.GRAY_DARK};
    *{
        margin: 0;
        padding: 0
    }
`