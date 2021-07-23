import React from 'react'
import { Container } from './style'
import LoginForm from './LoginForm'

export default function LoginPage() {

    return <Container>

        <h6>Login Page</h6>

        <LoginForm />

        <p>Não tem uma conta? &nbsp;
            <a href='/signup'>
                Crie aqui!</a></p>

    </Container>
}