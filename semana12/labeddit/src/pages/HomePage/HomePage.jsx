import React from 'react'
import { Button } from '@material-ui/core'
import { goToSignUpPage } from '../../router/coordinator'
import {Container} from './style'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
    const history  = useHistory()
    return(
        <Container>
            <h3>Home Page</h3>
            <Button
            onClick={()=>goToSignUpPage(history)}
            >Criar conta</Button>
        </Container>
    )
}