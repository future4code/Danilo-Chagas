import axios, { AxiosRequestConfig } from "axios"
import { useState, useEffect, useLayoutEffect } from "react"
import GlobalStateContext from "./GlobalStateContext"
import getGenreList from "../services/getGenreList"

const GlobalState = (props: any) => {

    const [genreList, setGenreList] = useState("")

    useLayoutEffect(() => {
        getGenreList()
            .then(res=>
                setGenreList(res)
            )
            .catch(err => {
                window.alert("Erro ao carregar informações externas\nPor favor, tente novamente ou contate suporte técnico")
            })
    }, [])
    

    const states = { genreList }
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