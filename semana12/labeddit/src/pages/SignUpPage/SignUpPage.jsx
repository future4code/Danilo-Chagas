import React from 'react'
import SignUpForm from './SignUpForm'
import { Container } from './style'

export default function SignUpPage() {

    return <Container>
        <h6>Sign up Page</h6>
        <SignUpForm />
        <p>Já possui uma conta? &nbsp;
            <a href='/login'>
                Entre aqui!</a></p>
    </Container>
}