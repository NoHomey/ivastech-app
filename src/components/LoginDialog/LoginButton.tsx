import * as React from "react";
import Button from "material-ui/Button";
import createComponent from "./../../createComponent"
import Translations from "./../../translations/Translations";
import {DialogFormActions} from "./../../reactives/dialogForm";

interface Actions {
    login: DialogFormActions;
}

const LoginDialog = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Button
                color="primary"
                onClick={actions.login.actions.submit}>
            {translations.login}
        </Button>;
    }
);

export default LoginDialog;