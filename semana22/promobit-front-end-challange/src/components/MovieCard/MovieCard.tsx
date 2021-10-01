import { Container } from "./style";

export default function MovieCard() {
    return (
        <Container>
            <img loading={"lazy"} alt={"movie cover"}/>
            <h3 className={"title"}>Título</h3>
            <h4 className={"gender"}>Gênero</h4>
            <h5 className={"launch"}>Lançamento</h5>
        </Container>
    )
}