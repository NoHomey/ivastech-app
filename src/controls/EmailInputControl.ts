import InputError from "./InputError";
import RequiredInputControl from "./RequiredInputControl";
import Nullable from "./../types/Nullable";

class EmailInputControl extends RequiredInputControl {
    private static emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    private validationTimeout: Nullable<number>;

    private static isValidateEmail(value: string): boolean {
        return EmailInputControl.emailRegex.test(value);
    }

    private fieldIsInvalidEmail: (value: string) => void;
    private validateEmail: () => void;

    private validateValue(): void {
        this.validationTimeout = null;
        if(this.value.length === 0) {
            return this.fieldIsRequired(this.value);
        }
        (EmailInputControl.isValidateEmail(this.value)
            ? this.fieldIsValid
            : this.fieldIsInvalidEmail
        )(this.value);
    }

    constructor() {
        super();
        this.validationTimeout = null;
        this.fieldIsInvalidEmail = this.setState.bind(this, true, InputError.email);
        this.validateEmail = this.validateValue.bind(this);
    }

    setInputValue(value: string): void {
        if(this.validationTimeout !== null) {
            clearTimeout(this.validationTimeout);
        }
        if((value.length === 0) && (this.value.length > 0)) {
            return this.fieldIsRequired(value);
        }
        if(EmailInputControl.isValidateEmail(value)) {
            return this.fieldIsValid(value);
        }
        this.setState(this.error, this.inputError, value);
        this.validationTimeout = setTimeout(this.validateEmail, 1000);
    }

    isValid(): Nullable<InputError> {
        const superIsValid = super.isValid();
        if(superIsValid !== null) {
            return superIsValid;
        }
        return EmailInputControl.isValidateEmail(this.value) ? null : InputError.email;
    }
}

export default EmailInputControl;