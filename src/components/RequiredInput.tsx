import * as React from "react";
import Input, {InputProps} from "material-ui/Input";
import InputLabel from "material-ui/Input/InputLabel";
import FormControl from "material-ui/Form/FormControl";
import FormHelperText from "material-ui/Form/FormHelperText";
import RequiredInputControl from "./../controls/RequiredInputControl";
import TranslationService from "./../services/TranslationService/TranslationService";

export interface InputControlProp {
    inputControl: RequiredInputControl;
}

export interface RequiredInputProps extends InputControlProp, InputProps {
    label: string;
}

class RequiredInput extends React.Component<RequiredInputProps> {
    private onChange: React.EventHandler<React.SyntheticEvent<HTMLInputElement>>;

    private handleChange(event: React.SyntheticEvent<HTMLInputElement>) {
        this.props.inputControl.setInputValue(event.currentTarget.value);
    }

    constructor(props: RequiredInputProps) {
        super(props);
        this.props.inputControl.onChange(this.forceUpdate.bind(this));
        this.onChange = this.handleChange.bind(this);
    }

    componentWillUnmount(): void {
        this.props.inputControl.unsubscribe();
    }
    
    render(): JSX.Element {
        const {label, inputControl: control, ...others} = this.props;
        const error: boolean = control.isError();
        return <FormControl required error={error} marginForm>
            <InputLabel required error={error} htmlFor={label}>
                {TranslationService.getTranslation().inputLabel[label]}
            </InputLabel>
            <Input
                required error={error} id={label} {...others}
                value={control.getValue()} onChange={this.onChange}/>
            <FormHelperText error={error}>
                {control.getInputErrorMessage()}
            </FormHelperText>
        </FormControl>
    }
}

export default RequiredInput;