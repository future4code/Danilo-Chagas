import { useHistory, useParams } from "react-router-dom";
import { Cast, ColumnContainer, Container, Detail, Navigation, Poster, RowContainer, VideoContainer, ContainerWithNoVideo } from "./style";
import { certificationHead, MovieCast, MovieDetailType, releaseDates } from "../../models/movieDetails";
import { useState, useLayoutEffect } from "react";
import getMovieDetail from "../../services/geMovieDetail";
import getMovieCast from "../../services/geMovieCast";
import CastCard from "../../components/CastCard/CastCard";
import { Button, Chip } from "@material-ui/core";
import { ArrowBackIosNew } from "@mui/icons-material";
import { goToHome } from "../../routes/coordinator";
import EventIcon from '@mui/icons-material/Event';
import TimerIcon from '@mui/icons-material/Timer';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';

export default function MovieDetail() {

    const iconsSubtitles = {
        certification: "Classificação",
        releaseDate: "Laçamento",
        genres: "Gêneros",
        runtime: "Duração"
    }
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

    const runtime = !details?.runtime ?
        " - " :
        `${(details.runtime / 60).toString().split(".")[0]}h${((details.runtime / 60) % 1 * 60).toFixed(2).toString().split(".")[0]}min`

    const releaseDate = !details?.release_date ?
        "-" :
        new Date(details?.release_date).toLocaleDateString("pt-br")

    const certification = !details?.certifications ?
        "-" :
        details?.certifications && details.certifications.filter((item: certificationHead) => {
            return item.iso_3166_1 === "BR"
        })[0]?.release_dates.filter((item: releaseDates, index: number, array: Array<releaseDates>) => {
            const lastItem: number = array.length - 1
            return lastItem === index && item
        })[0]?.certification


    const showDetail = !movieCast && !details ? <p>Loading...</p> : (
        <RowContainer >
            <Poster>
                <img className={"poster"}
                    alt={"movie poster"}
                    src={`https://image.tmdb.org/t/p/w${300}${details?.poster_path}`} />
            </Poster>
            <Detail>
                <RowContainer>

                    <ColumnContainer>

                        <h1 className={"title"}>{details?.title}</h1>

                        {details?.tagline && <h3
                            className={"tagline"}>
                            {details.tagline}</h3>}

                        <div id={"movie-infos"}>
                            <div title={iconsSubtitles.certification} id={"certification"} className={"info"}><EscalatorWarningIcon />{certification ? certification : "-"}</div>
                            <div title={iconsSubtitles.releaseDate} id={"releaseDate"} className={"info"}><EventIcon />{releaseDate}</div>
                            <div title={iconsSubtitles.runtime} id={"runtime"} className={"info"}><TimerIcon />{runtime}</div>
                        </div>

                        <div className={"genres"}>
                            <BookmarksIcon />
                            {details?.genres.map(genre =>
                                <Chip size="small" variant="outlined" label={genre.name} />)}
                        </div>

                        <div className={"synopsis"} >
                            <h4>Sinopse</h4>
                            <p>{details?.overview}</p>
                        </div>

                    </ColumnContainer>

                    {!details?.videos?.results[0] ?
                        <ContainerWithNoVideo /> :
                        details?.videos?.results[0].site.toLocaleLowerCase().trim() !== "youtube" ?
                            <ContainerWithNoVideo /> :
                            <VideoContainer
                                src={`https://www.youtube.com/embed/${details?.videos?.results[0].key}`}
                                title="YouTube video player"
                                frameBorder={"0"}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
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
                    <Button
                        variant="outlined"
                        startIcon={<ArrowBackIosNew />}
                        onClick={() => history.location.key ? history.goBack() : goToHome(history)}>
                        Voltar
                    </Button>

                </div>
            </Navigation>
            {error ? <>Sem conteúdo disponível</> :
                !movieCast || !details ?
                    <>Loading...</> :
                    showDetail}
        </Container>
    )
}