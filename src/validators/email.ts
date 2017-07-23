import InputErrors from "./InputErrors";

const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function emailValidator(inputValue: () => string): InputErrors {
    const value = inputValue();
    if(value.length === 0) {
        return InputErrors.required;
    }
    return emailRegex.test(value) ? InputErrors.valid : InputErrors.email;
}

export default emailValidator;