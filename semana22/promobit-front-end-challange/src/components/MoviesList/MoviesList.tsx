import { useContext, useLayoutEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToPage, goToSearch } from "../../routes/coordinator";
import MovieCard from "../MovieCard/MovieCard";
import PaginationControlled from "../Pagination/Pagination";
import NoContent from "../NoContent/NoContent"
import { Container, MoviesContainer, PaginationContainer } from "./style";
import { Button, Stack } from "@material-ui/core";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function MoviesList() {

    const { states, setters, functions } = useContext(GlobalStateContext)
    const { genreList, moviesList, isSearching } = states
    const { resetFilterState } = functions
    const { setCurrentPage, setIsSearching, setQuerySearch } = setters

    const pathParams = useParams<{ page?: string | undefined, encodedQuery?: string | undefined }>()
    const location = useLocation()
    const history = useHistory()

    function goToHomePage() {
        resetFilterState()
        setIsSearching(false)
        goToPage(history, 1)
    }

    useLayoutEffect(() => {
        if (!pathParams.page || isNaN(Number(pathParams.page))) {
            goToHomePage()
        } else if (!isSearching && location.pathname.includes("busca") && !!pathParams.encodedQuery) {
            resetFilterState()
            setIsSearching(true)
            setQuerySearch(pathParams.encodedQuery)
            goToSearch(history, Number(pathParams.page), encodeURI(pathParams.encodedQuery))
        } else {
            setCurrentPage(Number(pathParams.page))
        }

    }, [genreList, moviesList.page, pathParams.page, location])

    if (pathParams?.page && moviesList?.total_pages) {
        pathParams.page > moviesList?.total_pages && goToPage(history, 1)
    }

    if (!moviesList.results){
        return <NoContent />
    }

    const displayMovies = !moviesList ?
        <span>Loading...</span> :
        moviesList?.total_results <= 0 ?
            <NoContent /> :
            moviesList.results.map((item: any) => {

                const genres: string[] = []

                item?.genre_ids?.forEach((id: number) => {
                    const genre = !genreList ? [] : genreList?.find((item: any) => Number(item.id) === Number(id))
                    return genres.push(genre.name)
                })

                return <MovieCard key={item.id} item={item} genres={genres} />

            })

    const displayQuitSearch = () => {
        if (isSearching) {
            return <Stack my={2}>
                <Button
                    variant="outlined"
                    endIcon={<ExitToAppIcon />}
                    onClick={() => { resetFilterState(); goToHomePage() }}
                >sair da pesquisa</Button>
            </Stack>
        }
    }

    const displayPagination = (position: "top" | "botton") =>
        moviesList.total_results > 0 && <PaginationControlled
            id={"pagination"}
            position={position}
            totalPages={moviesList.total_pages}
            page={pathParams.page} />

    const displayResultsQuantity = moviesList.total_results > 0 &&
        <h5 id={"resultsInfo"}> exibindo&nbsp;
            {moviesList.results.length.toLocaleString("pt-br")}&nbsp;de&nbsp;
            {moviesList.total_results.toLocaleString("pt-br")}&nbsp;títulos
        </h5>

    const displayCurrentPage = moviesList.total_results > 0 &&
        <h5 id={"currentPage"}> Página atual:&nbsp;{pathParams.page}</h5>


    return (
        <Container>
            {displayQuitSearch()}
            <PaginationContainer>
                {displayResultsQuantity}
                {displayPagination("top")}
                {displayCurrentPage}
            </PaginationContainer>
            <MoviesContainer>
                {displayMovies}
            </MoviesContainer>
            {displayPagination("botton")}
        </Container>
    )
}