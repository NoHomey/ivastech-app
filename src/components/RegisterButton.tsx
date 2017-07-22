import * as React from "react";
import Button from "material-ui/Button";
import createComponent from "./../createComponent";
import Translations from "./../translations/Translations";

const RegisterButton = createComponent<void>(
    function(actions: void, translations: Translations): JSX.Element {
        return <Button color="contrast">{translations.register}</Button>;
    }
);

export default RegisterButton;