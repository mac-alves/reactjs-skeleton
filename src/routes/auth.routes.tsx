import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routesWeb } from './paths.routes';

import Login from '../pages/Login';

const AuthRoutes: React.FC = () => {
    return (
        <BrowserRouter >
            <Switch>
                <Route path={routesWeb.auth.LOGIN} component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default AuthRoutes;