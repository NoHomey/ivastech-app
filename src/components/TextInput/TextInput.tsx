import * as React from "react";
import Input from "material-ui/Input";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import Actions from "./Actions";
import TextInputType from "./TextInputType";

interface Props {
    field: TextInputType;
    type: "text" | "password";
}

function TextInput(actions: Actions, translations: Translations, props: Props): JSX.Element {
    return <Input
        id={props.field}
        type={props.type}
        value={actions[props.field].input.actions.value()}
        onChange={actions[props.field].input.actions.onChange}
        onBlur={actions[props.field].error.actions.onBlur}
        onFocus={actions[props.field].error.actions.onFocus}>
    </Input>;
}

function TextInputComponent(props: Props): JSX.Element {
    return <ComponentWrapper
        component={TextInput}
        props={props}
        reactives={`${props.field}.input`}/>;
}

export default TextInputComponent;