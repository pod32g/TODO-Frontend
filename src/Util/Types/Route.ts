import { FunctionComponent } from "react";

interface IRoute {
    component: FunctionComponent,
    route: string,
    name: string,
    navBar: boolean
}

export default IRoute