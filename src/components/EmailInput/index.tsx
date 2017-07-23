import * as React from "react";
import FormControl from "material-ui/Form/FormControl";
import createComponent from "./../../createComponent";
import Translations from "./../../translations/Translations";
import {EmailErrorActions} from "./../../reactives/emailError";

import EmailInputLabel from "./EmailInputLabel";
import EmailInput from "./EmailInput";
import EmailError from "./EmailError";

interface Actions {
    emailError: EmailErrorActions;
}

const Input = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <FormControl required margin="normal"
            error={actions.emailError.actions.isInvalid()}>
                <EmailInputLabel/>
                <EmailInput/>
                <EmailError/>
        </FormControl>;
    }, "emailError"
);

export default Input;