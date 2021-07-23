import React from 'react'
import { TextField , Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { Container, Link } from './style'

export default function LoginPage() {
    const { input, onChangeInput, cleanFields } = useForm({
        email: "",
        password: ""
    })

    const history = useHistory()

    const submitLogin = (e) => {
        e.preventDefault()
        console.log(input)
        cleanFields()
    }

    return <Container>
        <h6>Login Page</h6>
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
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >Entrar</Button>

            <p>Não tem uma conta? &nbsp;
                <Link href='/signup'>
                    Crie aqui!</Link></p>

        </form>
    </Container>
}