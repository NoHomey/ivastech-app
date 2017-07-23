import * as React from "react";
import Button from "material-ui/Button";
import createComponent from "./../createComponent";
import Translations from "./../translations/Translations";
import {OpenActions} from "./../reactives/openReactive";

interface Actions {
    registerDialog: OpenActions;
}

const RegisterButton = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Button
            color="contrast"
            onClick={actions.registerDialog.actions.open}>
                {translations.register}
        </Button>;
    }
);

export default RegisterButton;