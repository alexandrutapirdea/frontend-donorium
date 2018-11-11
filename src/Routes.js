import React, { Component } from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import './App.css'
export const AuthService = {
    isAuthenticated: false,
    // authenticate(cb) {
    //     this.isAuthenticated = true;
    //     setTimeout(cb, 100)
    // },
    // logout(cb) {
    //     this.isAuthenticated = false;
    //     setTimeout(cb, 100)
    // }
};

const SecretRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        AuthService.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
);

class Routes extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/login" exact component={Login} />
                        <SecretRoute path="/calendar" exact component={Calendar} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;