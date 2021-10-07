import axios, { AxiosRequestConfig } from "axios"

export default async function getSearchMovies(
    selectedPage: number = 1,
    query: string = "",
): Promise<any> {
    const language = "language=pt-br"
    const region = "region=BR"
    const excludeAdultMovie = "include_adult=false"
    const queryInput = `query=${encodeURI(query.toString())}`
    let page = `page=${selectedPage}`

    let mountedURI = `https://api.themoviedb.org/3/search/movie?${language + "&" + region + "&" + excludeAdultMovie + "&" + page + "&" + queryInput} &api_key=dc879ef9055d02756799dc37bfd73d7a`

    let config: AxiosRequestConfig = {
        method: 'get',
        url: mountedURI,
        headers: {}
    };

    try {
        const res = await axios(config)
        return res.data;
    } catch (error) {
        return error;
    }
}