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
`
export const PaginationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-areas: ". pagination resultsInfo";
    align-items: center;
    width: 100%;
    #pagination{
        grid-area: pagination;
        justify-self: center;
    };
    #resultsInfo{
        grid-area: resultsInfo;
        justify-self: end;
        margin-right: 8%;
        color:${COLOR.GRAY_MIDDLE}
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