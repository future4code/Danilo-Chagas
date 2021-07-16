import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useHistory, useParams } from 'react-router'
import useTripDetail from '../../hooks/useTripDetail'
import { Container } from './style'

export default function TripDetailPage() {
    const list = useTripDetail(localStorage.getItem("token"), tripId)
    const history = useHistory()
    const tokenVerify = useProtectedPage()
    const { tripId } = useParams()
    const { name, planet, id, durationInDays, date, description } = list[0].trip

        if (tokenVerify) {
            return <Container>
                <button onClick={() => history.push("/admin")}>voltar</button>
    
                <div className={"container-trip-detail"}>
                    <h4>Viagen: {name}</h4>
                    <p>Planeta: {planet} | Duração: {durationInDays} dias</p>
                    <p>Data: {date} | ID: {id}</p>
                    <p>Descrição: {description}</p>
    
                </div>
    
                <div className={"container-pending-candidates"}>
                    Candidatos pendentes de aprovação:
                    {list[0].trip.id ?
                        list[0].trip.candidates.map((item) => {
                            return <div key={item.id}>
                                {item.name}
                                {item.age}
                                {item.profession}
                                </div>
                        })
                        :
                        <p>carregando...</p>
                    }
                </div>
    
    
            </Container>
        } else {
            return <Container>
                <h6>Exibição não autorizada</h6>
                <h6>Faça login</h6>
            </Container>
        }
    
}