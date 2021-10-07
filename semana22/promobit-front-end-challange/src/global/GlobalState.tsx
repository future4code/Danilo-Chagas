import { useState, useLayoutEffect, useEffect } from "react"
import GlobalStateContext from "./GlobalStateContext"
import getGenreList from "../services/getGenreList"
import getMoviesList from "../services/getMoviesList"
import { goToHome, goToPage } from "../routes/coordinator"
import { useHistory } from "react-router"
import getSearchMovies from "../services/getSearchMovies"

const GlobalState = (props: any) => {

    const [genreList, setGenreList] = useState("")
    const [moviesList, setMoviesList] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, setFilter] = useState({
        sortBy: "popularity.desc",
        genresId: []
    })
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [querySearch, setQuerySearch] = useState<string>("")

    const history = useHistory()

    useEffect(() => {
        if (!genreList) {
            getGenreList()
                .then(res =>
                    setGenreList(res)
                )
                .catch(err => {
                    window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
                })
        }

        if (isNaN(currentPage)) {
            goToPage(history, 1)
        }

        if (!isSearching) {
            getMoviesList(currentPage, filter.sortBy, filter.genresId)
                .then(res =>
                    setMoviesList(res)
                )
                .catch(err => {
                    window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
                })
        }

        if (isSearching) {
            getSearchMovies(currentPage, querySearch)
                .then(res =>
                    setMoviesList(res)
                )
                .catch(err => {
                    window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
                })
        }
    }, [currentPage, filter, isSearching])


    const states = { genreList, moviesList, currentPage, filter, isSearching, querySearch }
    const setters = { setMoviesList, setCurrentPage, setFilter, setIsSearching, setQuerySearch }
    // const requests = { }
    // const functions = { }

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState