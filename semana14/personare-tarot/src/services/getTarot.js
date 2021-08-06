import axios from 'axios'

const BASE_URL = 'https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json'

export const getTarot = (setIsLoading) => {
    setIsLoading(true)
    return axios.get(BASE_URL)
    .then((res)=>{
        setIsLoading(false)
        return res.data
    })
    .catch((err)=>{
        setIsLoading(false)
        alert(`Erro ao carregar cartas.\nTente novamente`)
        return false
    })
}