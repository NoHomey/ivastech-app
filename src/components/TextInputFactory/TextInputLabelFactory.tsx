import * as React from "react";
import InputLabel from "material-ui/Input/InputLabel";
import createComponent from "./../../createComponent";
import Translations from "./../../translations/Translations";
import TextInputType from "./TextInputType";

function TextInputLabelFactory(field: TextInputType): (props: {}) => JSX.Element {
    return createComponent(
        function(actions: {}, translations: Translations): JSX.Element {
            return <InputLabel htmlFor={field}>
                {translations.inputLabel[field]}
            </InputLabel>;
        }
    );
}

export default TextInputLabelFactory;