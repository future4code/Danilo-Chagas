import React from 'react'
import { useHistory } from 'react-router-dom'
import { postCreatePostVote, putChangePostVote, delPostVote } from '../../endpoints/endpoints'
import { goToCommentsPage } from '../../router/coordinator'
import { ContainerCard, ContainerColumn, ContainerRow } from './style'

export const CardPost = (props) => {

    const { id, body, title, createdAt, userId, voteSum, commentCount, userVote, username } = props.itemData

    const history = useHistory()
    
    const token = localStorage.getItem('token')
    
    const postVote = (postId, directionValue) => {
        const vote = {'direction': directionValue}
        if (!userVote) {
            postCreatePostVote(postId, token, vote, history)
        } else if (userVote !== directionValue) {
            putChangePostVote(postId, token, vote, history)
        } else {
            delPostVote(postId, token, history)
        }
    
    }

    const voteHighLight = !userVote ? '0' : userVote

    return (
        <ContainerCard>
            <ContainerColumn>
                <p>Votar</p>
                <p onClick={() => postVote(id,1)}>+1</p>
                votos {voteSum}
                <p onClick={() => postVote(id,-1)}>-1</p>
                <br/><br/>
                voto do usuario<p>{voteHighLight}</p>
            </ContainerColumn>
            <ContainerColumn>
                <ContainerRow>
                    <p>{username} , {createdAt}</p>
                </ContainerRow>
                <h5>{title}</h5>
                <p>{body}</p>
                <ContainerRow>
                    <p
                        onClick={() => goToCommentsPage(history, id)}>
                        Comentários {commentCount}</p>
                    <p>Compartilhar</p>
                </ContainerRow>
            </ContainerColumn>


        </ContainerCard>
    )
}