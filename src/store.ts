import language from "./reactives/language";
import languageMenu from "./reactives/languageMenu";
import open from "./reactives/openReactive";
import textInput from "./reactives/textInput";
import textInputError from "./reactives/textInputError";
import confirmPasswordInputError from "./reactives/confirmPasswordInputError";
import dialogForm from "./reactives/dialogForm";

import emailValidator from "./validators/email";
import passwordValidator from "./validators/password";

const store = {
    language: language(),
    languageMenu: languageMenu(),
    sideNav: open(),
    loginDialog: open(),
    registerDialog: open(),
    emailInput: textInput(),
    emailError: textInputError(emailValidator),
    passwordInput: textInput(),
    passwordError: textInputError(passwordValidator),
    login: dialogForm(),
    userPasswordInput: textInput(),
    userPasswordError: textInputError(passwordValidator),
    confirmPasswordInput: textInput(),
    confirmPasswordError: confirmPasswordInputError(),
    register: dialogForm()
};

type StoreKey = "language" | "languageMenu" | "sideNav" | "loginDialog"
    | "registerDialog" | "emailInput" | "emailError" | "passwordInput"
    | "passwordError" | "login" | "userPasswordInput" | "userPasswordError"
    | "confirmPasswordInput" | "confirmPasswordError";

store.language.reactivity.subscribe({
    forceUpdate: store.languageMenu.actions.ensureClose
});

store.emailError.externals!.inputValue(
    store.emailInput.actions.value
);

store.passwordError.externals!.inputValue(
    store.passwordInput.actions.value
);

store.login.externals!.form(
    store.loginDialog,
    [store.emailInput, store.passwordInput],
    [store.emailError, store.passwordError]
);

store.userPasswordError.externals!.inputValue(
    store.userPasswordInput.actions.value
);

store.confirmPasswordError.externals!.inputValue(
    store.confirmPasswordInput.actions.value
);

store.confirmPasswordError.externals!.passwordValue(
    store.userPasswordInput.actions.value
);

store.confirmPasswordError.externals!.isPasswordValid(
    function(): boolean {
        return !store.userPasswordError.actions.isInvalid();
    }
);

const onUserPasswordBlur = store.userPasswordError.actions.onBlur;

store.userPasswordError.actions.onBlur = function(): void {
    onUserPasswordBlur();
    store.confirmPasswordError.actions.confirmPassword();
}

store.register.externals!.form(
    store.registerDialog,
    [store.emailInput, store.userPasswordInput, store.confirmPasswordInput],
    [store.emailError, store.userPasswordError, store.confirmPasswordError]
);

export {StoreKey}

export default store;