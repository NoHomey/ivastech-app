import * as React from "react";
import Button from "material-ui/Button";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import {DialogFormActions} from "./../../reactives/dialogForm";

interface Actions {
    login: DialogFormActions;
}

function LoginButton(actions: Actions, translations: Translations): JSX.Element {
    return <Button color="primary" onClick={actions.login.actions.submit}>
        {translations.login}
    </Button>;
}

function LoginButtonComponent(): JSX.Element {
    return <ComponentWrapper component={LoginButton}/>;
}

export default LoginButtonComponent;