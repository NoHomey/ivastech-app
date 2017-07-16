import * as React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import LanguagePicker from "./LanguagePicker";

type CSS = React.CSSProperties;

const style: {AppBar: CSS, Toolbar: CSS} = {
    AppBar: {
        width: "100%"
    },
    Toolbar: {
        minHeight: "60px"
    }
}; 

class IvasTechBar extends React.Component {
    render(): JSX.Element {
        console.log("render IvasTechBar");
        return <AppBar position="static" style={style.AppBar}>
            <Toolbar style={style.Toolbar}>
                <LayoutContainer justify="space-between">
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