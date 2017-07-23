import * as React from "react";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import createComponent from "./../createComponent";
import {SideNavActions} from "./../reactives/sideNav";

interface Actions {
    sideNav: SideNavActions;
}

const MenuButton = createComponent<Actions>(
    function(actions: Actions): JSX.Element {
        return <IconButton color="contrast" onClick={actions.sideNav.actions.open}>
            <MenuIcon/>
        </IconButton>;
    }, undefined, false
)

export default MenuButton;