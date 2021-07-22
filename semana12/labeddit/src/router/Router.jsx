import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import CommentsPage from '../pages/CommentsPage/CommentsPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'


export default function Router() {
    return (
        <Switch>
            <Route exact path={"/"}
                component={HomePage}/>
            <Route exact path={"/login"}
                component={LoginPage} />
            <Route exact path={"/signup"}
                component={SignUpPage} />
            <Route exact path={"/posts"}
                component={FeedPage} />
            <Route exact path={"/posts/:postId"}
                component={CommentsPage} />
            <Route component={NotFoundPage} />
        </Switch>
    )
}