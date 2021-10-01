import { useHistory } from "react-router";
import { Container } from "./style";

export default function Login() {

    const history = useHistory()

    return (
        <Container>
            <p>entre <span>ou</span> cadastra-se</p>
        </Container>
    )
}