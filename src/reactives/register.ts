import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";
import {TextInputActions} from "./textInput";
import {TextInputErrorActions} from "./textInputError";
import {OpenActions} from "./openReactive";

interface Store {
    registerDialog: OpenActions;
    emailInput: TextInputActions,
    emailError: TextInputErrorActions,
    userPasswordInput: TextInputActions,
    userPasswordError: TextInputErrorActions,
    confirmPasswordInput: TextInputActions,
    confirmPasswordError: TextInputErrorActions
}

interface Register {
    isRegisterFormInvalid: () => boolean;

    register: () => void;
}

interface Externals {
    store: (store: Store) => void;
}

type RegisterActions = Actions<Register>;

function register(): Reactivity<Register, Externals> {
    const registerAction = new ReactiveProperty<null>(null);

    let storeActions: Store;

    function isRegisterFormInvalid(): boolean {
        return storeActions.emailError.actions.isInvalid()
            || storeActions.userPasswordError.actions.isInvalid()
            || storeActions.confirmPasswordError.actions.isInvalid();
    }

    return reactivityCreator(registerAction, {
        isRegisterFormInvalid: isRegisterFormInvalid,

        register: function(): void {
            storeActions.emailError.actions.onBlur();
            storeActions.userPasswordError.actions.onBlur();
            storeActions.confirmPasswordError.actions.onBlur();
            if(!isRegisterFormInvalid()) {
                storeActions.registerDialog.actions.close();
            }
        }
    }, {
        store: function(store: Store): void {
            const {close} = store.registerDialog.actions;

            storeActions = store;

            store.registerDialog.actions.close = function(): void {
                store.emailInput.actions.reset();
                store.emailError.actions.reset();
                store.userPasswordInput.actions.reset();
                store.userPasswordError.actions.reset();
                store.confirmPasswordInput.actions.reset();
                store.confirmPasswordError.actions.reset();
                close();
            }
        }
    });
}

export {RegisterActions};

export default register;