import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, BASE_HEADERS } from '../constants/endpointBase'

const useRequestData = (initialData, path, token, setIsLoading) => {
    
    const [data, setData] = useState(initialData)

    const config = {
        method: 'get',
        url: BASE_URL + path,
        headers: { ...BASE_HEADERS, 'Authorization': token },
    }

    useEffect(() => {
        setIsLoading(true)
        axios(config)
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                window.alert('Erro ao carregar lista de postagens.\n Tente novamente.')
                setIsLoading(false)
            })
        
    }, [path])

    return (data)

}

export default useRequestData