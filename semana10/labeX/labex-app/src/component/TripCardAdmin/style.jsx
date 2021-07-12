import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    min-height: fit-content;
    width: 32%;
    height: 32%;
    border: 1px solid lightgray;
    *{
        margin: 0;
        padding: 0;

    }
    .container-buttons{
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
        width: 100%;
    }
`