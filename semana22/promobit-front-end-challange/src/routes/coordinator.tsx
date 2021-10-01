export const goToHome = (history: any) => {
    history.push("/")
}
export const goToMovieDetail = (history: any, movieId: any) => {
    history.push(`/detalhes/${movieId}`)
}