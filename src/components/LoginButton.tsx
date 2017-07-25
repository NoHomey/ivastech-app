import * as React from "react";
import Button from "material-ui/Button";
import ComponentWrapper from "./ComponentWrapper";
import Translations from "./../translations/Translations";
import {OpenActions} from "./../reactives/openReactive";

interface Actions {
    loginDialog: OpenActions;
}

function LoginButton(actions: Actions, translations: Translations): JSX.Element {
    return <Button
        color="contrast"
        onClick={actions.loginDialog.actions.open}>
            {translations.login}
    </Button>;
}

function LoginButtonComponent(): JSX.Element {
    return <ComponentWrapper component={LoginButton}/>;
}

export default LoginButtonComponent;