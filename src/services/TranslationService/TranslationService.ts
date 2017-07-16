import Translation from "./Translation";
import Language from "./Language";
import en from "./translation/en";
import bg from "./translation/bg";
import Nullable from "./../../types/Nullable";

class TranslationService {
    private static service: Nullable<TranslationService> = null;

    private language: Language;

    private onChange: Nullable<() => void> = null;

    static getService(): TranslationService {
        if(TranslationService.service === null) {
            TranslationService.service = new TranslationService();
        }

        return TranslationService.service;
    }

    static getTranslation(): Translation {
        return TranslationService.getService().getTranslation();
    }

    constructor() {
        this.language = Language.EN;
    }

    onTranslationChange(onChange: () => void): void {
        this.onChange = onChange;
    }

    unsubscribe(): void {
        this.onChange = null;
    }

    getTranslation(): Translation {
        return this.language === Language.EN ? en : bg;
    }

    setTranslation(language: Language): void {
        this.language = language;
        if(this.onChange !== null) {
            this.onChange();
        }
    }
}

export default TranslationService;