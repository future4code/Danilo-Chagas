import React , { useState } from 'react'
import { useLayoutEffect } from 'react'
import { CardPost } from '../../components/CardPost/CardPost'
import useRequestData from '../../hooks/useRequestData'
import PostForm from './PostForm'
import {Container} from './style'

export default function FeedPage() {
    
    const [ isLoading , setIsLoading ] = useState(false)

    const postsList = useRequestData([],'/posts?page=1&size=40', localStorage.getItem('token'))
    console.log(postsList)
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
            {displayPosts}
        </Container>
    )
}