import styled from "styled-components";

export const ContainerCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 162px;
    ${(props) => props.flippedUp ?
    `
    height: fit-component;
    margin-bottom: calc(100vmin*-0.2);
    z-index: 50;
    filter: drop-shadow(4px 6px 4px);
    border-radius: 8px;`
    :`
    height: 309px;
    margin-bottom: calc(100vmin*-0.2);
    filter: drop-shadow(1px 1px 2px);`};
    overflow: hidden;   
    ${(props) => !props.flippedUp && `
     :hover, :focus{
        cursor: pointer;
    }
    ::after{
        content: "";
        position: absolute;
        z-index: 1;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-image: url(${props.imageBackCard});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        }`
    }
`

export const CardImage = styled.img`
    ${(props) => props.flippedUp ? `
    position: relative;
    width: 100%;
    height: 309px;
    top:0,
    border-radius: 4px;
    :hover, :focus{
        cursor: pointer;
    }
    `
    : `display: none;`
    }
`

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    p{
        margin: 0;
        hyphens: auto;
        text-overflow:ellipsis;
        position: relative;
        font-size: small;
        padding: 0 5%;
    }
    background-color: rgba(125,125,125,0.8);    
`