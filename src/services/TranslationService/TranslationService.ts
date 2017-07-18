import Translation from "./Translation";
import Language from "./Language";
import en from "./translation/en";
import bg from "./translation/bg";
import Nullable from "./../../types/Nullable";
import Observable from "./../../Observable";

class TranslationService extends Observable {
    private static service: Nullable<TranslationService> = null;

    private language: Language;

    onTranslationChange: (onChange: () => void) => void;

    static getService(): TranslationService {
        if(TranslationService.service === null) {
            TranslationService.service = new TranslationService();
        }

        return TranslationService.service;
    }

    static getTranslation(): Translation {
        return TranslationService.getService().getTranslation();
    }

    private isLanguage(language: Language) {
        return this.language === language;
    }

    isLanguageEN: () => boolean;
    isLanguageBG: () => boolean;

    constructor() {
        super();
        this.onTranslationChange = this.onChange;
        this.language = Language.EN;
        this.isLanguageEN = this.isLanguage.bind(this, Language.EN);
        this.isLanguageBG = this.isLanguage.bind(this, Language.BG);
    }

    getTranslation(): Translation {
        return this.isLanguageEN() ? en : bg;
    }

    setLanguage(language: Language): boolean {
        const change: boolean = language !== this.language;
        if(change) {
            this.language = language;
            this.emitChange();
        }
        return change;
    }

    getLanguage(): Language {
        return this.language;
    }

    getLanguageCode(): "EN" | "BG" {
        return this.isLanguageEN() ? "EN" : "BG";
    }
}

export default TranslationService;