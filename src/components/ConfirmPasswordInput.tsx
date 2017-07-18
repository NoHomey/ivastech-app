import * as React from "react";
import {InputProps} from "material-ui/Input";
import ConfirmPasswordInputControl from "./../controls/ConfirmPasswordInputControl";
import RequiredInput from "./RequiredInput";

interface PasswordInputProps extends InputProps {
    inputControl: ConfirmPasswordInputControl;
}

class PasswordInput extends React.Component<PasswordInputProps> {
    render(): JSX.Element {
        return <RequiredInput
            label="confirmPassword"
            type="password"
            inputControl={this.props.inputControl}/>;
    }
}

export default PasswordInput;