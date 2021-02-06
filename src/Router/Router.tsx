import React, { FunctionComponent } from 'react'
import { Route, Switch } from 'react-router-dom';
import { NavBar } from '../Components';
import IRoute from '../Util/Types/Route';
import { Home } from '../Views';
import { Login } from '../Views/Login/Login';

const routes: IRoute[] = [
    {
        name: 'Home',
        route: '/',
        component: Home,
        navBar: true
    },
    {
        name: 'Login',
        route: '/login',
        component: Login,
        navBar: false
    }
]

const InjectNavBar: FunctionComponent<{ navBar: boolean, Component: FunctionComponent }> = ({ navBar, Component }) => {
    if (navBar) return (
        <>
            <NavBar />
            <Component />
        </>
    )

    return (
        <Component />
    )
}

const Router: FunctionComponent = () => {

    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route key={`route-${index}`} exact path={route.route} component={() => <InjectNavBar Component={route.component} navBar={route.navBar} />} />
                ))
            }
        </Switch>
    )
}

export default Router