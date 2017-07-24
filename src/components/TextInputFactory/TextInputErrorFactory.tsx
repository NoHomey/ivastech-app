import * as React from "react";
import FormHelperText from "material-ui/Form/FormHelperText";
import createComponent, {ReactivesKey} from "./../../createComponent";
import Translations from "./../../translations/Translations";
import Actions from "./Actions";
import TextInputType from "./TextInputType";

function TextInputErrorFactory(field: TextInputType): (props: {}) => JSX.Element {
    const fieldError = field + "Error";
    return createComponent(
        function(actions: Actions, translations: Translations): JSX.Element {
            return <FormHelperText>
                {translations.inputErrors[actions[fieldError].actions.errorCode()]}
            </FormHelperText>;
        }, fieldError as ReactivesKey
    );
}

export default TextInputErrorFactory;