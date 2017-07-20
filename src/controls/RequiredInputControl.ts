import BaseInputControl from "./BaseInputControl";
import InputError from "./InputError";
import Nullable from "./../types/Nullable";
import bindAllArgumentsExceptOneOf from "./../decorators/bindAllArgumentsExceptOneOf";


class RequiredInputControl extends BaseInputControl {

    @bindAllArgumentsExceptOneOf("setState", [true, InputError.required])
    protected fieldIsRequired(value: string): void { }

    constructor() {
        super();
    }

    isValid(): Nullable<InputError> {
        return this.value.length > 0 ? null : InputError.required;
    }

    setInputValue(value: string): void {
        if((value.length === 0) && (this.value.length > 0)) {
            return this.fieldIsRequired(value);
        }
        this.fieldIsValid(value);
    }
}

export default RequiredInputControl;