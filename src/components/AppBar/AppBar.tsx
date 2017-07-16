import * as React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Grid from "material-ui/Grid";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

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
                <Grid container gutter={0} align="center" justify="space-between">
                    <Grid item>
                        <Logo/>
                    </Grid>
                    <Grid item>
                        <LoginButton/>
                        <RegisterButton/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>;
    }
}

export default IvasTechBar;