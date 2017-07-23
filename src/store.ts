import language from "./reactives/language";
import languageMenu from "./reactives/languageMenu";
import open from "./reactives/openReactive";
import textInput from "./reactives/textInput";
import textInputError from "./reactives/textInputError";
import login from "./reactives/login";

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
    login: login()
};

type StoreKey = "language" | "languageMenu" | "sideNav" | "loginDialog"
    | "registerDialog" | "emailInput" | "emailError" | "passwordInput"
    | "passwordError" | "login";

store.language.reactivity.subscribe({
    forceUpdate: store.languageMenu.actions.ensureClose
});

store.emailError.externals!.inputValue(
    store.emailInput.actions.value
);

store.passwordError.externals!.inputValue(
    store.passwordInput.actions.value
);

store.login.externals!.store(store);

export {StoreKey}

export default store;