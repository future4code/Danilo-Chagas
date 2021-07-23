import React , { useState } from 'react'
import { useLayoutEffect } from 'react'
import { CardPost } from '../../components/CardPost/CardPost'
import useRequestData from '../../hooks/useRequestData'
import {Container} from './style'

export default function FeedPage() {
    
    const [ isLoading , setIsLoading ] = useState(false)

    const postsList = useRequestData([],'/posts', localStorage.getItem('token'))

    // const displayPosts = postsList.map((item)=>{
    //     return (
    //         <CardPost
            
    //         />
    //     )
    // })

    return(
        <Container>
            <h3>Feed Page</h3>
        </Container>
    )
}