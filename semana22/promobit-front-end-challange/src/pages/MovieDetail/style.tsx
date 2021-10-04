import styled from 'styled-components'

export const Container = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    width: 100%;
    /* height: 50vh; */
    margin: auto;
    padding: 0 2% 2% 2%;
`

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 5vh;
    .go-back{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

export const RowContainer = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    margin: auto;
`
export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin: auto;
`

export const Poster = styled.div`
    width: 400px;
    overflow: hidden;
    border-radius: 10px;
    background-color: gray;
    .poster{
        width: 100%;
        aspect-ratio: 2/3;
        object-fit: contain;
        object-position: center;
    }
`

export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    /* height: 64vh; */
    margin: 0 0 0 2%;
    *{
        margin: 0;
        padding: 0;
    };
    .title{};
    .launch{};
    .subgender{
        display: flex;
        gap:2%;
        width: 100%;
    };
    .tagline{
        width: 100%;
    };
    .synopsis{
        flex-grow: 1;
        margin-top: 2%;
    };
`

export const Cast = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    /* gap:1%; */
    width: 100%;
    height: fit-content;
    margin: 2% 0 0 0;
    /* overflow: hidden; */
    overflow-x: scroll;
    scrollbar-width: thin;
    background-color: gray;

`

export const VideoContainer = styled.video`
    width: 50%;
    aspect-ratio: 16/9;
    margin-left: 4%;
`