import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import IRoute from '../Util/Types/Route';
import { Home } from '../Views';

const routes: IRoute[] = [
    {
        name: 'Home',
        route: '/',
        component: Home
    }
]

const Router: FunctionComponent = () => {
    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route key={`route-${index}`} exact path={route.route} component={route.component} />
                ))
            }
        </Switch>
    )
}

export default Router