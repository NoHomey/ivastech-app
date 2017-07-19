import * as React from "react";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import SideNavService from "./../../services/SideNavService";

class MenuButton extends React.Component {
    shouldComponentUpdate(): boolean {
        return false;
    }

    render(): JSX.Element {
        return <IconButton color="contrast" onClick={SideNavService.getService().open}>
            <MenuIcon/>
        </IconButton>;
    }
}

export default MenuButton;