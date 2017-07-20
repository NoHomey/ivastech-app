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
import TranslationService from "./../../services/TranslationService/TranslationService";
import SideNavService from "./../../services/SideNavService";
import UserService from "./../../services/UserService";
import bindMethod from "./../../decorators/bindMethod";

const style: {list: React.CSSProperties} = {
    list: {
        width: 200,
        flex: "initial"
    }
};

interface SideNavListItem {
    icon: JSX.Element;

    onClick?: () => void;
}

class SideNav extends React.Component {
    private static logout(): void {
        SideNavService.getService().close();
        UserService.getService().logout();
    }

    private static navigations: SideNavListItem[] = [
        {icon: <OrderIcon/>},
        {icon: <OrdersIcon/>},
        {icon: <TemplatesIcon/>},
        {icon: <AddresessIcon/>}
    ];

    private static userActions: SideNavListItem[] = [
        {icon: <ChangePasswordIcon/>},
        {icon: <ChangeEmailIcon/>},
        {icon: <LogoutIcon/>, onClick: SideNav.logout},
    ];

    private sideNavService: SideNavService;

    private static renderListItem(this: {texts: string[]}, item:  SideNavListItem, index: number): JSX.Element {
        return <ListItem button key={index} dense onClick={item.onClick}>
            <ListItemIcon>
                {item.icon}
            </ListItemIcon>
            <ListItemText primary={this.texts[index]}/>
        </ListItem>;
    }

    private static renderList(icons: SideNavListItem[], texts: string[]): JSX.Element {
        return <List style={style.list} disablePadding>
            {icons.map<JSX.Element>(SideNav.renderListItem, {texts: texts})}
        </List>;
    }

    @bindMethod("forceUpdate")
    private reRender(): void { }

    constructor() {
        super();
        this.sideNavService = SideNavService.getService();
        this.sideNavService.onChange(this.reRender);
    }

    componentWillUnmount(): void {
        this.sideNavService.unsubscribe(this.reRender);
    }

    render(): JSX.Element {
        const {order, user} = TranslationService.getTranslation().sideNav;
        return <Drawer
            anchor="left" docked={false}
            open={this.sideNavService.isOpen()}
            onRequestClose={this.sideNavService.close}>
            <div>
                <Toolbar>
                    <Logo color="secondary"/>
                </Toolbar>
                <Divider/>
                {SideNav.renderList(SideNav.navigations, order)}
                <Divider/>
                {SideNav.renderList(SideNav.userActions, user)}
            </div>
        </Drawer>;
    }
}

export default SideNav;