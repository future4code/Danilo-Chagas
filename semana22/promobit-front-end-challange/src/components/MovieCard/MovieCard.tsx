import { useHistory } from "react-router";
import { goToMovieDetail } from "../../routes/coordinator";
import { Container } from "./style";

export default function MovieCard() {
    
    const history = useHistory()

    return (
        <Container
        onClick={()=> goToMovieDetail(history,"here-goes-movie-Id")}
        >
            <img loading={"lazy"} alt={"movie cover"}/>
            <h3 className={"title"}>Título</h3>
            <h4 className={"gender"}>Gênero</h4>
            <h5 className={"launch"}>Lançamento</h5>
        </Container>
    )
}