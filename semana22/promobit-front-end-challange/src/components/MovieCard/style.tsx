import styled from 'styled-components'
import COLOR from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-width: 248px;
    width: 24vmin;
    height: 48vmin;
    border: 1px solid ${COLOR.GRAY_LIGHT};
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    *{
        margin:0;
        padding:0
    };
    img{
        object-fit: contain;
        width: 100%;
        min-height: 68%;
        background-color: blue;
    }
    .title{
        flex-grow: 1;
        display: flex;
        align-items: center;
        width: 84%;
    }
    .gender{
        width: 84%;
    }
    .launch{
        width: 84%;
        margin-bottom: 4% ;
    }
`