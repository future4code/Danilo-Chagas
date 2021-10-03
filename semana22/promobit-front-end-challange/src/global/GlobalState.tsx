import { useState, useLayoutEffect } from "react"
import GlobalStateContext from "./GlobalStateContext"
import getGenreList from "../services/getGenreList"
import getMoviesList from "../services/getMoviesList"

const GlobalState = (props: any) => {

    const [genreList, setGenreList] = useState("")
    const [moviesList, setMoviesList] = useState("")


    useLayoutEffect(() => {
        getGenreList()
            .then(res =>
                setGenreList(res)
            )
            .catch(err => {
                window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
            })
        getMoviesList()
            .then(res =>
                setMoviesList(res)
            )
            .catch(err => {
                window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
            })
    }, [])


    const states = { genreList , moviesList }
    // const setters = { }
    // const requests = { }
    // const functions = { }

    return (
        <GlobalStateContext.Provider value={{ states }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState