import styled from 'styled-components'

export const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2% 0;
    h1{
        margin: auto;
    }
    @media(max-device-width: 414px){
        display: flex;
        flex-direction: column;
    }
`