import React from 'react'
import CommentForm from './CommentForm'
import { Button } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import { CardComment } from '../../components/CardComment/CardComment'
import useRequestData from '../../hooks/useRequestData'
import {Container} from './style'

export default function CommentsPage() {
    
    const history = useHistory()

    const { postId } = useParams()

    const commentsList = useRequestData([],`/posts/${postId}/comments`,localStorage.getItem('token'))

    const displayComments = commentsList.map((item)=>{
        return (
            <CardComment
            itemData={item}
            />
        )
    })

    return(
        <Container>
            <Button onClick={(()=>history.goBack())}>Voltar</Button>
            <h3>Comments Page | {postId}</h3>
            <CommentForm postId={postId}/>
            {displayComments}
        </Container>
    )
}