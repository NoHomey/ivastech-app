import BaseInputControl, {ValidationResult} from "./BaseInputControl";
import RequiredInputControl from "./RequiredInputControl";
import EmailInputControl from "./EmailInputControl";
import ConfirmPasswordInputControl from "./ConfirmPasswordInputControl";
import InputControl from "./InputControl";

class InputFormControl {
    private static resetInputControl(inputControl: BaseInputControl): void {
        inputControl.reset();
    }

    public controls: InputControl[];
    public inputControls: BaseInputControl[];

    constructor(controls: InputControl[]) {
        this.controls = controls;
        this.inputControls = controls.map<BaseInputControl>((inputControl: InputControl): BaseInputControl => {
            switch(inputControl) {
                case InputControl.email: return new EmailInputControl();
                case InputControl.password: return new RequiredInputControl();
                case InputControl.confirmPassword: return new ConfirmPasswordInputControl(this)
            }
        });
    }

    acquire(): void {
        const index = this.controls.indexOf(InputControl.confirmPassword);
        if(index >= 0) {
            (this.inputControls[index] as ConfirmPasswordInputControl).acquire();
        }
    }

    release(): void {
        const index = this.controls.indexOf(InputControl.confirmPassword);
        if(index >= 0) {
            (this.inputControls[index] as ConfirmPasswordInputControl).release();
        }
    }

    reset(): void {
        this.inputControls.forEach(InputFormControl.resetInputControl);
    }

    getInputControl(inputControl: InputControl): BaseInputControl {
        return this.inputControls[this.controls.indexOf(inputControl)];
    }

    validate(): ValidationResult {
        let result: ValidationResult = {
            valid: true, shouldUpdate: false
        };
        this.inputControls.forEach((inputControl: BaseInputControl): void => {
            const validationResult = inputControl.validate();
            if(!validationResult.valid) {
                result.valid = false;
            }
            if(validationResult.shouldUpdate) {
                result.shouldUpdate = true;
            }
        });
        return result;
    }
}

export default InputFormControl;