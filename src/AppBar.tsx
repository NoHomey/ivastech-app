import * as React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid";

type CSS = React.CSSProperties;

const style: {AppBar: CSS, Toolbar: CSS} = {
    AppBar: {
        width: "100%"
    },
    Toolbar: {
        minHeight: "60px"
    }
};

const IvasTechBar: () => JSX.Element = () => <AppBar position="static" style={style.AppBar}>
    <Toolbar style={style.Toolbar}>
        <Grid container gutter={0} align="center" justify="space-between">
            <Grid item>
                <Typography type="title" color="inherit">
                    IVAS-TECH
                </Typography>
            </Grid>
            <Grid item>
                <Button color="contrast">Login</Button>
                <Button color="contrast">Register</Button>
            </Grid>
        </Grid>
    </Toolbar>
</AppBar>;

export default IvasTechBar;