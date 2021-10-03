import axios, { AxiosRequestConfig } from "axios"

export default async function getMoviesList(page: number = 1): Promise<any> {

    let config: AxiosRequestConfig = {
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?language=pt-br&${page}&api_key=dc879ef9055d02756799dc37bfd73d7a`,
        headers: {}
    };

    try {
        const res = await axios(config)
        return res.data;
    } catch (error) {
        return error;
    }
}