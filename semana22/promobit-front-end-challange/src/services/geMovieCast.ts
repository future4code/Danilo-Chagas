import axios, { AxiosRequestConfig } from "axios"
import { MovieCast, errorMovieDetail } from "../models/movieDetails";

export default async function getMovieCast(movieId: number): Promise<MovieCast | any> {

    let config: AxiosRequestConfig = {
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-br&api_key=dc879ef9055d02756799dc37bfd73d7a`,
        headers: {}
    };

    try {
        const res = await axios(config)
        return res.data;

    } catch (error: any | errorMovieDetail) {
        if (error.status_code === 7) {
            window.alert("Erro interno. Contate o suporte técnico")
        }
        if (error.status_code === 34) {
            window.alert("Id do filme não existe")
        }
    }
}