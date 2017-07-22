import * as React from "react";
import Menu, {MenuItem} from "material-ui/Menu";
import createComponent from "./../createComponent";
import Translations from "./../translations/Translations";
import Actions from "./../reactives/Actions";
import {LanguageReactivity} from "./../reactives/language";
import {LanguageMenuReactivity} from "./../reactives/languageMenu";

interface LanguagePickerButtonActions {
    language: Actions<LanguageReactivity>;

    languageMenu: Actions<LanguageMenuReactivity>;
}

const LanguagePickerMenu = createComponent<LanguagePickerButtonActions>(
    function(actions: LanguagePickerButtonActions, translations: Translations): JSX.Element {
        return <Menu
                anchorEl={actions.languageMenu.actions.getMenuAnchorElement()!}
                open={actions.languageMenu.actions.isOpen()}
                onRequestClose={actions.languageMenu.actions.close}
            >
            {
                actions.language.actions.isSelectedLanguageBG()
                ? [
                        <MenuItem key={11}
                            onClick={actions.language.actions.setTranslationsToBG}>
                            {translations.languages.BG}
                        </MenuItem>,
                        <MenuItem key={12}
                            onClick={actions.language.actions.setTranslationsToEN}>
                            {translations.languages.EN}
                        </MenuItem>
                ] : [
                        <MenuItem key={22}
                            onClick={actions.language.actions.setTranslationsToEN}>
                            {translations.languages.EN}
                        </MenuItem>,
                        <MenuItem key={21}
                            onClick={actions.language.actions.setTranslationsToBG}>
                            {translations.languages.BG}
                        </MenuItem>
                ]
            }
        </Menu>
    }, "languageMenu"
);

export default LanguagePickerMenu;