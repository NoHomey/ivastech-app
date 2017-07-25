import * as React from "react";
import InputLabel from "material-ui/Input/InputLabel";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import TextInputType from "./TextInputType";

interface Props {
    field: TextInputType;
}

function TextInputLabel(actions: {}, translations: Translations, props: Props): JSX.Element {
    return <InputLabel htmlFor={props.field}>
        {translations.inputLabel[props.field]}
    </InputLabel>;
}

function TextInputLabelComponent(props: Props): JSX.Element {
    return <ComponentWrapper component={TextInputLabel} props={props}/>;
}

export default TextInputLabelComponent;