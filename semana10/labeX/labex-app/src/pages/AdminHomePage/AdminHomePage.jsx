import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage.jsx'
import { useHistory } from 'react-router-dom'
import { Container, ContainerList } from './style.jsx'
import useTripList from '../../hooks/useTripList.jsx'
import TripCardAdmin from '../../component/TripCardAdmin/TripCardAdmin.jsx'



function AdminHomePage() {
    const history = useHistory()
    const tokenVerify = useProtectedPage()
    const list = useTripList()

    if (tokenVerify) {
        return <Container>
            <h6>Admin Home</h6>
            <button onClick={() => history.push("/admin/trip/create")}>Criar Viagem</button>

            <ContainerList>
                {list && list.trips.length === 0 ? <p>sem viagens cadastradas</p>
                    :
                    list ? list.trips.map((item) => {
                        return <TripCardAdmin key={item.id} trip={item} refresh={useTripList} />
                    })
                        :
                        <p>carregando...</p>
                }

            </ContainerList>
        </Container>
    } else {
        return <Container>
            <h6>Exibição não autorizada</h6>
        </Container>
    }
}
export default AdminHomePage