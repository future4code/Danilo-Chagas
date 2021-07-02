import axios from "axios"

export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"

export const PARAMS_ALUNO = "danilo/"

export const PARAMS_ACTION = ['person', 'matches', 'choose-person', 'clear']

export const getProfileToChoose = async () => {
    try{
        const response = await axios.get(BASE_URL+PARAMS_ALUNO+PARAMS_ACTION[0])
        return response.data.profile
    }catch(error){
        alert(`Erro ao carregar perfil.\nTente novamente\n${error}`)
    }
}