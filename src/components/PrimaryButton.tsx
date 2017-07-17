import * as React from "react";
import Button, {ButtonProps} from "material-ui/Button";

class PrimaryButton extends React.Component<ButtonProps> {
    render(): JSX.Element {
        return <Button {...this.props} color="primary"/>
    }
}

export default PrimaryButton;