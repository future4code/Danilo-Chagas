import axios from "axios"
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

export const postLogin = (body, cleanFields, history, setIsLoading) => {
    setIsLoading(true)
    const config = {
        method: 'post',
        url: BASE_URL + '/users/login',
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
            alert(`Erro ao efetuar Log In. Verifique os critérios de cada campo.\n${JSON.stringify(err.response.data.errors)}`)
        })
}

export const postCreatePost = (body, token, cleanFields, history, setIsLoading) => {
    setIsLoading(true)
    const config = {
        method: 'post',
        url: BASE_URL + '/posts',
        headers: { ...BASE_HEADERS, 'Authorization': token },
        data: body,
    }

    axios(config)
        .then((res) => {
            window.alert(`${res.data}`)
            cleanFields()
            setIsLoading(false)
            goToFeedPage(history)
        })
        .catch((err) => {
            window.alert('Erro ao criar postagem.\n Tente novamente.')
        })
}