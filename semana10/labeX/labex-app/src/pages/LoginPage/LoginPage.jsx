import React, { useState } from 'react'
import { postLogin } from '../../component/Endpoint/Endpoint.jsx'
import { useHistory } from 'react-router';
import { Container } from '../HomePage/style';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default function LoginPage() {

    const [input, setInput] = useState({
        email:"",
        password:""
    })

    function onChangeInput(e) {
        setInput({...input,[e.target.name]: e.target.value})
    }

    const history = useHistory()

    function onClickSubmitButton () {
        const response = postLogin({data: input})
        setInput({email:"",password:""})
        response ? history.push("/login") : alert("Falha ao efetuar login.\nTente novamente")
    }

    return <Container>
        <h6>Login Page</h6>
        <TextField
            required
            id="outlined-required"
            label="e-mail"
            variant="outlined"
            onChange={onChangeInput}
            name={"email"}
            value={input.email}
        />
        <TextField
            id="outlined-password-input"
            label="senha"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={onChangeInput}
            name={"password"}
            value={input.password}
        />
        <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={()=>onClickSubmitButton()}
          >Entrar</Button>
    </Container>
}