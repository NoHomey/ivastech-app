import * as React from "react";
import Button from "material-ui/Button";
import createComponent from "./../../createComponent"
import Translations from "./../../translations/Translations";
import {DialogFormActions} from "./../../reactives/dialogForm";

interface Actions {
    register: DialogFormActions;
}

const RegisterDialog = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Button
                color="primary"
                disabled={actions.register.actions.isFormInvalid()}
                onClick={actions.register.actions.submit}>
            {translations.register}
        </Button>;
    }, ["emailError", "userPasswordError", "confirmPasswordError"]
);

export default RegisterDialog;