import styled from 'styled-components'
import COLOR from '../../constants/colors'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 2%;
    width: 100%;
    min-height: 100%;
    align-self: flex-start;
`
export const PaginationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-areas: "resultsInfo pagination currentPage";
    align-items: center;
    width: 100%;
    #resultsInfo{
        grid-area: resultsInfo;
        justify-self: center;
        margin-left: 8%;
        color:${COLOR.GRAY_MIDDLE}
    }
    #pagination{
        grid-area: pagination;
        justify-self: center;
    };
    #currentPage{
        grid-area: currentPage;
        justify-self: center;
        margin-right: 8%;
        color:${COLOR.GRAY_MIDDLE}
    };
    @media(max-width: 1200px){
        display: flex;
        flex-direction: column;
        margin: 4%;
        #resultsInfo{
            margin: auto auto
        }
        #currentPage{
            margin: auto auto
        };
    }
`

export const MoviesContainer = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4vmin 4%;
    width: 100%;
`