import React from 'react'
import { Container } from './style'

const Matches = (props) => {
    return (
        <Container>
            <h1>Matches</h1>
            <button
            onClick={props.switchPage}
            >matches</button>
        </Container>
    )
}

export default Matches