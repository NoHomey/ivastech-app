import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";

import Translations from "./../translations/Translations";
import en from "./../translations/en";
import bg from "./../translations/bg";

interface LanguageReactivity {
    setTranslationsToBG: () => void;

    setTranslationsToEN: () => void;

    isSelectedLanguageBG: () => boolean;

    languageCode: () => "BG" | "EN";

    getTranslations: () => Translations;
}

enum Language {
    BG,
    EN
}

function language(): Reactivity<LanguageReactivity> {
    const language = new ReactiveProperty<Language>(Language.EN);

    let languageCode: "BG" | "EN" = "EN";
    let translations: Translations = en;

    function setTranslations(code: "BG" | "EN", translationsFor: Translations, lang: Language): () => void {
        return function(): void {
            languageCode = code;
            translations = translationsFor
            language.value = lang;
        }
    }

    return reactivityCreator(language, {
        setTranslationsToBG: setTranslations("BG", bg, Language.BG),

        setTranslationsToEN: setTranslations("EN", en, Language.EN),

        isSelectedLanguageBG: function(): boolean {
            return language.value === Language.BG;
        },

        languageCode: function(): "BG" | "EN" {
            return languageCode;
        },

        getTranslations: function(): Translations {
            return translations;
        }
    });
}

export {LanguageReactivity};

export default language;