import useProtectedPage from '../../hooks/useProtectedPage.jsx'
import { useHistory } from 'react-router-dom'
import { Container } from './style.jsx'


export default function AdminHomePage() {
    const history = useHistory()
    const tokenVerify = useProtectedPage()
    if (tokenVerify) {
        return <Container>
            <h6>Admin Home</h6>
            <button
                onClick={() => history.push("/admin/create-trip")}
            >Criar Viagem</button>
        </Container>
    } else {
        return <Container>
            <h6>Exibição não autorizada</h6>
        </Container>
    }
}