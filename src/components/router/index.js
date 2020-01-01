import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routersList from './routers';

const routers = (
    <Switch>
        {routersList.map((route, index) => {
            return (
                <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                />
            )
        })}
        <Redirect from='/' to='/ocr' />
    </Switch>
)

export default routers;