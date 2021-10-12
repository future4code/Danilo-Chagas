import { useState, useEffect } from "react"
import GlobalStateContext from "./GlobalStateContext"
import getGenreList from "../services/getGenreList"
import getMoviesList from "../services/getMoviesList"
import { goToPage } from "../routes/coordinator"
import { useHistory } from "react-router"
import getSearchMovies from "../services/getSearchMovies"
import { DEFAULT_GENRES } from "../constants/defaultGenres"
import { genres } from "../models/genresList"

const GlobalState = (props: any) => {

    const initialFilterState = {
        sortBy: "popularity.desc",
        genresId: []
    }

    const [genreList, setGenreList] = useState<genres[]>(DEFAULT_GENRES)
    const [moviesList, setMoviesList] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, setFilter] = useState(initialFilterState)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [querySearch, setQuerySearch] = useState<string>("")

    const history = useHistory()

    function resetFilterState() {
        return setFilter(initialFilterState)
    }

    useEffect(() => {
        if (!genreList) {
            getGenreList()
                .then(res =>
                    setGenreList(res)
                )
                .catch(() => {
                    window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
                    setGenreList(DEFAULT_GENRES)
                })
        }

        if (isNaN(currentPage)) {
            goToPage(history, 1)
        }

        if (!isSearching) {
            getMoviesList(currentPage, filter.sortBy, filter.genresId)
                .then(res => {
                    setMoviesList(res)
                })
                .catch(() => {
                    window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
                })
        }

        if (isSearching) {
            getSearchMovies(currentPage, querySearch)
                .then(res =>
                    setMoviesList(res)
                )
                .catch(() => {
                    window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
                })
        }
    }, [currentPage, filter, isSearching])


    const states = { genreList, moviesList, currentPage, filter, isSearching, querySearch }
    const setters = { setMoviesList, setCurrentPage, setFilter, setIsSearching, setQuerySearch }
    // const requests = { }
    const functions = { resetFilterState }

    return (
        <GlobalStateContext.Provider value={{ states, setters, functions }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState