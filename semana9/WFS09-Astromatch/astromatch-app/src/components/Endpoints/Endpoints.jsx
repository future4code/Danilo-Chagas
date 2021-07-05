import axios from "axios"

export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"

export const PARAMS_ALUNO = "danilo/"

export const PARAMS_ACTION = ['person', 'matches', 'choose-person', 'clear']

export const HEADER = {
    headers: {
        'Content-Type': 'application/json'
    },
}


export const getProfileToChoose = async () => {
    try {
        const response = await axios.get(BASE_URL + PARAMS_ALUNO + PARAMS_ACTION[0])
        return response.data.profile
    } catch (error) {
        alert(`Erro ao carregar perfil.\nTente novamente\n${error}`)
    }
}

export const getMatches = async () => {
    try{
        const response = await axios.get(BASE_URL+PARAMS_ALUNO+PARAMS_ACTION[1])
        return response.data.matches
    } catch (error) {
        alert(`Erro ao carregar Matches.\nTente novamente\n${error}`)
    }
}

export const postChoosePerson = async (props) => {
    const config = {
        method: 'post',
        url: BASE_URL + PARAMS_ALUNO + PARAMS_ACTION[2],
        HEADER,
        data: {
            "id": props.id,
            "choice": true
        },
    }

    try {
        await axios(config)
    } catch (error) {
        alert(`Erro ao curtir.\nTente novamente\n${error}`);
    }
}

export const putClear = async () => {
    const confirmRefresh = window.confirm('Confirma reiniciar lista e matches?')
    if (confirmRefresh) {
        try {
            await axios.put(BASE_URL + PARAMS_ALUNO + PARAMS_ACTION[3], HEADER)
            getProfileToChoose()
        } catch (error) {
            alert(`Erro ao reiniciar lista.\nTente novamente.\n${error}`)
        }
    }
}