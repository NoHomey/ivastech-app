import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import {OpenActions} from "./openReactive";
import * as formUtility from "./formUtility";

function dialogForm(): Reactivity<formUtility.Form, formUtility.Externals> {
    let dialog: OpenActions;
    let inputs: formUtility.InputActions[];

    function isFormValid(): boolean {
        return formUtility.isFormInvalid(inputs);
    }

    return reactivityCreator(null, {
        isFormInvalid: isFormValid,

        submit: function(): void {
            formUtility.blurInputs(inputs);
            if(!isFormValid()) {
                formUtility.resetInputs(inputs);
                dialog.actions.close();
            }
        }
    }, {
        form: function(
            dialogActions: OpenActions,
            inputsActions: formUtility.InputActions[]
        ): void {
            const {close} = dialogActions.actions;

            dialog = dialogActions;
            inputs = inputsActions;

            dialog.actions.close = function(): void {
                close();
                formUtility.resetInputs(inputs);
            }
        }
    });
}

export default dialogForm;