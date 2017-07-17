interface Translation {
    login: string;
    register: string;
    language: string;
    translation: string[];
    inputError: string[];
    inputLabel: {
        email: string;
        password: string;
        [index: string]: string;
    }
}

export default Translation;