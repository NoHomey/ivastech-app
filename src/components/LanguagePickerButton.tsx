import * as React from "react";
import Button from "material-ui/Button";
import ComponentWrapper from "./ComponentWrapper";
import Translations from "./../translations/Translations";
import {LanguageActions} from "./../reactives/language";
import {LanguageMenuActions} from "./../reactives/languageMenu";

interface Actions {
    language: LanguageActions;

    languageMenu: LanguageMenuActions;
}

function LanguagePickerButton(actions: Actions, translations: Translations): JSX.Element {
    return <Button color="contrast" onClick={actions.languageMenu.actions.open}>
        {`${translations.language}: ${actions.language.actions.languageCode()}`}
    </Button>;
}

function LanguagePickerButtonComponent(): JSX.Element {
    return <ComponentWrapper component={LanguagePickerButton}/>;
}

export default LanguagePickerButtonComponent;