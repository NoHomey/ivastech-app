import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";
import InputErrors from "./InputErrors";

interface EmailError {
    onBlur: () => void;

    isInvalid: () => boolean;

    isValid: () => boolean;

    reset: () => void;

    error: () => InputErrors;

    clear: () => void;
}

interface Externals {
    emailInputValue: (value: () => string) => void;
}

type EmailErrorActions = Actions<EmailError>;

function emailError(): Reactivity<EmailError, Externals> {
    const error = new ReactiveProperty<InputErrors>(InputErrors.valid);

    let emailValue: () => string;

    const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return reactivityCreator(error, {
        onBlur: function(): void {
            const value = emailValue();
            if(value.length === 0) {
                error.value = InputErrors.required;
                return;
            }
            if(emailRegex.test(value)) {
                error.value = InputErrors.valid;
            } else {
                error.value = InputErrors.email;
            }
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
        emailInputValue: function(value: () => string): void {
            emailValue = value;
        }
    });
}

export {EmailErrorActions};

export default emailError;