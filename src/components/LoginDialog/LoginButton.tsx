import * as React from "react";
import Button from "material-ui/Button";
import createComponent from "./../../createComponent"
import Translations from "./../../translations/Translations";
import {LoginActions} from "./../../reactives/login";

interface Actions {
    login: LoginActions;
}

const LoginDialog = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Button
                color="primary"
                disabled={actions.login.actions.isLoginFormInvalid()}
                onClick={actions.login.actions.login}>
            {translations.login}
        </Button>;
    }, ["emailError", "passwordError"]
);

export default LoginDialog;