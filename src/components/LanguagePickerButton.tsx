import * as React from "react";
import Button from "material-ui/Button";
import createComponent from "./../createComponent";
import Translations from "./../translations/Translations";
import Actions from "./../reactives/Actions";
import {LanguageReactivity} from "./../reactives/language";
import {LanguageMenuReactivity} from "./../reactives/languageMenu";

interface LanguagePickerButtonActions {
    language: Actions<LanguageReactivity>;

    languageMenu: Actions<LanguageMenuReactivity>;
}

const LanguagePickerButton = createComponent<LanguagePickerButtonActions>(
    function(actions: LanguagePickerButtonActions, translations: Translations): JSX.Element {
        return <Button color="contrast" onClick={actions.languageMenu.actions.open}>
            {`${translations.language}: ${actions.language.actions.languageCode()}`}
        </Button>;
    }
);

export default LanguagePickerButton;