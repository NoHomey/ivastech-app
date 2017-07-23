import * as React from "react";
import Button from "material-ui/Button";
import createComponent from "./../createComponent";
import Translations from "./../translations/Translations";
import {LanguageActions} from "./../reactives/language";
import {LanguageMenuActions} from "./../reactives/languageMenu";

interface Actions {
    language: LanguageActions;

    languageMenu: LanguageMenuActions;
}

const LanguagePickerButton = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Button color="contrast" onClick={actions.languageMenu.actions.open}>
            {`${translations.language}: ${actions.language.actions.languageCode()}`}
        </Button>;
    }
);

export default LanguagePickerButton;