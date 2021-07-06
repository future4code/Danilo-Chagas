import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
    HomePage,
    AdminHomePage,
    ApplicationFormPage,
    CreateTripPage,
    ListTripsPage,
    LoginPage,
    TripDetailsPage

    }
    from "./pages/ApplicationFormPage.jsx"

function Router () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={"/"}><HomePage/></Route>
            <Route exact path={"/list-trips"}><ListTripsPage/></Route>
            <Route exact path={"/apply-form"}><ApplicationFormPage/></Route>
            <Route exact path={"/admin"}><AdminHomePage/></Route>
            <Route exact path={"/login"}><LoginPage/></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router