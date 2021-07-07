import React from 'react'
import { Container } from './style'
import { useHistory } from 'react-router-dom'

export default function Header () {

    const history = useHistory();

    const goToHome = () => {
        return history.push("/")
    }

    const goToLogin = () => {
        return history.push("/admin/login")
    }

    return <Container>

        <h6
        onClick={goToHome}
        >Logotipo</h6>

        <button
        onClick={goToLogin}
        >Login</button>

    </Container>
}