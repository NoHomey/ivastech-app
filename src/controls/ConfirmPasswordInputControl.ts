import InputError from "./InputError";
import RequiredInputControlWithValidator from "./RequiredInputControlWithValidator";
import RequiredInputControl from "./RequiredInputControl";
import InputFormControl from "./InputFormControl";
import InputControl from "./InputControl";
import Nullable from "./../types/Nullable";

class ConfirmPasswordInputControl extends RequiredInputControlWithValidator {
    private formControl: Nullable<InputFormControl>;
    private passwordControl: Nullable<RequiredInputControl>;
    private onPasswordChange: () => void;

    protected validator(value: string): boolean {
        if(this.passwordControl!.isValid() !== null) {
            return false;
        }
        return this.passwordControl!.getValue() === value;
    }

    private handlePasswordChange(): void {
        if(this.value.length > 0) {
            (this.validator(this.value)
                ? this.fieldIsValid
                : this.fieldIsInvalid
            )(this.value);
        }
    }

    constructor(formControl: InputFormControl) {
        super(InputError.confirmPassword);
        this.formControl = formControl;
        this.passwordControl = null;
        this.onPasswordChange = this.handlePasswordChange.bind(this);
    }

    acquire(): void {
        this.passwordControl = this.formControl!.getInputControl(InputControl.password) as RequiredInputControl;
        this.passwordControl.onChange(this.onPasswordChange);
    }

    release(): void {
        this.passwordControl!.unsubscribe(this.onPasswordChange);
        this.passwordControl = null;
        this.formControl = null;
    }
}

export default ConfirmPasswordInputControl;