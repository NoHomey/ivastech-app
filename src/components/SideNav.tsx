
import * as React from "react";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Divider from "material-ui/Divider";
import OrderIcon from "material-ui-icons/Send";
import OrdersIcon from "material-ui-icons/ViewList";
import TemplatesIcon from "material-ui-icons/Assignment";
import AddresessIcon from "material-ui-icons/Receipt";
import ChangePasswordIcon from "material-ui-icons/VpnKey";
import ChangeEmailIcon from "material-ui-icons/Email";
import LogoutIcon from "material-ui-icons/ExitToApp";
import Toolbar from "material-ui/Toolbar";
import Logo from "./Logo";
import ComponentWrapper from "./ComponentWrapper";
import Translations from "./../translations/Translations";
import {OpenActions} from "./../reactives/openReactive";
import {LoginActions} from "./../reactives/login";

interface Actions {
    sideNav: OpenActions;

    login: LoginActions;

    changePasswordDialog: OpenActions;
}

interface SideNavItemProps {
    icon: JSX.Element;

    text: string;

    onClick?: () => void;
}

const style: {list: React.CSSProperties} = {
    list: {
        width: 200,
        flex: "initial"
    }
};

function SideNavItem(props: SideNavItemProps): JSX.Element {
    return <ListItem button dense onClick={props.onClick}>
            <ListItemIcon>{props.icon}</ListItemIcon>
            <ListItemText primary={props.text}/>
        </ListItem>;
}

function SideNav(actions: Actions, translations: Translations): JSX.Element {
    return <Drawer
        anchor="left" docked={false}
        open={actions.sideNav.actions.isOpen()}
        onRequestClose={actions.sideNav.actions.close}>
        <div>
            <Toolbar>
                <Logo color="secondary"/>
            </Toolbar>
            <Divider/>
            <List style={style.list} disablePadding>
                <SideNavItem icon={<OrderIcon/>} text={translations.order}/>
                <SideNavItem icon={<OrdersIcon/>} text={translations.orders}/>
                <SideNavItem icon={<TemplatesIcon/>} text={translations.templates}/>
                <SideNavItem icon={<AddresessIcon/>} text={translations.addresses}/>
            </List>
            <Divider/>
            <List style={style.list} disablePadding>
                <SideNavItem
                    icon={<ChangePasswordIcon/>}
                    text={translations.changePassword}
                    onClick={actions.changePasswordDialog.actions.open}/>
                <SideNavItem icon={<ChangeEmailIcon/>} text={translations.changeEmail}/>
                <SideNavItem
                    icon={<LogoutIcon/>}
                    text={translations.logout}
                    onClick={actions.login.actions.logout}/>
            </List>
        </div>
    </Drawer>;
}

function SideNavComponent(): JSX.Element {
    return <ComponentWrapper component={SideNav} reactives="sideNav"/>;
}

export default SideNavComponent;
