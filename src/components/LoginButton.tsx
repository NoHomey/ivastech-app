import * as React from "react";
import Button from "material-ui/Button";
import createComponent from "./../createComponent";
import Translations from "./../translations/Translations";
import {OpenActions} from "./../reactives/openReactive";

interface Actions {
    loginDialog: OpenActions;
}

const LoginButton = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Button
            color="contrast"
            onClick={actions.loginDialog.actions.open}>
                {translations.login}
        </Button>;
    }
);

export default LoginButton;