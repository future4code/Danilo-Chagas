import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import MovieCard from "../MovieCard/MovieCard";
import { Container } from "./style";

export default function MoviesList() {

    const { states } = useContext(GlobalStateContext)
    const { genreList, moviesList } = states

    const displayMovies = !moviesList ?
        <span>Loading...</span> :
        moviesList.results.map((item: any) => {
        
            const genres: string[] = []

            item.genre_ids.forEach((id: number) => {
                const genre = genreList.find((item: any) => Number(item.id) === Number(id))
                return genres.push(genre.name)
            })

            return <MovieCard key={item.id} item={item} genres={genres} />
        
        })

    return (
        <Container>
            {displayMovies}
        </Container>
    )
}