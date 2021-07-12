import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './style.jsx'
import { Button } from '@material-ui/core';

function TripCardCustomer(props) {

    const history = useHistory()
    
    function onClickApply (id) {
        history.push(`trips/${id}/apply-form`)
    }

    const { id, name, description, planet, durationInDays, date } = props.trip

    return <Container>
        <h4>{name}</h4>
        <p><b>Planeta:</b> {planet}</p>
        <p><b>Data:</b> {date}</p>
        <p><b>Duração:</b> {durationInDays} dias</p>
        <p><b>Descrição:</b> {description}</p>
        <Button
            onClick={()=>onClickApply(id)}
            variant="contained"
            color="primary"
        >candidarta-se</Button>
    </Container>
}

export default TripCardCustomer