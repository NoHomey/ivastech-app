import * as React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

type CSS = React.CSSProperties;

const style: {div: CSS, typography: CSS} = {
    div: {
        width: "100%"
    },
    typography: {
        flex: 1
    }
};

export default function(): JSX.Element {
    return <div style={style.div}>
            <AppBar position="static">
                <Toolbar>
                    <Typography type="title" color="inherit" style={style.typography}>
                        IVAS-TECH
                    </Typography>
                    <Button color="contrast">Login</Button>
                </Toolbar>
            </AppBar>
    </div>;
}