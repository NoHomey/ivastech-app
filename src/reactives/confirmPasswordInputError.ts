import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";
import InputErrors from "./../validators/InputErrors";

interface TextInputError {
    onBlur: () => void;

    confirmPassword: () => void;

    isInvalid: () => boolean;

    reset: () => void;

    error: () => InputErrors;

    onFocus: () => void;
}

interface Externals {
    inputValue: (value: () => string) => void;

    passwordValue: (value: () => string) => void;

    isPasswordValid: (isValid: () => boolean) => void;
}

type TextInputErrorActions = Actions<TextInputError>;

function textInputError(): Reactivity<TextInputError, Externals> {
    const error = new ReactiveProperty<InputErrors>(InputErrors.valid);

    let inputValue: () => string;

    let passwordValue: () => string;

    let isPasswordValid: () => boolean;

    return reactivityCreator(error, {
        onBlur: function(): void {
            const value = inputValue();
            if(value.length === 0) {
                error.value = InputErrors.required;
                return;
            }
            if(isPasswordValid()) {
                error.value = value === passwordValue()
                            ? InputErrors.valid
                            : InputErrors.confirmPassword;
            }
        },

        confirmPassword: function(): void {
            const value = inputValue();
            if((value.length > 0) && isPasswordValid()) {
                error.value = value === passwordValue()
                            ? InputErrors.valid
                            : InputErrors.confirmPassword;
            }
        },

        isInvalid: function(): boolean {
            return error.value !== InputErrors.valid;
        },

        reset: function(): void {
            error.set(InputErrors.valid);
        },

        error: function(): InputErrors {
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

export {TextInputErrorActions};

export default textInputError;