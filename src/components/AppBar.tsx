import * as React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import LayoutContainer from "./LayoutContainer";
import LayoutItem from "./LayoutItem";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import LanguagePickerButton from "./LanguagePickerButton";
import ComponentWrapper from "./ComponentWrapper";
import {LoginActions} from "./../reactives/login";

type CSS = React.CSSProperties;

interface Actions {
    login: LoginActions;
}

const style: {Toolbar: CSS} = {
    Toolbar: {
        minHeight: "60px",
        marginLeft: "auto",
        marginRight: "auto",
        width: "76%"
    }
};

const spaceBetweeen = "space-between";

function IvasTechBar(actions: Actions): JSX.Element {
    return <AppBar position="static">
        <Toolbar style={style.Toolbar}>
            {
                actions.login.actions.isUserLoggedIn()
                ? <LayoutContainer justify={spaceBetweeen}>
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
                        <LanguagePickerButton/>
                    </LayoutItem>
                </LayoutContainer>
                : <LayoutContainer justify={spaceBetweeen}>
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
                                <LanguagePickerButton/>
                            </LayoutItem>
                        </LayoutContainer>
                    </LayoutItem>
                </LayoutContainer>
            }           
        </Toolbar>
    </AppBar>;
}

function AppBarComponent(): JSX.Element {
    return <ComponentWrapper component={IvasTechBar}/>;
}

export default AppBarComponent;