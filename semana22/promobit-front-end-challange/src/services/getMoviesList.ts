import axios, { AxiosRequestConfig } from "axios"

export default async function getMoviesList(
    selectedPage: number = 1,
    sortBy: string | null = "popularity.desc",
    selectedGenres: Array<number | null> = []
): Promise<any> {
    console.log(selectedGenres,sortBy,selectedPage)
    let page = `&page=${selectedPage}`
    let sort_by = `&sort_by=${sortBy}`
    let with_genre = `&with_genres=`

    if (selectedGenres && Array.isArray(selectedGenres)) {
        with_genre += selectedGenres.toString()
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