import InputError from "./InputError";
import RequiredInputControlWithValidator from "./RequiredInputControlWithValidator";

class EmailInputControl extends RequiredInputControlWithValidator {
    private static emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    protected validator(value: string): boolean {
        return EmailInputControl.emailRegex.test(value);
    }

    constructor() {
        super(InputError.email);
    }
}

export default EmailInputControl;