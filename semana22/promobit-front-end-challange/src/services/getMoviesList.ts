import axios, { AxiosRequestConfig } from "axios"

export default async function getMoviesList(
    selectedPage: number = 1,
    sortBy: string | null = "popularity.desc",
    selectedGenres: number | Array<number> | undefined = undefined
): Promise<any> {

    let page = `&page=${selectedPage}`
    let sort_by = `&sort_by=${sortBy}`
    let with_genre = `&with_genres=`

    if (selectedGenres) {
        if (Array.isArray(selectedGenres)) {
            with_genre += selectedGenres.toString()
            window.alert(with_genre)
        } else {
            with_genre += selectedGenres
            window.alert(with_genre)
        }
    }


    let url1 = `https://api.themoviedb.org/3/discover/movie?language=pt-br${sort_by}${with_genre}${page}&api_key=dc879ef9055d02756799dc37bfd73d7a`

    let config: AxiosRequestConfig = {
        method: 'get',
        url: url1,
        // url: `https://api.themoviedb.org/3/movie/popular?language=pt-br&page=${page}&api_key=dc879ef9055d02756799dc37bfd73d7a`,
        headers: {}
    };

    try {
        const res = await axios(config)
        return res.data;
    } catch (error) {
        return error;
    }
}