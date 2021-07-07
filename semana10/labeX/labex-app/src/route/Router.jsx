import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

function Router() {
    return (
        <>
        <BrowserRouter>
        <Header />
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/trips"}>
                    <ListTripsPage />
                </Route>
                <Route exact path={"/apply-form"}>
                    <ApplicationFormPage />
                </Route>
                <Route exact path={"/admin"}>
                    <AdminHomePage />
                </Route>
                <Route exact path={"/admin/login"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/admin/create-trip"}>
                    <CreateTripPage/>
                </Route>
                <Route exact path={"/admin/trip-detail/:tripId"}>
                    <TripDetailsPage/>
                </Route>
            </Switch>
        <Footer />
        </BrowserRouter>
        </>
    )
}

export default Router