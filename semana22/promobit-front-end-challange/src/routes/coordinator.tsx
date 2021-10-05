export const goToHome = (history: any) => {
    history.push("/")
}
export const goToMovieDetail = (history: any, movieId: any) => {
    history.push(`/detalhes/${movieId}`)
}

export const goToPage = (history: any, page: number) => {
    history.push(`/${page}`)
}