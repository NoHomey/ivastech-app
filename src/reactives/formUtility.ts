import Actions from "./../reactives/Actions";
import {OpenActions} from "./openReactive";

interface Form {
    isFormInvalid: () => boolean;

    submit: () => void;
}

interface Resetable {
    reset: () => void;
}

interface InputError extends Resetable {
    isInvalid: () => boolean;

    onBlur: () => void;
}

interface InputActions {
    input: Actions<Resetable>;
    error: Actions<InputError>;
}

interface Externals {
    form: (
        dialogActions: OpenActions,
        inputs: InputActions[]
    ) => void;
}

function isFormInvalid(inputs: InputActions[]): boolean {
    for(let i = 0; i < inputs.length; ++i) {
        if(inputs[i].error.actions.isInvalid()) {
            return true;
        }
    }
    return false;
}

function blurInputs(inputs: InputActions[]): void {
    for(let i = 0; i < inputs.length; ++i) {
        inputs[i].error.actions.onBlur();
    }
}

function resetInputs(inputs: InputActions[]): void {
    for(let input of inputs) {
        input.input.actions.reset();
        input.error.actions.reset();
    }
}

type FormActions = Actions<Form>;

export {
    Form,
    InputActions,
    Externals,
    isFormInvalid,
    blurInputs,
    resetInputs,
    FormActions
};
