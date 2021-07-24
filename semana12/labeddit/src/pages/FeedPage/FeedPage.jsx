import React , { useState } from 'react'
import { CardPost } from '../../components/CardPost/CardPost'
import Loading from '../../components/Loading/Loading'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import PostForm from './PostForm'
import {Container} from './style'

export default function FeedPage() {
    useProtectedPage()
    const [ isLoading , setIsLoading ] = useState(false)

    const postsList = useRequestData([],'/posts?page=1&size=40', localStorage.getItem('token'), setIsLoading)

    const displayPosts = postsList.map((item)=>{
        return (
            <CardPost
            itemData={item}
            />
        )
    })

    return(
        <Container>
            <h3>Feed Page</h3>
            <PostForm/>
            {isLoading ? <Loading/> : displayPosts}
        </Container>
    )
}