import axios from 'axios'

const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/danilo"

const HEADERS = { 'Content-Type': 'application/json' }

export const postLogin = async (props) => {

    const config = {
        method: 'post',
        url: BASE_URL+'/login',
        headers: HEADERS,
        data: props
    }

    try {
        const response = await axios(config)
        window.localStorage.setItem("token",response.data.token)
        return response.data.success

    } catch (error) {
        alert(`Erro ao efetuar login.\nTente novamente\n${error}`)
        return false
    }
}