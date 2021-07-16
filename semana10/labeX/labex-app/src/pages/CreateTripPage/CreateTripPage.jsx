import React from 'react'
import { useHistory } from 'react-router'
import useProtectedPage from '../../hooks/useProtectedPage'
import {Container} from './style'

export default function CreateTripPage () {
    const history = useHistory()
    const tokenVerify = useProtectedPage()
    if (tokenVerify) {
        return <Container>
            <h6>Criar Viagem</h6>
            <button onClick={()=>history.goBack()}>Voltar</button>
        </Container>
    } else {
        return <Container>
            <h6>Exibição não autorizada</h6>
        </Container>
    }
}