import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { postLogin } from '../../endpoints/endpoints'
import { Container } from './style'
import CircularProgress from '@material-ui/core/CircularProgress'

export default function LoginForm() {
    const { input, onChangeInput, cleanFields } = useForm({
        email: "",
        password: ""
    })

    const history = useHistory()

    const [isLoading, setIsLoading] = useState(false)

    const submitLogin = (e) => {
        e.preventDefault()
        postLogin(input, cleanFields, history, setIsLoading)
    }

    return <Container>

        <form onSubmit={submitLogin}>
            <TextField
                name={"email"}
                type={"email"}
                value={input.email}
                onChange={onChangeInput}
                title={"Insira o seu e-mail cadastrado."}
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
                title={"Insira sua senha cadastrada. Máximo de 6 caracteres"}
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
                >Entrar</Button>
            }

        </form>

    </Container>
}