import { useEffect, useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { goToMovieDetail } from "../../routes/coordinator";
import { Container, Genre } from "./style";

export default function MovieCard(props: any) {
    const { item, genres } = props
    const { title, release_date , poster_path} = item


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

    const history = useHistory()

    return (
        <Container
            onClick={() => goToMovieDetail(history, item.id)}
        >
            <img loading={"lazy"} alt={"movie cover"} src={`https://image.tmdb.org/t/p/w${200}${poster_path}`} />
            <h3 className={"title"}>{title}</h3>
            <div className={"genres"}>{displayGenres}</div>
            <h5 className={"launch"}>{customDate}</h5>
        </Container>
    )
}