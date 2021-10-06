import { useContext, useLayoutEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPage } from "../../routes/coordinator";
import MovieCard from "../MovieCard/MovieCard";
import PaginationControlled from "../Pagination/Pagination";
import NoContent from "../NoContent/NoContent"
import { Container, MoviesContainer } from "./style";

export default function MoviesList() {

    const { states, setters } = useContext(GlobalStateContext)
    const { genreList, moviesList } = states
    const { setCurrentPage } = setters
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
    }, [genreList, page])

    const displayMovies = !moviesList ?
        <span>Loading...</span> :
        moviesList?.total_results <= 0 ?
            <NoContent /> :
            moviesList.results.map((item: any) => {

                const genres: string[] = []

                item.genre_ids.forEach((id: number) => {
                    const genre = genreList.find((item: any) => Number(item.id) === Number(id))
                    return genres.push(genre.name)
                })

                return <MovieCard key={item.id} item={item} genres={genres} />

            })

    const displayPagination = (position: "top" | "botton") => moviesList.total_results > 0 && <PaginationControlled position={position} totalPages={moviesList.total_pages} page={page} />

    return (
        <Container>
            {displayPagination("top")}
            <MoviesContainer>
                {displayMovies}
            </MoviesContainer>
            {displayPagination("botton")}
        </Container>
    )
}