import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { goToLoginPage } from '../../router/coordinator'
import { Container } from './style'

export default function SignUpPage() {
    const { input, onChangeInput, cleanFields } = useForm({
        username: "",
        email: "",
        password: ""
    })

    const history = useHistory()

    const submitSignUp = (e) => {
        e.preventDefault()
        cleanFields()
    }

    return <Container>
        <h6>Sign up Page</h6>
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
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >Cadastrar</Button>

            <p>Já possui uma conta? &nbsp;
                <a onClick={() => goToLoginPage(history)}>
                    Entre aqui!</a></p>
        </form>
    </Container>
}