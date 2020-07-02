import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routesWeb } from './paths.routes';

import Home from '../templates/Home';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter >
            <Switch>
                <Route path={routesWeb.app.HOME} component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRoutes;