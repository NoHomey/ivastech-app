import language from "./../reactives/language";
import languageMenu from "./../reactives/languageMenu";
import open from "./../reactives/openReactive";
import textInput from "./../reactives/textInput";
import textInputError from "./../reactives/textInputError";
import confirmPasswordInputError from "./../reactives/confirmPasswordInputError";
import login from "./../reactives/login";
import dialogForm from "./../reactives/dialogForm";
import emailValidator from "./../validators/email";
import passwordValidator from "./../validators/password";

const store = {
    language: language(),
    languageMenu: languageMenu(),
    sideNav: open(),
    loginDialog: open(),
    registerDialog: open(),
    changePasswordDialog: open(),
    email: {
        input: textInput(),
        error: textInputError(emailValidator),
    },
    password: {
        input: textInput(),
        error: textInputError(passwordValidator),
    },
    userPassword: {
        input: textInput(),
        error: textInputError(passwordValidator),
    },
    confirmPassword: {
        input: textInput(),
        error: confirmPasswordInputError(),
    },
    login: login(),
    register: dialogForm(),
    changePassword: dialogForm()
};

store.language.reactivity.subscribe({
    forceUpdate: store.languageMenu.actions.ensureClose
});

store.email.error.externals!.inputValue(
    store.email.input.actions.value
);

store.password.error.externals!.inputValue(
    store.password.input.actions.value
);

const logoutAction = store.login.actions.logout;

store.login.actions.logout = function(): void {
    store.sideNav.actions.ensureClose();
    logoutAction();
}

store.login.externals!.form(
    store.loginDialog,
    [store.email, store.password]
);

store.userPassword.error.externals!.inputValue(
    store.userPassword.input.actions.value
);

store.confirmPassword.error.externals!.inputValue(
    store.confirmPassword.input.actions.value
);

store.confirmPassword.error.externals!.passwordValue(
    store.userPassword.input.actions.value
);

store.confirmPassword.error.externals!.isPasswordValid(
    function(): boolean {
        return !store.userPassword.error.actions.isInvalid();
    }
);

const onUserPasswordBlur = store.userPassword.error.actions.onBlur;

store.userPassword.error.actions.onBlur = function(): void {
    onUserPasswordBlur();
    store.confirmPassword.error.actions.confirmPassword();
}

store.register.externals!.form(
    store.registerDialog,
    [store.email, store.userPassword, store.confirmPassword]
);

store.changePassword.externals!.form(
    store.changePasswordDialog,
    [store.password, store.userPassword, store.confirmPassword]
);

export default store;