import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToCommentsPage } from '../../router/coordinator'
import { ContainerCard, ContainerColumn, ContainerRow } from './style'

export const CardPost = (props) => {

    const { id, body, title, createdAt, userId, voteSum, commentCount, userVote, username } = props.itemData

    const history = useHistory()

    return (
        <ContainerCard>
            <ContainerColumn>
                <p>Votar</p>
                {voteSum}
            </ContainerColumn>
            <ContainerColumn>
                <ContainerRow>
                    <p>{username} , {createdAt}</p>
                </ContainerRow>
                <h5>{title}</h5>
                <p>{body}</p>
                <ContainerRow>
                    <p
                    onClick={()=>goToCommentsPage(history,id)}>
                        Comentários {commentCount}</p>
                    <p>Compartilhar</p>
                </ContainerRow>
            </ContainerColumn>


        </ContainerCard>
    )
}