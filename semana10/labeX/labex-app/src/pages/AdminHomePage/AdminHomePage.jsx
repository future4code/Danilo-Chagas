import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './style.jsx'


export default function AdminHomePage () {

    const history = useHistory()

    return <Container>
        <h6>Admin Home</h6>
        <button
        onClick={()=>history.push("/admin/create-trip")}
        >Criar Viagem</button>
        </Container>
}