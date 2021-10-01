import styled from "styled-components";
import COLOR from "../../constants/colors";
import fluidFontSize from "../../services/fluidFontSize";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: fit-content;
    background-color: ${COLOR.BLUE_DARK};
`
export const DecoratorLine = styled.div`
    width: 100%;
    height: 0.4vmin;
    background-color: ${COLOR.YELLOW};
`

export const ContainerRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    align-items: center;
    width: 100%;
    margin: 1vmin 0;
`