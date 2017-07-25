import * as React from "react";
import Button from "material-ui/Button";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import {DialogFormActions} from "./../../reactives/dialogForm";

interface Actions {
    register: DialogFormActions;
}

function RegisterButton(actions: Actions, translations: Translations): JSX.Element {
    return <Button color="primary" onClick={actions.register.actions.submit}>
        {translations.register}
    </Button>;
}

function RegisterButtonComponent(): JSX.Element {
    return <ComponentWrapper component={RegisterButton}/>;
}

export default RegisterButtonComponent;