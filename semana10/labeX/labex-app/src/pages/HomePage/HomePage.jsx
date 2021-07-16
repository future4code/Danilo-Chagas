import React from 'react'
import { Container } from './style'
import { useHistory } from 'react-router-dom'

export default function HomePage () {
    
    const history = useHistory()

    const goToTrips = () => {
        history.push("/trips")
    }

    return <Container>
        <h6>Home Page</h6>
        <button
        onClick={goToTrips}
        >Eu quero essa experiência incrível</button>
        </Container>
}