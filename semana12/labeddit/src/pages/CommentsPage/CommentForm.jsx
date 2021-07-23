import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { postCreateComment } from '../../endpoints/endpoints'
import CircularProgress from '@material-ui/core/CircularProgress'

const PostForm = (props) => {
    
    const { input, onChangeInput, cleanFields } = useForm({
        body: ""
    })

    const history = useHistory()

    const [isLoading, setIsLoading] = useState(false)

    const token = localStorage.getItem('token')

    const submitComment = (e) => {
        e.preventDefault()
        postCreateComment(props.postId, input, token, cleanFields, history, setIsLoading)
    }

    return (
        <form onSubmit={submitComment}>

        <TextField
            name={"body"}
            type={"text"}
            value={input.body}
            onChange={onChangeInput}
            title={"Escreva aqui seu comentário."}
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