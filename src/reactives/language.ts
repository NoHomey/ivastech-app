import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";

import Translations from "./../translations/Translations";
import en from "./../translations/en";
import bg from "./../translations/bg";

interface Language {
    setTranslationsToBG: () => void;

    setTranslationsToEN: () => void;

    isSelectedLanguageBG: () => boolean;

    languageCode: () => "BG" | "EN";

    getTranslations: () => Translations;
}

type LanguageActions = Actions<Language>;

enum Languages {
    BG,
    EN
}

function language(): Reactivity<Language> {
    const language = new ReactiveProperty<Languages>(Languages.EN);

    let languageCode: "BG" | "EN" = "EN";
    let translations: Translations = en;

    function setTranslations(code: "BG" | "EN", translationsFor: Translations, lang: Languages): () => void {
        return function(): void {
            languageCode = code;
            translations = translationsFor
            language.value = lang;
        }
    }

    return reactivityCreator(language, {
        setTranslationsToBG: setTranslations("BG", bg, Languages.BG),

        setTranslationsToEN: setTranslations("EN", en, Languages.EN),

        isSelectedLanguageBG: function(): boolean {
            return language.value === Languages.BG;
        },

        languageCode: function(): "BG" | "EN" {
            return languageCode;
        },

        getTranslations: function(): Translations {
            return translations;
        }
    });
}

export {LanguageActions};

export default language;