import * as React from "react";
import Input, {InputProps} from "material-ui/Input";
import InputLabel from "material-ui/Input/InputLabel";
import FormControl from "material-ui/Form/FormControl";
import FormHelperText from "material-ui/Form/FormHelperText";
import RequiredInputControl from "./../controls/RequiredInputControl";
import TranslationService from "./../services/TranslationService/TranslationService";
import bindAllArgumentsExceptOneOf from "./../decorators/bindAllArgumentsExceptOneOf";
import bindMethod from "./../decorators/bindMethod";

export interface InputControlProp {
    inputControl: RequiredInputControl;
}

export interface RequiredInputProps extends InputControlProp, InputProps {
    label: string;
}

class RequiredInput extends React.Component<RequiredInputProps> {
    
    @bindMethod("forceUpdate")
    private onInputControlChange(): void { }
    
    @bindAllArgumentsExceptOneOf("onValueChange")
    private onChange(event: React.SyntheticEvent<HTMLInputElement>): void { }

    private onValueChange(event: React.SyntheticEvent<HTMLInputElement>): void {
        this.props.inputControl.setInputValue(event.currentTarget.value);
    }

    constructor(props: RequiredInputProps) {
        super(props);
        this.props.inputControl.onChange(this.onInputControlChange);
    }

    componentWillUnmount(): void {
        this.props.inputControl.unsubscribe(this.onInputControlChange);
    }
    
    render(): JSX.Element {
        const {label, inputControl: control, ...others} = this.props;
        const error: boolean = control.isError();
        return <FormControl required error={error} margin="normal">
            <InputLabel htmlFor={label}>
                {TranslationService.getTranslation().inputLabel[label]}
            </InputLabel>
            <Input id={label} {...others} value={control.getValue()} onChange={this.onChange}/>
            <FormHelperText>
                {control.getInputErrorMessage()}
            </FormHelperText>
        </FormControl>
    }
}

export default RequiredInput;