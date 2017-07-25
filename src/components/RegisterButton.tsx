import * as React from "react";
import Button from "material-ui/Button";
import ComponentWrapper from "./ComponentWrapper";
import Translations from "./../translations/Translations";
import {OpenActions} from "./../reactives/openReactive";

interface Actions {
    registerDialog: OpenActions;
}

function RegisterButton(actions: Actions, translations: Translations): JSX.Element {
    return <Button
        color="contrast"
        onClick={actions.registerDialog.actions.open}>
            {translations.register}
    </Button>;
}

function RegisterButtonComponent(): JSX.Element {
    return <ComponentWrapper component={RegisterButton}/>;
}

export default RegisterButtonComponent;