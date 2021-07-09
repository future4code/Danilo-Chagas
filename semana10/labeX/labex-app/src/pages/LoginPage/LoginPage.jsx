import React from 'react'
import { postLogin } from '../../component/Endpoint/Endpoint.jsx'
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm'
import { Container } from './style';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default function LoginPage() {

    const {input , onChangeInput, cleanFields} = useForm({
        email: "",
        password: ""
    })

    const history = useHistory()

    const submitLogin = (e) => {
        e.preventDefault()
        const response = postLogin(input)
        cleanFields()
        setTimeout(()=>{
        response && localStorage.getItem("token") ?
        history.push("/admin") : history.push("/admin/login")},
        2000)
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
                pattern={"^.{6,}"}
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
        </form>
    </Container>
}