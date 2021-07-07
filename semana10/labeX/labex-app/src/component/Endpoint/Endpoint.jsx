import axios from 'axios'

const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/danilo"

const HEADERS = {headers:{'Content-Type': 'application/json'}}

export const postLogin = async(props) => {
    try {
        const response = await axios.post(BASE_URL,HEADERS,props)
        window.localStorage.setItem("token",response.data.token)
        return response.data.success       

    } catch(error) {
        alert(error)
    }
}