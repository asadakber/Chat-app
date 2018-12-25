import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../Router/history';
import Login from '../components/Login';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';

class Routers extends Component {
    render() {
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        )
    }
}

export default Routers