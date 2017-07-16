import * as React from "react";
import Button from "material-ui/Button";

class ContrastButton extends React.Component {
    render(): JSX.Element {
        return <Button color="contrast">
            {this.props.children}
        </Button>;
    }
}

export default ContrastButton;