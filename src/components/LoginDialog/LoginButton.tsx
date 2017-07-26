import * as React from "react";
import Button from "material-ui/Button";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import {LoginActions} from "./../../reactives/login";

interface Actions {
    login: LoginActions;
}

function LoginButton(actions: Actions, translations: Translations): JSX.Element {
    return <Button color="primary" onClick={actions.login.actions.login}>
        {translations.login}
    </Button>;
}

function LoginButtonComponent(): JSX.Element {
    return <ComponentWrapper component={LoginButton}/>;
}

export default LoginButtonComponent;