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

type CSS = React.CSSProperties;

const style: {AppBar: CSS, Toolbar: CSS} = {
    AppBar: {
        width: "100%"
    },
    Toolbar: {
        minHeight: "60px"
    }
}; 

function IvasTechBar(): JSX.Element {
    return <AppBar position="static" style={style.AppBar}>
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
        </Toolbar>
    </AppBar>;
}

export default IvasTechBar;