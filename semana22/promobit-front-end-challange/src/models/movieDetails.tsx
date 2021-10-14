import { genres } from './genresList'
export type MovieDetailType = {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null | belongsToCollection,
    budget: number,
    genres: Array<genres>,
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: Array<productionCompanies>,
    production_countries: Array<productionCountries>,
    iso_3166_1: string,
    name: string,
    release_date: string,
    format: Date | string,
    revenue: number,
    runtime: number | null,
    spoken_languages: Array<spokenLanguages>,
    status: "Rumored" | "Planned" | "In Production" | "Post Production" | "Released" | "Canceled",
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    videos?: videos,
    images?: Array<images>
    certifications?: Array<certificationHead>
}

export type belongsToCollection = {
    id: number,
    name: string,
    poster_path: string | null,
    backdrop_path: null | string
}

export type productionCompanies = {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string
}

export type productionCountries = {
    iso_3166_1: string
    name: string
}

export type spokenLanguages = {
    iso_3166_1: string,
    name: string
}

export type videos = {
    results: [
        {
            iso_639_1: string,
            iso_3166_1: string,
            name: string,
            key: string,
            site: string,
            size: number,
            type: string,
            official: boolean,
            published_at: Date | string,
            id: string
        }
    ]
}

export type images = {
    backdrops: [],
    logos: [],
    posters: []
}

export type errorMovieDetail = {
    status_message: string
    status_code: number
}

export type MovieCast = {
    id: number,
    cast: Array<cast>,
    crew: Array<crew>
}

export type cast = {
    adult: boolean,
    gender: number | null,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string | null,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

export type crew = {
    adult: boolean,
    gender: number | null,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string | null,
    credit_id: string,
    department: string,
    job: string
}

export type certificationHead = {
    iso_3166_1: string,
    release_dates : Array<releaseDates>
}

export type releaseDates = {
    certification: string,
    iso_639_1: string,
    note: string,
    release_date: string,
    type: number
}