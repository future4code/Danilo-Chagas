import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { Container } from './style'
import { postSignUp } from '../../endpoints/endpoints'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function SignUpPage() {
    const { input, onChangeInput, cleanFields } = useForm({
        username: "",
        email: "",
        password: ""
    })

    const history = useHistory()

    const [isLoading, setIsLoading] = useState(false)

    const submitSignUp = (e) => {
        e.preventDefault()
        postSignUp(input, cleanFields, history, setIsLoading)
    }

    return <Container>

        <form onSubmit={submitSignUp}>
            <TextField
                name={"username"}
                type={"text"}
                value={input.username}
                onChange={onChangeInput}
                title={"Insira um nome de usuário para identificação."}
                required
                id="outlined-required"
                label="nome de usuário"
                variant="outlined"
            />
            <TextField
                name={"email"}
                type={"email"}
                value={input.email}
                onChange={onChangeInput}
                title={"Insira o seu e-mail para cadastro."}
                required
                id="outlined-required"
                label="e-mail"
                variant="outlined"
            />
            <TextField
                name={"password"}
                type="password"
                value={input.password}
                onChange={onChangeInput}
                title={"Cadastre uma senha. Máximo de 6 caracteres"}
                pattern={"^.{6,}$"}
                required
                id="outlined-password-input"
                autoComplete="current-password"
                label="senha"
                variant="outlined"
            />
            {isLoading ?
                <CircularProgress /> :
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >Cadastrar</Button>
            }
        </form>
    </Container>
}