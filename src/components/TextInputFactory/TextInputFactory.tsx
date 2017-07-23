import * as React from "react";
import Input from "material-ui/Input";
import createComponent, {ReactivesKey} from "./../../createComponent";
import Translations from "./../../translations/Translations";
import Actions from "./Actions";
import TextInputType from "./TextInputType";

function TextInputFactory(field: TextInputType): (props: {}) => JSX.Element {
    const fieldError = field + "Error";
    const fieldInput = field + "Input";
    return createComponent(
        function(actions: Actions, translations: Translations): JSX.Element {
            return <Input
                id={field}
                value={actions[fieldInput].actions.value()}
                onChange={actions[fieldInput].actions.onChange}
                onBlur={actions[fieldError].actions.onBlur}
                onFocus={actions[fieldError].actions.clear}>
            </Input>;
        }, fieldInput as ReactivesKey
    );
}

export default TextInputFactory;