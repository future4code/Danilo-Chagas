import { useState, useEffect } from "react"
import { BASE_URL, HEADERS } from '../Endpoint/Endpoint'
import axios from "axios"

function useTripDetail(token, tripId) {

    const [list, setList] = useState({})

    const getTripDetail = async () => {

        let config = {
            method: 'get',
            url: BASE_URL + "/trip/" + tripId,
            headers: { ...HEADERS, "auth": token },
            data: ''
        };

        try {
            const response = await axios(config)
            setList(response.data)

        } catch (error) {
            console.log(config)
            alert(`Erro ao carregar viagem.\nTente novamente\n${error}`)
            setList(false)
        }
    }

    useEffect(() => {
        getTripDetail()
    }, [tripId])

    return [list]
}

export default useTripDetail