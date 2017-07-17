import * as React from "react";
import {InputProps} from "material-ui/Input";
import RequiredInputControl from "./../controls/RequiredInputControl";
import RequiredInput from "./RequiredInput";

interface PasswordInputProps extends InputProps {
    inputControl: RequiredInputControl;
}

class PasswordInput extends React.Component<PasswordInputProps> {
    render(): JSX.Element {
        return <RequiredInput
            label="password"
            type="password"
            inputControl={this.props.inputControl}/>;
    }
}

export default PasswordInput;