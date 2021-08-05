import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5%;
        margin: 2%;
    }
    p{
        text-align: center;
        a{
            text-decoration: none;
            cursor: pointer;
            font-weight: 600;
            :visited{
                text-decoration: none;
                color:inherit;
            }
        }
    }
`