import * as React from "react";
import FormControl from "material-ui/Form/FormControl";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import Actions from "./Actions";
import TextInputType from "./TextInputType";
import TextInputLabelType from "./TextInputLabelType";

import TextInputLabel from "./TextInputLabel";
import TextInput from "./TextInput";
import TextInputError from "./TextInputError";

interface Props {
    field: TextInputType;

    label?: TextInputLabelType;
}

const passwordRegex = /password/i;

const password = "password";

const text = "text";

function Input(actions: Actions, translations: Translations, props: Props): JSX.Element {
    return <FormControl required margin="normal"
        error={actions[props.field].error.actions.displayError()}>
        <TextInputLabel field={props.field} label={props.label}/>
        <TextInput
            field={props.field}
            type={passwordRegex.test(props.field) ? password : text}/>
        <TextInputError field={props.field}/>
    </FormControl>;
}

function InputComponent(props: Props): JSX.Element {
    return <ComponentWrapper
        component={Input}
        props={props}
        reactives={`${props.field}.error`}/>;
}

export default InputComponent;