import * as React from "react";
import Button from "material-ui/Button";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import {FormActions} from "./../../reactives/formUtility";

interface Actions {
    changePassword: FormActions;
}

function ChangePasswordButton(actions: Actions, translations: Translations): JSX.Element {
    return <Button color="primary" onClick={actions.changePassword.actions.submit}>
        {translations.changePassword}
    </Button>;
}

function RegisterButtonComponent(): JSX.Element {
    return <ComponentWrapper component={ChangePasswordButton}/>;
}

export default RegisterButtonComponent;