import { useHistory } from "react-router";
import { Cast, ColumnContainer, Container, Details, Navigation, Poster, RowContainer, VideoContainer } from "./style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MovieDetail() {

    const history = useHistory()

    return (
        <Container>
            <Navigation>
                <div className={"go-back"}>
                    <ArrowBackIcon />
                    <h6 onClick={() => history.goBack()}>  voltar</h6>
                </div>
            </Navigation>
            <RowContainer >
                <Poster><img className={"teste"} /></Poster>
                <Details>
                    <RowContainer>
                        <ColumnContainer>
                            <h1 className={"title"}>Título</h1>
                            <h5 className={"launch"}>Lançamento | Duração </h5>
                            <h5 className={"subgender"}>genero 1 | genero 2 | genero 3 </h5>
                            <p className={"synopsis"}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio magnam vel maxime exercitationem quae amet hic officia esse, velit rerum magni quia dignissimos repellendus eaque mollitia fugit nemo illum labore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quo, quisquam atque reprehenderit consequatur cumque. Voluptates tenetur maiores id mollitia, asperiores soluta saepe hic veritatis, veniam quidem doloremque quos quam.</p>
                        </ColumnContainer>
                        <VideoContainer controls>
                            <source></source>
                            Your browser does not support the video tag.
                        </VideoContainer>
                    </RowContainer>
                    <Cast>Elenco</Cast>
                </Details>
            </RowContainer>
        </Container>
    )
}