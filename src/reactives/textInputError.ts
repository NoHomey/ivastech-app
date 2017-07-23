import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";
import InputErrors from "./../validators/InputErrors";

interface TextInputError {
    onBlur: () => void;

    isInvalid: () => boolean;

    isValid: () => boolean;

    reset: () => void;

    error: () => InputErrors;

    clear: () => void;
}

interface Externals {
    inputValue: (value: () => string) => void;
}

type TextInputErrorActions = Actions<TextInputError>;

function textInputError(validate: (value: () => string) => InputErrors): Reactivity<TextInputError, Externals> {
    const error = new ReactiveProperty<InputErrors>(InputErrors.valid);

    let inputValue: () => string;

    return reactivityCreator(error, {
        onBlur: function(): void {
            error.value = validate(inputValue);
        },

        isInvalid: function(): boolean {
            return error.value !== InputErrors.valid;
        },

        isValid: function(): boolean {
            return error.value === InputErrors.valid;
        },

        reset: function(): void {
            error.set(InputErrors.valid);
        },

        error: function(): InputErrors {
            return error.value;
        },

        clear: function(): void {
            error.value = InputErrors.valid;
        }
    },
    {
        inputValue: function(value: () => string): void {
            inputValue = value;
        }
    });
}

export {TextInputErrorActions};

export default textInputError;