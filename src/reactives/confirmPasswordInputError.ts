import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";
import InputErrors from "./../validators/InputErrors";

interface ConfirmPasswordInputError {
    onBlur: () => void;

    confirmPassword: () => void;

    displayError: () =>  boolean;

    isInvalid: () => boolean;

    reset: () => void;

    errorCode: () => InputErrors;

    onFocus: () => void;
}

interface Externals {
    inputValue: (value: () => string) => void;

    passwordValue: (value: () => string) => void;

    isPasswordValid: (isValid: () => boolean) => void;
}

type ConfirmPasswordInputErrorActions = Actions<ConfirmPasswordInputError>;

function confirmPasswordInputError(): Reactivity<ConfirmPasswordInputError, Externals> {
    const error = new ReactiveProperty<InputErrors>(InputErrors.valid);

    let isInvalid: boolean = false;

    let inputValue: () => string;

    let passwordValue: () => string;

    let isPasswordValid: () => boolean;

    function validate(): InputErrors {
        const value = inputValue();
        if(value.length === 0) {
            return InputErrors.required;
        }
        if(isPasswordValid()) {
            return value === passwordValue()
                    ? InputErrors.valid
                    : InputErrors.confirmPassword;
        }
        return error.value;
    }

    return reactivityCreator(error, {
        onBlur: function(): void {
            error.value = validate();
            isInvalid = error.value !== InputErrors.valid;
        },

        confirmPassword: function(): void {
            const value = inputValue();
            if((value.length > 0) && isPasswordValid()) {
                error.value = value === passwordValue()
                            ? InputErrors.valid
                            : InputErrors.confirmPassword;
            }
        },

        displayError: function(): boolean {
            return error.value !== InputErrors.valid;
        },

        isInvalid: function(): boolean {
            return isInvalid;
        },

        reset: function(): void {
            error.set(InputErrors.valid);
            isInvalid = false;
        },

        errorCode: function(): InputErrors {
            return error.value;
        },

        onFocus: function(): void {
            error.value = InputErrors.valid;
        }
    },
    {
        inputValue: function(value: () => string): void {
            inputValue = value;
        },

        passwordValue: function(value: () => string): void {
            passwordValue = value;
        },

        isPasswordValid: function(isValid: () => boolean): void {
            isPasswordValid = isValid;
        }
    });
}

export {ConfirmPasswordInputErrorActions};

export default confirmPasswordInputError;