import { useContext, useLayoutEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPage } from "../../routes/coordinator";
import getMoviesList from "../../services/getMoviesList";
import MovieCard from "../MovieCard/MovieCard";
import PaginationControlled from "../Pagination/Pagination";
import { Container, MoviesContainer } from "./style";

export default function MoviesList() {

    const { states, setters } = useContext(GlobalStateContext)
    const { genreList, moviesList } = states
    const { setMoviesList, setCurrentPage } = setters
    let { page } = useParams<{ page?: string | undefined }>()
    const history = useHistory()

    useLayoutEffect(() => {

        if (!page) {
            page = "1"
        } else if (isNaN(Number(page))) {
            goToPage(history, 1)
        } else {
            setCurrentPage(Number(page))
        }
    }, [genreList , page])

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
            <PaginationControlled page={page} />
            <MoviesContainer>
                {displayMovies}
            </MoviesContainer>
            <PaginationControlled page={page} />
        </Container>
    )
}