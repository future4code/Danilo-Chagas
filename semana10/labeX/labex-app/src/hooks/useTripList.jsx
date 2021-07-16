import { useState, useEffect } from "react"
import { BASE_URL } from '../Endpoint/Endpoint'
import axios from "axios"

const useTripList = () => {

    const [list, setList] = useState()

    const getTrips = async () => {
        const config = {
            method: 'get',
            url: BASE_URL + '/trips'
        }

        try{
            const response = await axios(config)
            setList(response.data)
        } catch(error) {
                return alert(`Erro carregar lista de viagens.\nTente novamente\n${error}`)
            }
    }

    useEffect(() => {
        getTrips()
    }, [])

    return list
}

export default useTripList