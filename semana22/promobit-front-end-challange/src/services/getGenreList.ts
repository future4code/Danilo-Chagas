import axios, { AxiosRequestConfig } from "axios"

export default async function getGenreList(): Promise<any> {

    let config: AxiosRequestConfig = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/genre/movie/list?language=pt-br&api_key=dc879ef9055d02756799dc37bfd73d7a',
        headers: {}
    };

    try {
        const res = await axios(config)
        return res.data.genres;
    } catch (error) {
        return error;
    }
}