import { useHistory, useParams } from "react-router-dom";
import { Cast, ColumnContainer, Container, Detail, Navigation, Poster, RowContainer, VideoContainer, ContainerWithNoVideo } from "./style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MovieCast, MovieDetailType } from "../../models/movieDetails";
import { useState, useLayoutEffect } from "react";
import getMovieDetail from "../../services/geMovieDetail";
import getMovieCast from "../../services/geMovieCast";
import CastCard from "../../components/CastCard/CastCard";


export default function MovieDetail() {

    const { movieId } = useParams<{ movieId?: string }>()

    const [details, setDetails] = useState<MovieDetailType>()
    const [movieCast, setMovieCast] = useState<MovieCast>()
    const [error, setError] = useState(false)
    const history = useHistory()

    useLayoutEffect(() => {
        getMovieDetail(Number(movieId))
            .then(res => setDetails(res))
            .catch(err => {
                setMovieCast(undefined)
                setError(true)
            })
        getMovieCast(Number(movieId))
            .then(res => setMovieCast(res))
            .catch(err => {
                setMovieCast(undefined)
                setError(true)
            })
    }, [])

    const showCast = !movieCast && !details ? <p>Loading...</p> : (
        movieCast?.cast.map(actor => { return <CastCard key={actor.order} info={actor} /> })
    )

    const showDetail = !movieCast && !details ? <p>Loading...</p> : (
        <RowContainer >
            <Poster>
                <img className={"poster"}
                    src={`https://image.tmdb.org/t/p/w${300}${details?.poster_path}`} />
            </Poster>
            <Detail>
                <RowContainer>
                    <ColumnContainer>
                        <h1 className={"title"}>{details?.title}</h1>
                        {details?.tagline && <h3
                            className={"tagline"}>
                            {details.tagline}</h3>}
                        <h5 className={"launch"}>
                            Lançamento: {!details?.release_date ?
                                "-" :
                                new Date(details?.release_date).toLocaleDateString("pt-br")}
                            | Duração: {!details?.runtime ? " - " :
                                `${(details.runtime / 60).toString().split(".")[0]}h${((details.runtime / 60) % 1 * 60).toFixed(2).toString().split(".")[0]}min`}
                        </h5>
                        <div className={"subgender"}>
                            <h5>Gênero(s):</h5> {details?.genres.map(genre => <h5>{genre.name}</h5>)}</div>
                        <p className={"synopsis"}>{details?.overview}</p>
                    </ColumnContainer>

                    {!details?.videos?.results[0] ?
                        <ContainerWithNoVideo /> :
                        details?.videos?.results[0].site.toLocaleLowerCase().trim() !== "youtube" ?
                            <ContainerWithNoVideo /> :
                            <VideoContainer src={`https://www.youtube.com/embed/${details?.videos?.results[0].key}`} title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    }

                </RowContainer>
                <Cast>{showCast}</Cast>
            </Detail>
        </RowContainer>
    )

    return (
        <Container>
            <Navigation>
                <div className={"go-back"}>
                    <ArrowBackIcon />
                    <h6 onClick={() => history.goBack()}>  voltar</h6>
                </div>
            </Navigation>
            {error ? <>Sem conteúdo disponível</> :
                !movieCast || !details ?
                    <>Loading...</> :
                    showDetail}
        </Container>
    )
}