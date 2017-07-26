import * as React from "react";
import InputLabel from "material-ui/Input/InputLabel";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import TextInputType from "./TextInputType";
import TextInputLabelType from "./TextInputLabelType";

interface Props {
    field: TextInputType;
    label?: TextInputLabelType;
}

function TextInputLabel(actions: {}, translations: Translations, props: Props): JSX.Element {
    const key: TextInputLabelType = props.label === undefined ? props.field : props.label; 
    return <InputLabel htmlFor={props.field}>
        {translations.inputLabel[key]}
    </InputLabel>;
}

function TextInputLabelComponent(props: Props): JSX.Element {
    return <ComponentWrapper component={TextInputLabel} props={props}/>;
}

export default TextInputLabelComponent;