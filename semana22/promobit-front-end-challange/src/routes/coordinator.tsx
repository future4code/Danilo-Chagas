export const goToHome = (history: any) => {
    history.push("/")
}
export const goToMovieDetail = (history: any, movieId: any) => {
    history.push(`/detalhes/${movieId}`)
}

export const goToPage = (history: any, page: number) => {
    history.push(`/${page}`)
}

export const goToSearch = (history: any, page: number, encodedQuery: string) => {
    history.push(`/busca/${page}/${encodedQuery}`)
}