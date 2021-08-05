import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { postCreatePost } from '../../endpoints/endpoints'
import CircularProgress from '@material-ui/core/CircularProgress'

const PostForm = () => {

    const { input, onChangeInput, cleanFields } = useForm({
        title: "",
        body: ""
    })

    const history = useHistory()

    const [isLoading, setIsLoading] = useState(false)

    const token = localStorage.getItem('token')

    const submitPost = (e) => {
        e.preventDefault()
        postCreatePost(input, token, cleanFields, history, setIsLoading)
    }

    return (
        <form onSubmit={submitPost}>
        <TextField
            name={"title"}
            type={"text"}
            value={input.title}
            onChange={onChangeInput}
            title={"Insira um título"}
            required
            id="outlined-required"
            label="Título da Postagem"
            variant="outlined"
        />
        <TextField
            name={"body"}
            type={"text"}
            value={input.body}
            onChange={onChangeInput}
            title={"Escreva aqui sobre sua postagem"}
            required
            id="outlined-required"
            label="texto"
            variant="outlined"
        />
        {isLoading ?
            <CircularProgress /> :
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >Postar</Button>
        }

    </form>
    )

}

export default PostForm