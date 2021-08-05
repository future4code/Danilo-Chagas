import { Button } from '@material-ui/core'
import React from 'react'
import { Container } from './style'
import { goToLoginPage, goToHomePage } from '../../router/coordinator'
import { useHistory } from 'react-router-dom'

export default function Header () {
    const history = useHistory()
    return (
        <Container>
            <h4
            onClick={()=>goToHomePage(history)}
            >Header</h4>
            <Button
            onClick={()=>goToLoginPage(history)}
            >Entrar</Button>
        </Container>
    )
}