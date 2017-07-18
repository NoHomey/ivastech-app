import InputError from "./InputError";
import RequiredInputControlWithValidator from "./RequiredInputControlWithValidator";
import RequiredInputControl from "./RequiredInputControl";
import InputFormControl from "./InputFormControl";
import InputControl from "./InputControl";
import Nullable from "./../types/Nullable";

class ConfirmPasswordInputControl extends RequiredInputControlWithValidator {
    private formControl: Nullable<InputFormControl>;
    private passwordControl: Nullable<RequiredInputControl>;

    protected validator(value: string): boolean {
        if(this.passwordControl!.isValid() !== null) {
            return false;
        }
        return this.passwordControl!.getValue() === value;
    }

    constructor(formControl: InputFormControl) {
        super(InputError.confirmPassword);
        this.formControl = formControl;
        this.passwordControl = null;
    }

    acquire(): void {
        this.passwordControl = this.formControl!.getInputControl(InputControl.password);
        this.passwordControl.onChange(this.validateField);
    }

    release(): void {
        this.passwordControl!.unsubscribe(this.validateField);
        this.passwordControl = null;
        this.formControl = null;
    }
}

export default ConfirmPasswordInputControl;