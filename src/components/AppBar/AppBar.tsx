import * as React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";;
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import SideNav from "./SideNav";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import LanguagePicker from "./LanguagePicker";
import UserService from "./../../services/UserService";

type CSS = React.CSSProperties;

const style: {AppBar: CSS, Toolbar: CSS} = {
    AppBar: {
        width: "100%",
    },
    Toolbar: {
        minHeight: "60px"
    }
}; 

class IvasTechBar extends React.Component {
    render(): JSX.Element {
        if(UserService.getService().isUserLoggedIn()) {
            return <div>
                <AppBar position="static" style={style.AppBar}>
                    <Toolbar style={style.Toolbar}>
                        <LayoutContainer justify="space-between">
                            <LayoutItem>
                                <LayoutContainer gutter={16}>
                                    <LayoutItem>
                                        <MenuButton/>
                                    </LayoutItem>
                                    <LayoutItem>
                                        <Logo/>
                                    </LayoutItem>
                                </LayoutContainer>
                            </LayoutItem>
                            <LayoutItem>
                                <LanguagePicker/>
                            </LayoutItem>
                        </LayoutContainer>
                    </Toolbar>
                </AppBar>
                <SideNav/>
            </div>;
        }
        return <AppBar position="static" style={style.AppBar}>
            <Toolbar style={style.Toolbar}>
                <LayoutContainer justify="space-between" gutter={24}>
                    <LayoutItem>
                        <Logo/>
                    </LayoutItem>
                    <LayoutItem>
                        <LayoutContainer>
                            <LayoutItem>
                                <LoginButton/>
                            </LayoutItem>
                            <LayoutItem>
                                <RegisterButton/>
                            </LayoutItem>
                            <LayoutItem>
                                <LanguagePicker/>
                            </LayoutItem>
                        </LayoutContainer>
                    </LayoutItem>
                </LayoutContainer>
            </Toolbar>
        </AppBar>;
    }
}

export default IvasTechBar;