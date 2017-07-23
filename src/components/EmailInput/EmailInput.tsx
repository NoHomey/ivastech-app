import * as React from "react";
import Input from "material-ui/Input";
import createComponent from "./../../createComponent";
import Translations from "./../../translations/Translations";
import {EmailInputActions} from "./../../reactives/emailInput";
import {EmailErrorActions} from "./../../reactives/emailError";

interface Actions {
    emailInput: EmailInputActions;

    emailError: EmailErrorActions;
}

const EmailInput = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Input
            id="email"
            value={actions.emailInput.actions.value()}
            onChange={actions.emailInput.actions.onChange}
            onBlur={actions.emailError.actions.onBlur}
            onFocus={actions.emailError.actions.clear}>
        </Input>;
    }, "emailInput"
);

export default EmailInput;