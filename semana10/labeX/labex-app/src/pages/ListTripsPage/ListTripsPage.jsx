import React from 'react'
// import { useHistory } from 'react-router'
import useTripList from '../../hooks/useTripList'
import TripCardCustomer from '../../component/TripCardCustomer/TripCardCustomer'
import { Container, ContainerList } from './style.jsx'

export default function ListTripsPage() {
    const list = useTripList()
    // const history = useHistory()


    return <Container>
        <h3>Viagens</h3>
        <ContainerList>
            {list && list.trips.length === 0 ? <h1>sem viagens no momento</h1>
            :
            list ? 
                list.trips.map((item) => {
                    return <TripCardCustomer key={item.id} trip={item} />
                })
                :
                <p>Aguarde um momento</p>}
        </ContainerList>
    </Container>
}