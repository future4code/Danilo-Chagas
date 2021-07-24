import axios from "axios"
import { BASE_URL, BASE_HEADERS } from "../constants/endpointBase"
import { goToRefreshPage, goToFeedPage } from "../router/coordinator"

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
            goToRefreshPage(history)
        })
        .catch(() => {
            window.alert('Erro ao criar postagem.\n Tente novamente.')
        })
}

export const postCreateComment = (postId, body, token, cleanFields, history, setIsLoading) => {
    setIsLoading(true)
    const config = {
        method: 'post',
        url: BASE_URL + `/posts/${postId}/comments`,
        headers: { ...BASE_HEADERS, 'Authorization': token },
        data: body,
    }

    axios(config)
        .then((res) => {
            window.alert(`${res.data}`)
            cleanFields()
            setIsLoading(false)
            goToRefreshPage(history)
        })
        .catch(() => {
            window.alert('Erro ao postar comentário.\n Tente novamente.')
        })
}

export const postCreatePostVote = (postId, token, body, history) => {
    const config = {
        method: 'post',
        url: BASE_URL + `/posts/${postId}/votes`,
        headers: { ...BASE_HEADERS, 'Authorization': token },
        data: body,
    }

    axios(config)
        .then((res) => {
            window.alert(`${res.data}`)
            goToRefreshPage(history)
        })
        .catch(() => {
            window.alert('Erro ao votar.\n Tente novamente.')
        })
}

export const putChangePostVote = (postId, token, body, history) => {
    const config = {
        method: 'put',
        url: BASE_URL + `/posts/${postId}/votes`,
        headers: { ...BASE_HEADERS, 'Authorization': token },
        data: body,
    }

    axios(config)
        .then((res) => {
            window.alert(`mudou voto`)
            goToRefreshPage(history)
        })
        .catch(() => {
            window.alert('Erro ao votar.\n Tente novamente.')
        })
}

export const delPostVote = (postId, token, history) => {
    const config = {
        method: 'delete',
        url: BASE_URL + `/posts/${postId}/votes`,
        headers: { 'Authorization': token },
    }

    axios(config)
        .then((res) => {
            window.alert(`deletou voto`)
            goToRefreshPage(history)
        })
        .catch(() => {
            window.alert('Erro ao votar.\n Tente novamente.')
        })
}

export const postCreateCommentVote = (commentId, token, body, history) => {
    const config = {
        method: 'post',
        url: BASE_URL + `/comments/${commentId}/votes`,
        headers: { ...BASE_HEADERS, 'Authorization': token },
        data: body,
    }

    axios(config)
        .then((res) => {
            window.alert(`${res.data}`)
            goToRefreshPage(history)
        })
        .catch(() => {
            window.alert('Erro ao votar.\n Tente novamente.')
        })
}

export const putChangeCommentVote = (commentId, token, body, history) => {
    const config = {
        method: 'put',
        url: BASE_URL + `/comments/${commentId}/votes`,
        headers: { ...BASE_HEADERS, 'Authorization': token },
        data: body,
    }

    axios(config)
        .then((res) => {
            window.alert(`mudou voto`)
            goToRefreshPage(history)
        })
        .catch(() => {
            window.alert('Erro ao votar.\n Tente novamente.')
        })
}

export const delCommentVote = (commentId, token, history) => {
    const config = {
        method: 'delete',
        url: BASE_URL + `/comments/${commentId}/votes`,
        headers: { 'Authorization': token },
    }

    axios(config)
        .then((res) => {
            window.alert(`deletou voto`)
            goToRefreshPage(history)
        })
        .catch(() => {
            window.alert('Erro ao votar.\n Tente novamente.')
        })
}