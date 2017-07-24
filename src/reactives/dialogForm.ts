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

interface Externals {
    form: (
        dialogActions: OpenActions,
        inputsActions: TextInputActions[],
        errorsActions: TextInputErrorActions[]
    ) => void;
}

type DialogFormActions = Actions<DialogForm>;

function dialogForm(): Reactivity<DialogForm, Externals> {
    const submitForm = new ReactiveProperty<null>(null);

    let dialog: OpenActions;
    let inputs: TextInputActions[];
    let errors: TextInputErrorActions[];

    function isFormInvalid(): boolean {
        for(let i = 0; i < errors.length; ++i) {
            if(errors[i].actions.isInvalid()) {
                return true;
            }
        }
        return false;
    }

    function reset(resetables: Array<{actions: {reset: () => void}}>): void {
        for(let i = 0; i < resetables.length; ++i) {
            resetables[i].actions.reset();
        }
    }

    function lock(lockables: Array<{actions: {lock: () => void}}>): void {
        for(let i = 0; i < lockables.length; ++i) {
            lockables[i].actions.lock();
        }
    }

    function unlock(unlockables: Array<{actions: {unlock: () => void}}>): void {
        for(let i = 0; i < unlockables.length; ++i) {
            unlockables[i].actions.unlock();
        }
    }

    return reactivityCreator(submitForm, {
        isFormInvalid: isFormInvalid,

        submit: function(): void {
            lock(inputs);
            lock(errors);
            if(!isFormInvalid()) {
                dialog.actions.close();
            }
            unlock(errors);
            unlock(inputs);
        }
    }, {
        form: function(
            dialogActions: OpenActions,
            inputsActions: TextInputActions[],
            errorsActions: TextInputErrorActions[]
        ): void {
            const {close} = dialogActions.actions;

            dialog = dialogActions;
            inputs = inputsActions;
            errors = errorsActions;

            dialog.actions.close = function(): void {
                close();
                reset(inputs);
                reset(errors);
            }
        }
    });
}

export {DialogFormActions};

export default dialogForm;