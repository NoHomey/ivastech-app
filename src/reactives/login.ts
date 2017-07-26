import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";
import {OpenActions} from "./openReactive";
import * as formUtility from "./formUtility";

interface Login {
    login: () => void;

    logout: () => void;

    isUserLoggedIn: () => boolean;
}

type LoginActions = Actions<Login>;

function login(): Reactivity<Login, formUtility.Externals> {
    const loggedIn = new ReactiveProperty<boolean>(false);

    let dialog: OpenActions;
    let inputs: formUtility.InputActions[];

    function isLoginFormValid(): boolean {
        return formUtility.isFormInvalid(inputs);
    }

    return reactivityCreator(loggedIn, {
        login: function(): void {
            formUtility.blurInputs(inputs);
            if(!isLoginFormValid()) {
                formUtility.resetInputs(inputs);
                dialog.actions.ensureClose();
                loggedIn.value = true;
            }
        },

        logout: function(): void {
            loggedIn.value = false;
        },

        isUserLoggedIn: function(): boolean {
            return loggedIn.value;
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

export {LoginActions}

export default login;