import * as React from "react";
import {InputProps} from "material-ui/Input";
import EmailInputControl from "./../controls/EmailInputControl";
import RequiredInput from "./RequiredInput";

interface EmailInputProps extends InputProps {
    inputControl: EmailInputControl;
}

class EmailInput extends React.Component<EmailInputProps> {
    render(): JSX.Element {
        return <RequiredInput
            label="email"
            type="email"
            inputControl={this.props.inputControl}/>;
    }
}

export default EmailInput;