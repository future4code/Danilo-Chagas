import React from 'react'
import CommentForm from './CommentForm'
import Loading from '../../components/Loading/Loading'
import { Button } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import { CardComment } from '../../components/CardComment/CardComment'
import useRequestData from '../../hooks/useRequestData'
import {Container} from './style'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useState } from 'react'

export default function CommentsPage() {
    
    useProtectedPage()

    const history = useHistory()

    const { postId } = useParams()

    const [ isLoading , setIsLoading ] = useState(false)

    const commentsList = useRequestData([],`/posts/${postId}/comments`,localStorage.getItem('token'), setIsLoading)

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
            {isLoading ? <Loading/> : displayComments.length>0 ? displayComments : <h1>Seja o primeiro a comentar!</h1>}
        </Container>
    )
}