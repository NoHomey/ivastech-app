import * as React from "react";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import createComponent from "./../createComponent";
import Actions from "./../reactives/Actions";
import {SideNavReactivity} from "./../reactives/sideNav";

interface MenuButtonActions {
    sideNav: Actions<SideNavReactivity>;
}

const MenuButton = createComponent<MenuButtonActions>(
    function(actions: MenuButtonActions): JSX.Element {
        return <IconButton color="contrast" onClick={actions.sideNav.actions.open}>
            <MenuIcon/>
        </IconButton>;
    }, undefined, false
)

export default MenuButton;