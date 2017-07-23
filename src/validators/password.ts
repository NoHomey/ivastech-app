import InputErrors from "./InputErrors";

function passwordValidator(inputValue: () => string): InputErrors {
    return inputValue().length === 0 ? InputErrors.required : InputErrors.valid;
}

export default passwordValidator;