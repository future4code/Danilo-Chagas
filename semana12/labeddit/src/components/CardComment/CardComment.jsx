import React from 'react'
import { useHistory } from 'react-router-dom'
import { postCreateCommentVote, putChangeCommentVote, delCommentVote} from '../../endpoints/endpoints'
import { ContainerCard, ContainerColumn, ContainerRow } from './style'

export const CardComment = (props) => {

    const { id, body, createdAt, userId, postId, voteSum, userVote } = props.itemData

    const history = useHistory()
    
    const token = localStorage.getItem('token')
    
    const postCommentVote = (commentId, directionValue) => {
        const vote = {'direction': directionValue}
        if (!userVote) {
            postCreateCommentVote(commentId, token, vote, history)
        } else if (userVote !== directionValue) {
            putChangeCommentVote(commentId, token, vote, history)
        } else {
            delCommentVote(commentId, token, history)
        }
    
    }
    
    const voteHighLight = !userVote ? '0' : userVote

    return (
        <ContainerCard>
         <ContainerColumn>
                <p>Votar</p>
                <p onClick={() => postCommentVote(id,1)}>+1</p>
                votos {voteSum}
                <p onClick={() => postCommentVote(id,-1)}>-1</p>
                <br/><br/>
                voto do usuario<p>{voteHighLight}</p>
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