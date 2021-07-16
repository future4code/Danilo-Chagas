import axios from 'axios'

export const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/danilo"

export const HEADERS = { 'Content-Type': 'application/json' }

export const postLogin = async (props) => {

    const config = {
        method: 'post',
        url: BASE_URL + '/login',
        headers: HEADERS,
        data: props
    }

    try {
        const response = await axios(config)
        window.localStorage.setItem("token", response.data.token)
        return response.data.success

    } catch (error) {
        alert(`Erro ao efetuar login.\nTente novamente\n${error}`)
        return false
    }
}


export const getTrips = () => {
    const config = {
        method: 'get',
        url: BASE_URL + '/trips'
    }
    const list = []
    axios(config)
        .then((response) => {
            return list.push(response.data)
        })
        .catch((error) => {
            return alert(`Erro carregar lista de viagens.\nTente novamente\n${error}`)
        })
    return list
}


export const postApplyToTrip = async (input, tripId) => {

    let config = {
        method: 'post',
        url: BASE_URL+"/trips/"+tripId+"/apply",
        headers: HEADERS,
        data: input
    };

    try {
        const response = await axios(config)
        console.log(config)
        return response.data.success

    } catch (error) {
        console.log(config)
        alert(`Erro ao efetuar candidatura.\nTente novamente\n${error}`)
        return false
    }
    
}


export const delDeleteTrip = async (token, tripId) => {

    let result

    let config = {
        method: 'delete',
        url: BASE_URL+"/trips/"+tripId,
        headers: {...HEADERS, "auth": token},
        data: ''
    };

    try {
        const response = await axios(config)
        result = response.data.success

    } catch (error) {
        console.log(config)
        alert(`Erro ao deletar viagem.\nTente novamente\n${error}`)
        result = false
    }
    return result
}


export const getTripDetail = async (token,tripId) =>{
    const list = []

    let config = {
        method: 'get',
        url: BASE_URL+"/trip/"+tripId,
        headers: {...HEADERS, "auth": token},
        data: ''
    };

    try {
        const response = await axios(config)
        return list.push(response.data)

    } catch (error) {
        console.log(config)
        alert(`Erro ao carregar viagem.\nTente novamente\n${error}`)
        list.push(false)
    }
    return list
}