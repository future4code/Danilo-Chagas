import Filter from "../../components/Filter/Filter";
import MoviesList from "../../components/MoviesList/MoviesList";
import { Container } from "./style";

export default function Home() {
    return <Container>
        <Filter />
        <MoviesList />
    </Container>
}