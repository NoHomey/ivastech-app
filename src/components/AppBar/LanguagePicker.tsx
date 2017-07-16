import * as React from "react";
import ContrastButton from "./ContrastButton";
import Menu, {MenuItem} from "material-ui/Menu";
import TranslationService from "./../../services/TranslationService/TranslationService";
import Language from "./../../services/TranslationService/Language";
import Nullable from "./../../types/Nullable";

type BasicSyntheticEvent = React.SyntheticEvent<HTMLElement>;

class LanguagePicker extends React.Component {
    private static languagesCount = 2;
    private static languages: Uint8Array = new Uint8Array(LanguagePicker.languagesCount);
    private isLanguageMenuOpen: boolean;
    private menuAnchorElement: Nullable<EventTarget & HTMLElement>;
    private openLanguageMenu: React.EventHandler<BasicSyntheticEvent>;
    private closeLanguageMenu: () => void;

    private static generateMenuItemKey(language: Language, index: number): number {
        return (language + 1) * 10 + index + 1;
    }

    private static sortLanguages(): void {
        const selectedLanguage: Language = TranslationService.getService().getLanguage();
        const indexOfSelectedLanguage: number = LanguagePicker.languages.indexOf(selectedLanguage);
        for(let index: number = 0; index < indexOfSelectedLanguage; ++index) {
            LanguagePicker.languages[index + 1] = LanguagePicker.languages[index];
        }
        LanguagePicker.languages[0] = selectedLanguage;
    }

    private setLanguage(language: Language): void {
        this.menuAnchorElement = null;
        this.isLanguageMenuOpen = false;
        if(!TranslationService.getService().setLanguage(language)) {
            this.forceUpdate();
        }
    }

    private changeState(open: boolean, event: Nullable<BasicSyntheticEvent>): void {
        this.menuAnchorElement = event ? event.currentTarget : null;
        this.isLanguageMenuOpen = open;
        this.forceUpdate();
    }

    constructor() {
        super();
        this.menuAnchorElement = null;
        this.isLanguageMenuOpen = false;
        this.openLanguageMenu = this.changeState.bind(this, true);
        this.closeLanguageMenu = this.changeState.bind(this, false, null);
        LanguagePicker.languages[0] = Language.EN;
        LanguagePicker.languages[1] = Language.BG;
    }

    render(): JSX.Element {
        const service: TranslationService = TranslationService.getService();
        if(this.isLanguageMenuOpen) {
            LanguagePicker.sortLanguages();
        }
        return <div>
            <ContrastButton onClick={this.openLanguageMenu}>
                {`${service.getTranslation().language}: ${service.getLanguageCode()}`}
            </ContrastButton>
            <Menu
                anchorEl={this.menuAnchorElement!}
                open={this.isLanguageMenuOpen}
                onRequestClose={this.closeLanguageMenu}
            >
                {Array.prototype.map.call(LanguagePicker.languages, (language: Language, index: number) =>
                    <MenuItem
                        onClick={this.setLanguage.bind(this, language)}
                        key={LanguagePicker.generateMenuItemKey(language, index)}>
                        {service.getTranslation().translation[language]}
                    </MenuItem>
                )}
            </Menu>
        </div>
    }
}

export default LanguagePicker;