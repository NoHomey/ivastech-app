import * as React from "react";
import FormHelperText from "material-ui/Form/FormHelperText";
import createComponent from "./../../createComponent";
import Translations from "./../../translations/Translations";
import {EmailErrorActions} from "./../../reactives/emailError";

interface Actions {
    emailError: EmailErrorActions;
}

const EmailInput = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <FormHelperText>
            {translations.inputErrors[actions.emailError.actions.error()]}
        </FormHelperText>;
    }, "emailError"
);

export default EmailInput;