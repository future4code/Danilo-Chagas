import React from 'react'
import { useHistory } from 'react-router-dom'
import { ContainerCard, ContainerColumn, ContainerRow } from './style'

export const CardComment = (props) => {

    const { id, body, createdAt, userId, postId, voteSum, userVote } = props.itemData

    const history = useHistory()

    return (
        <ContainerCard>
            <ContainerColumn>
                <p>Votar</p>
                {voteSum}
            </ContainerColumn>
            <ContainerColumn>
                <ContainerRow>
                    <p>{userId} , {createdAt}</p>
                </ContainerRow>
                <p>{body}</p>
            </ContainerColumn>


        </ContainerCard>
    )
}