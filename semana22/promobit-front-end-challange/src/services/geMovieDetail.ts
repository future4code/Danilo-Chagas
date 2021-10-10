import axios, { AxiosRequestConfig } from "axios"
import { MovieDetailType, errorMovieDetail } from "../models/movieDetails";

export default async function getMovieDetail(movieId: number): Promise<MovieDetailType | any> {

    let configGetDetails: AxiosRequestConfig = {
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movieId}?language=pt-br&append_to_response=videos,images&api_key=dc879ef9055d02756799dc37bfd73d7a`,
        headers: {}
    };

    let configGetCertification: AxiosRequestConfig = {
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=dc879ef9055d02756799dc37bfd73d7a`,
        headers: {}
    };

    try {

        const streams = (await Promise.all([
            axios(configGetDetails),
            axios(configGetCertification)
                .then((res: any) => {
                    return { data: { certifications: res?.data?.results } }
                })
        ])
        ).map(({ data }: any) => data)

        return Object.assign({}, ...streams)

    } catch (error: any | errorMovieDetail) {
        if (error.status_code === 7) {
            window.alert("Erro interno. Contate o suporte técnico")
        }
        if (error.status_code === 34) {
            window.alert("Id do filme não existe")
        }
        window.alert("Erro interno. Erro na operação com API")
    }
}