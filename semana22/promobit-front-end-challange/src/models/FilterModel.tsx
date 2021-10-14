export interface filter {
    sortBy: sortByValues,
    genresId: number[]
}

export enum sortByValues {
    POPULARITY_ASC = "popularity.asc",
    POPULARITY_DESC = "popularity.desc",
    RELEASE_DATE_ASC = "release_date.asc",
    RELEASE_DATE_DESC = "release_date.desc"
}