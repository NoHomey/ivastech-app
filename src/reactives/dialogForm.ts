import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";
import {TextInputActions} from "./textInput";
import {TextInputErrorActions} from "./textInputError";
import {OpenActions} from "./openReactive";

interface DialogForm {
    isFormInvalid: () => boolean;

    submit: () => void;
}

interface InputActions {
    input: TextInputActions;
    error: TextInputErrorActions;
}

interface Externals {
    form: (
        dialogActions: OpenActions,
        inputs: InputActions[]
    ) => void;
}

type DialogFormActions = Actions<DialogForm>;

function dialogForm(): Reactivity<DialogForm, Externals> {
    const submitForm = new ReactiveProperty<null>(null);

    let dialog: OpenActions;
    let inputs: InputActions[];

    function isFormInvalid(): boolean {
        for(let i = 0; i < inputs.length; ++i) {
            if(inputs[i].error.actions.isInvalid()) {
                return true;
            }
        }
        return false;
    }

    function blur(): void {
        for(let i = 0; i < inputs.length; ++i) {
            inputs[i].error.actions.onBlur();
        }
    }

    function reset(): void {
        for(let input of inputs) {
            input.input.actions.reset();
            input.error.actions.reset();
        }
    }

    return reactivityCreator(submitForm, {
        isFormInvalid: isFormInvalid,

        submit: function(): void {
            blur();
            if(!isFormInvalid()) {
                dialog.actions.close();
            }
        }
    }, {
        form: function(
            dialogActions: OpenActions,
            inputsActions: InputActions[]
        ): void {
            const {close} = dialogActions.actions;

            dialog = dialogActions;
            inputs = inputsActions;

            dialog.actions.close = function(): void {
                close();
                reset();
            }
        }
    });
}

export {DialogFormActions};

export default dialogForm;