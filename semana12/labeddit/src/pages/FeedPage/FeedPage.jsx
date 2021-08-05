import React , { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardPost } from '../../components/CardPost/CardPost'
import Loading from '../../components/Loading/Loading'
import PaginationControlled from '../../components/Pagination/Pagination'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import PostForm from './PostForm'
import {Container} from './style'

export default function FeedPage() {
    useProtectedPage()

    const token = localStorage.getItem('token')

    const [ isLoading , setIsLoading ] = useState(false)
    const {pageNumber} = useParams()

    const postsList = useRequestData([],`/posts?page=${pageNumber}&size=20`, token, setIsLoading)

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
            <PaginationControlled page={pageNumber}/>
            {isLoading ? <Loading/> : displayPosts}
            <PaginationControlled page={pageNumber}/>
        </Container>
    )
}