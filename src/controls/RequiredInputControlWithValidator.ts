import InputError from "./InputError";
import RequiredInputControl from "./RequiredInputControl";
import Nullable from "./../types/Nullable";

abstract class RequiredInputControlWithValidator extends RequiredInputControl {
    protected abstract validator(value: string): boolean;

    private validatorError: InputError;
    private validationTimeout: Nullable<number>;
    private fieldIsInvalid: (value: string) => void;
    protected validateField: () => void;

    private validateValue(): void {
        this.validationTimeout = null;
        if(this.value.length === 0) {
            return this.fieldIsRequired(this.value);
        }
        (this.validator(this.value)
            ? this.fieldIsValid
            : this.fieldIsInvalid
        )(this.value);
    }

    constructor(validatorError: InputError) {
        super();
        this.validatorError = validatorError;
        this.validationTimeout = null;
        this.fieldIsInvalid = this.setState.bind(this, true, validatorError);
        this.validateField = this.validateValue.bind(this);
    }

    setInputValue(value: string): void {
        if(this.validationTimeout !== null) {
            clearTimeout(this.validationTimeout);
            this.validationTimeout = null;
        }
        if((value.length === 0) && (this.value.length > 0)) {
            return this.fieldIsRequired(value);
        }
        if(this.validator(value)) {
            return this.fieldIsValid(value);
        }
        this.setState(this.error, this.inputError, value);
        this.validationTimeout = setTimeout(this.validateField, 1000);
    }

    isValid(): Nullable<InputError> {
        const superIsValid = super.isValid();
        if(superIsValid !== null) {
            return superIsValid;
        }
        return this.validator(this.value) ? null : this.validatorError;
    }
}

export default RequiredInputControlWithValidator;