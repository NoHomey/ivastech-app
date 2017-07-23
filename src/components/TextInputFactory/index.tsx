import * as React from "react";
import FormControl from "material-ui/Form/FormControl";
import createComponent, {ReactivesKey} from "./../../createComponent";
import Translations from "./../../translations/Translations";
import Actions from "./Actions";
import TextInputType from "./TextInputType";

import TextInputLabelFactory from "./TextInputLabelFactory";
import TextInputFactory from "./TextInputFactory";
import TextInputErrorFactory from "./TextInputErrorFactory";

function InputFactory(field: TextInputType): (props: {}) => JSX.Element {
    const TextInputLabel = TextInputLabelFactory(field);
    const TextInput = TextInputFactory(field);
    const TextInputError = TextInputErrorFactory(field);
    const fieldError = field + "Error";
    return createComponent(
        function(actions: Actions, translations: Translations): JSX.Element {
            return <FormControl required margin="normal"
                error={actions[fieldError].actions.isInvalid()}>
                    <TextInputLabel/>
                    <TextInput/>
                    <TextInputError/>
            </FormControl>;
        }, fieldError as ReactivesKey
    )
}

export default InputFactory;