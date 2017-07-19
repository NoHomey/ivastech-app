import * as React from "react";
import Typography from "material-ui/Typography";

interface LogoProps {
    color?: "inherit" | "secondary" | "accent" | "default";
}

class Logo extends React.Component<LogoProps> {
    static defaultProps: LogoProps = {color: "inherit"};

    shouldComponentUpdate(): boolean {
        return false;
    }

    render(): JSX.Element {
        return <Typography type="title" color={this.props.color}>
            IVAS-TECH
        </Typography>;
    }
}

export default Logo;