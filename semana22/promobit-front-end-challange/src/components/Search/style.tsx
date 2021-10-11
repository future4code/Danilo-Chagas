import styled from 'styled-components'

export const Container = styled.div`
    justify-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 1%;
    .search-box{
        background-color: white;
    }
    @media(max-width: 600px){
        width: 68%;
    }
`