import * as React from "react";
import Button from "material-ui/Button";
import createComponent from "./../../createComponent"
import Translations from "./../../translations/Translations";
import {RegisterActions} from "./../../reactives/register";

interface Actions {
    register: RegisterActions;
}

const RegisterDialog = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Button
                color="primary"
                disabled={actions.register.actions.isRegisterFormInvalid()}
                onClick={actions.register.actions.register}>
            {translations.register}
        </Button>;
    }, ["emailError", "userPasswordError", "confirmPasswordError"]
);

export default RegisterDialog;