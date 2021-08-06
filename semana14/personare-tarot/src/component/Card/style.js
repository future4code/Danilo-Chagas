import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 162px;
    height: 341px;
    margin-bottom: 1%;
    border-radius: 2px;
    overflow: hidden;
    :hover, :focus{
        cursor: pointer;
    }
`

export const CardImage = styled.img`
    width: 100%;
`