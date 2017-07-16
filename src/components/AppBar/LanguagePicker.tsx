import * as React from "react";
import ContrastButton from "./ContrastButton";
import Menu, {MenuItem} from "material-ui/Menu";
import TranslationService from "./../../services/TranslationService/TranslationService";
import Language from "./../../services/TranslationService/Language";
import Nullable from "./../../types/Nullable";

type BasicSyntheticEvent = React.SyntheticEvent<HTMLElement>;

class LanguagePicker extends React.Component {
    private static languages: Language[] = [Language.BG, Language.EN];
    private isLanguageMenuOpen: boolean;
    private menuAnchorElement: Nullable<EventTarget & HTMLElement>;
    private openLanguageMenu: React.EventHandler<BasicSyntheticEvent>;
    private closeLanguageMenu: () => void;


    private static sortLanguages(a: Language, b: Language): number {
        const language: Language = TranslationService.getService().getLanguage();
        if(a === language) {
                return -1;
        }
        if(b === language) {
            return 1;
        }
        return 0;
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
    }

    render(): JSX.Element {
        const service: TranslationService = TranslationService.getService();
        if(this.isLanguageMenuOpen) {
            LanguagePicker.languages.sort(LanguagePicker.sortLanguages);
        }
        return <div>
            <ContrastButton onClick={this.openLanguageMenu}>
                {`${service.getTranslation().language}: ${service.getLanguage()}`}
            </ContrastButton>
            <Menu
                anchorEl={this.menuAnchorElement!}
                open={this.isLanguageMenuOpen}
                onRequestClose={this.closeLanguageMenu}
            >
                {LanguagePicker.languages.map<JSX.Element>((language: Language, index: number) =>
                    <MenuItem onClick={this.setLanguage.bind(this, language)} key={index}>
                        {service.getTranslation().translation[language]}
                    </MenuItem>
                )}
            </Menu>
        </div>
    }
}

export default LanguagePicker;