import styled from "styled-components";
import COLOR from "../../constants/colors";
import fluidFontSize from "../../services/fluidFontSize";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 20vmin;
    background-color: ${COLOR.BLUE_DARK};
`

export const Logo = styled.h2`
    margin: auto;
    font-size: ${fluidFontSize(24, 32)};
    color: ${COLOR.YELLOW};
    cursor: pointer;
`