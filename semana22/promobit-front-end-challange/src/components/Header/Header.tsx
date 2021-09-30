import { useHistory } from "react-router";
import { goToHome } from "../../routes/coordinator";
import Login from "../Login/Login";
import { Container, Logo } from "./style";

export default function Header() {

    const history = useHistory()

    return (
        <Container>
            <Login/>
            <Logo onClick={() => goToHome(history)}>Header</Logo>
        </Container>
    )
}