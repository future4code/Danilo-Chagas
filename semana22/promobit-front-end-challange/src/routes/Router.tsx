import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import { Container } from "./style";

export default function Router() {
    return (
        <Container>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path={"/"} component={Home}>
                        <Redirect to="/1" />
                    </Route>
                    <Route exact path={"/:page"} component={Home} />
                    <Route exact path={"/detalhes/:movieId"} component={MovieDetail} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Container>
    )
}