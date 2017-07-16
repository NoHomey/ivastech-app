import * as React from "react";
import Typography from "material-ui/Typography";

class Logo extends React.Component {
    shouldComponentUpdate(): boolean {
        return false;
    }

    render(): JSX.Element {
        return <Typography type="title" color="inherit">
            IVAS-TECH
        </Typography>;
    }
}

export default Logo;