interface Translation {
    login: string;
    register: string;
    language: string;
    translation: {
        en: string;
        bg: string;
        [index: string]: string;
    }
}

export default Translation;