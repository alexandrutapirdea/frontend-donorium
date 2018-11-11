import React, { Component } from 'react';
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Calendar from "./components/Calendar";
import './App.css'
import AppliedRoute from "./components/AppliedRoute" ;

const SecretRoute = ({ component: Component, auth : auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth.isAuthenticated === true
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
                        <AppliedRoute path="/" exact component={Login} props={this.props.childProps}/>
                        <AppliedRoute path="/login" exact component={Login} props={this.props.childProps}/>
                        <SecretRoute path="/calendar" exact component={Calendar} auth={this.props.childProps}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;