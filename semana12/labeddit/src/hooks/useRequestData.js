import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, BASE_HEADERS } from '../constants/endpointBase'

const useRequestData = (initialData, path, token) => {

    const [data, setData] = useState(initialData)

    const config = {
        method: 'get',
        url: BASE_URL + path,
        headers: { ...BASE_HEADERS, 'Authorization': token },
    }

    useEffect(() => {
        axios(config)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                window.alert('Erro ao carregar lista de postagens.\n Tente novamente.')
            })
    }, [path])

    return (data)

}

export default useRequestData