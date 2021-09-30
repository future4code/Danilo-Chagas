import styled from "styled-components";
import COLOR from "../../constants/colors";
import fluidFontSize from "../../services/fluidFontSize";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    min-width: 100%;
    background-color: ${COLOR.YELLOW};
    p{
        margin: 0.8vmin 0.8vmin 0.8vmin 0;
        font-size: ${fluidFontSize(16,16)};
        font-weight: 400;
        text-decoration: none;
        cursor: pointer;
    }
`