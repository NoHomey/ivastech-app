import * as React from "react";
import InputLabel from "material-ui/Input/InputLabel";
import createComponent from "./../../createComponent";
import Translations from "./../../translations/Translations";

const EmailInputLabel = createComponent(
    function(actions: {}, translations: Translations): JSX.Element {
        return <InputLabel htmlFor="email">
            {translations.inputLabel.email}
        </InputLabel>;
    }
);

export default EmailInputLabel;