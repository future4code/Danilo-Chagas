import { useHistory, useParams } from "react-router-dom";
import { Cast, ColumnContainer, Container, Detail, Navigation, Poster, RowContainer, VideoContainer } from "./style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MovieCast, MovieDetailType } from "../../models/movieDetails";
import React, { Suspense, useState, useLayoutEffect } from "react";
import getMovieDetail from "../../services/geMovieDetail";
import getMovieCast from "../../services/geMovieCast";
import CastCard from "../../components/CastCard/CastCard";


export default function MovieDetail() {

    const { movieId } = useParams<{ movieId?: string }>()

    const [details, setDetails] = useState<MovieDetailType>()
    const [movieCast, setMovieCast] = useState<MovieCast>()
    const history = useHistory()

    useLayoutEffect(() => {
        getMovieDetail(Number(movieId))
            .then(res => setDetails(res))
        getMovieCast(Number(movieId))
            .then(res => setMovieCast(res))
    }, [])


    const showCast = !movieCast ? <p>Loading...</p> : (
        movieCast.cast.map(actor => { return <CastCard key={actor.order} info={actor}/> })
    )

    const showDetail = !details ? <p>Loading...</p> : (
        <RowContainer >
            <Poster>
                <img className={"poster"}
                    src={`https://image.tmdb.org/t/p/w${300}${details.poster_path}`} />
            </Poster>
            <Detail>
                <RowContainer>
                    <ColumnContainer>
                        <h1 className={"title"}>{details?.title}</h1>
                        {details.tagline && <h3
                            className={"tagline"}>
                            {details.tagline}</h3>}
                        <h5 className={"launch"}>
                            Lançamento: {new Date(details?.release_date).toLocaleDateString("pt-br")}
                            | Duração: {!details?.runtime ? " - " :
                                `${(details.runtime / 60).toString().split(".")[0]}h${((details.runtime / 60) % 1 * 60).toFixed(2).toString().split(".")[0]}min`}
                        </h5>
                        <div className={"subgender"}>
                            <h5>Gênero(s):</h5> {details.genres.map(genre => <h5>{genre.name}</h5>)}</div>
                        <p className={"synopsis"}>{details.overview}</p>
                    </ColumnContainer>
                    <VideoContainer controls>
                        <source></source>
                        Your browser does not support the video tag.
                    </VideoContainer>
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
            {showDetail}
        </Container>
    )
}