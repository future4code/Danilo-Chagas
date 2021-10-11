import Login from "../Login/Login";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import { Container, ContainerRow, DecoratorLine } from "./style";

export default function Header() {

    return (
        <Container>
            <DecoratorLine/>
            <ContainerRow>
                <Logo />
                <Search />
                <Login />
            </ContainerRow>
        </Container>
    )
}