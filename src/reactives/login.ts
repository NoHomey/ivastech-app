import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";
import {TextInputActions} from "./textInput";
import {TextInputErrorActions} from "./textInputError";
import {OpenActions} from "./openReactive";

interface Store {
    loginDialog: OpenActions;
    emailInput: TextInputActions,
    emailError: TextInputErrorActions,
    passwordInput: TextInputActions,
    passwordError: TextInputErrorActions
}

interface Login {
    isLoginFormInvalid: () => boolean;

    login: () => void;
}

interface Externals {
    store: (store: Store) => void;
}

type LoginActions = Actions<Login>;

function login(): Reactivity<Login, Externals> {
    const loginAction = new ReactiveProperty<null>(null);

    let storeActions: Store;

    function isLoginFormInvalid(): boolean {
        return storeActions.emailError.actions.isInvalid()
            || storeActions.passwordError.actions.isInvalid();
    }

    return reactivityCreator(loginAction, {
        isLoginFormInvalid: isLoginFormInvalid,

        login: function(): void {
            storeActions.emailError.actions.onBlur();
            storeActions.passwordError.actions.onBlur();
            if(!isLoginFormInvalid()) {
                storeActions.loginDialog.actions.close();
            }
        }
    }, {
        store: function(store: Store): void {
            const {close} = store.loginDialog.actions;

            storeActions = store;

            store.loginDialog.actions.close = function(): void {
                store.emailInput.actions.reset();
                store.emailError.actions.reset();
                store.passwordInput.actions.reset();
                store.passwordError.actions.reset();
                close();
            }
        }
    });
}

export {LoginActions};

export default login;