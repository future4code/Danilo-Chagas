import styled from 'styled-components'
import COLOR from '../../constants/colors'

export const ActorCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 200px;
    aspect-ratio: 3/4;
    margin-top: 2%;
    border-radius: 4px;
    *{
        margin: 0;
        padding: 0;
    }
    img{
        object-fit: cover;
        height: 200px;
        aspect-ratio: 3/4;
        background-color: ${COLOR.GRAY_LIGHT};
        box-shadow: 1px 1px 4px;
        border-radius: 4px;
    }
    .name{
        width: 92%;
        margin: 2% 0 0 0;
        text-align: center;
        font-size: medium;
    }
    .character{
        width: 92%;
        font-size: small;
        text-align: center;
    }
`