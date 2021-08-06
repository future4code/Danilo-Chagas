import axios from 'axios'

const BASE_URL = 'https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json'

export const getTarot = async () => {
    try{
        const res = await axios.get(BASE_URL)
        return res
    } catch (err) {
        alert(`Erro ao carregar cartas.\nTente novamente`)
    }
}