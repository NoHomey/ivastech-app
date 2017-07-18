import InputError from "./InputError";
import RequiredInputControlWithValidator from "./RequiredInputControlWithValidator";
import InputFormControl from "./InputFormControl";
import InputControl from "./InputControl";
import Nullable from "./../types/Nullable";

class ConfirmPasswordInputControl extends RequiredInputControlWithValidator {
    private formControl: Nullable<InputFormControl>;

    protected validator(value: string): boolean {
        const passwordControl = this.formControl!.getInputControl(InputControl.password);
        if(passwordControl.isValid() !== null) {
            return false;
        }
        return passwordControl.getValue() === value;
    }

    constructor(formControl: InputFormControl) {
        super(InputError.confirmPassword);
        this.formControl = formControl;
    }

    release(): void {
        this.formControl = null;
    }
}

export default ConfirmPasswordInputControl;