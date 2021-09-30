import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import { Container } from "./style";

export default function Router() {
    return (
        <Container>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path={"/"} component={Home} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Container>
    )
}