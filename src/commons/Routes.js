import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from "../services/auth"
import CardHoteis from '../components/Cards/CardHoteis' 

import SearchForm from "../components/Form/DestinyForm/SearchForm"

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{ pathname: "/", state: {from: props.location}}}/>
            )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SearchForm}/>   
            <PrivateRoute path="/app" component={() => <h1>App</h1>}/>
            <Route path="/hoteis" component={CardHoteis}/>    
        </Switch>    
    </BrowserRouter>
)

export default Routes