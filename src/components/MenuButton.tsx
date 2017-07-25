import * as React from "react";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ComponentWrapper from "./ComponentWrapper";
import {OpenActions} from "./../reactives/openReactive";

interface Actions {
    sideNav: OpenActions;
}

function MenuButton(actions: Actions): JSX.Element {
    return <IconButton color="contrast" onClick={actions.sideNav.actions.open}>
        <MenuIcon/>
    </IconButton>;
}

function MenuButtonComponent(): JSX.Element {
    return <ComponentWrapper component={MenuButton} shouldUpdate={false}/>;
}

export default MenuButtonComponent;