import * as React from "react";
import ComponentWrapper from "./ComponentWrapper";
import {Routes, RouterActions} from "./../reactives/router";
import Orders from "./Orders";
import Addresses from "./Addresses";
import Home from "./Home";

interface Actions {
    router: RouterActions;
}

function AppContent(actions: Actions): JSX.Element {
    switch(actions.router.actions.whichRoute()) {
        case Routes.Orders: return <Orders/>;
        case Routes.Templates: return <Addresses/>;
        case Routes.Addresses: return <Addresses/>;
        case Routes.Home: return <Home/>;
        default: return <div/>;
    }
}

function AppContentComponent(): JSX.Element {
    return <ComponentWrapper component={AppContent} reactives="router"/>;
}

export default AppContentComponent;