import * as React from "react";
import FormHelperText from "material-ui/Form/FormHelperText";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import Actions from "./Actions";
import TextInputType from "./TextInputType";

interface Props {
    field: TextInputType;
}

function TextInputError(actions: Actions, translations: Translations, props: Props): JSX.Element {
    return <FormHelperText>
        {translations.inputErrors[actions[props.field].error.actions.errorCode()]}
    </FormHelperText>;
}

function TextInputErrorComponent(props: Props): JSX.Element {
    return <ComponentWrapper component={TextInputError} props={props}/>;
    // reactives={`${props.field}.error`} (parent updates aswell)
}

export default TextInputErrorComponent;