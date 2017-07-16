import * as React from "react";
import Button, {ButtonProps} from "material-ui/Button";

class ContrastButton extends React.Component<ButtonProps> {
    render(): JSX.Element {
        return <Button {...this.props} color="contrast"/>
    }
}

export default ContrastButton;