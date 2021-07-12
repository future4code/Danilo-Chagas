import React from 'react'
import { useHistory } from 'react-router';
import { delDeleteTrip } from '../../Endpoint/Endpoint.jsx';
import { Container } from './style.jsx'
import { Button } from '@material-ui/core';

function TripCardAdmin(props) {
    const { id, name, planet} = props.trip

    const history = useHistory()

    function onClickDetail(id) {
        history.push(`/admin/trip-detail/${id}`)
    }

    function onClickDelete(tripId) {
        if (window.confirm(`Confirma exlusão da viagem ${name}?`)) {
            const response = delDeleteTrip(localStorage.getItem("token"), tripId)
            if (response) {
                alert("Viagen excluída com sucesso")
                setTimeout(()=>{history.go(0)},1000)
            }
        }
    }

    return <Container>
        <h4>{name}</h4>
        <p><b>Planeta:</b> {planet}</p>
        <div className={"container-buttons"}>
            <Button
                onClick={() => onClickDetail(id)}
                variant="contained"
                color="primary"
            >Detalhes</Button>

            <Button
                onClick={() => onClickDelete(id)}
                variant="contained"
                color="primary"
            >Deletar</Button>
        </div>
    </Container>
}

export default TripCardAdmin