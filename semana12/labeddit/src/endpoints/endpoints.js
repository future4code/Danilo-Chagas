import React, {useState} from 'react'
import axios from "axios"
import { useHistory } from "react-router"
import { BASE_URL, BASE_HEADERS } from "../constants/endpointBase"
import { goToFeedPage } from "../router/coordinator"

export const postSignUp = (body, cleanFields, history, setIsLoading) => {
    setIsLoading(true)
    const config = {
        method: 'post',
        url: BASE_URL + '/users/signup',
        headers: BASE_HEADERS,
        data: body,
    }
    axios(config)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            cleanFields()
            setIsLoading(false)
            goToFeedPage(history)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(`Erro ao efetuar cadastro. Verifique os critérios de cada campo.\n${JSON.stringify(err.response.data.errors)}`)
        })
}