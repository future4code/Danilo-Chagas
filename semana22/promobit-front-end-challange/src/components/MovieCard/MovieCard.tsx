import { useHistory } from "react-router";
import { goToMovieDetail } from "../../routes/coordinator";
import { Container, Genre } from "./style";

export default function MovieCard(props: any) {
    const { item, genres } = props
    const { title, release_date, poster_path } = item

    const history = useHistory()

    const displayGenres = !genres ? "" : genres.map((genreName: any) => {
        return <Genre key={genreName} className={"gender"}>{genreName}</Genre>
    })

    const customDate = new Date(Date.parse(release_date)).toLocaleDateString(
        "pt-br",
        {
            month: 'short',
            year: 'numeric'
        }
    )

    const imagePosterError = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"

    return (
        <Container onClick={() => goToMovieDetail(history, item.id)}>
            <img loading={"lazy"} alt={"movie cover"} src={`https://image.tmdb.org/t/p/w${300}${poster_path}`}
                onError={(e) => { e.currentTarget.src = imagePosterError }} />
            <h3 className={"title"}>{title}</h3>
            <div className={"genres"}>{displayGenres}</div>
            <h5 className={"launch"}>{customDate}</h5>
        </Container>
    )
}