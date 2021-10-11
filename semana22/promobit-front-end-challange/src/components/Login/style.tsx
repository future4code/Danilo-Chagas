import styled from "styled-components";
import COLOR from "../../constants/colors";
import fluidFontSize from "../../services/fluidFontSize";

export const Container = styled.div`
    justify-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2% 0 2%;
    p{
        margin: 0.8vmin 0.8vmin 0.8vmin 0;
        font-size: ${fluidFontSize(16, 16)};
        font-weight: 400;
        text-decoration: none;
        cursor: pointer;
        color: ${COLOR.YELLOW};
        span{
            color: ${COLOR.GRAY_LIGHT};
        }
    }
    @media(max-width: 600px){
        display: none;
    }
`