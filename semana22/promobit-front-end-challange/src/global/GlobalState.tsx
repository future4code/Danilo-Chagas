import { useState, useLayoutEffect } from "react"
import GlobalStateContext from "./GlobalStateContext"
import getGenreList from "../services/getGenreList"
import getMoviesList from "../services/getMoviesList"
import { goToHome, goToPage } from "../routes/coordinator"
import { useHistory } from "react-router"

const GlobalState = (props: any) => {

    const [genreList, setGenreList] = useState("")
    const [moviesList, setMoviesList] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, setFilter] = useState({
        sortBy: "popularity.desc",
        genres: [18,28,13]
    })
    const history = useHistory()

    useLayoutEffect(() => {
        getGenreList()
            .then(res =>
                setGenreList(res)
            )
            .catch(err => {
                window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
            })
        if (isNaN(currentPage)) {
            goToPage(history, 1)
        }
        getMoviesList(currentPage,filter.sortBy,filter.genres)
            .then(res =>
                setMoviesList(res)
            )
            .catch(err => {
                window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
            })
    }, [currentPage])


    const states = { genreList, moviesList, currentPage , filter}
    const setters = { setMoviesList, setCurrentPage , setFilter}
    // const requests = { }
    // const functions = { }

    return (
        <GlobalStateContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState