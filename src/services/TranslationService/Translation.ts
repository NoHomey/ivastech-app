interface Translation {
    login: string;
    register: string;
    language: string;
    translation: string[];
    inputError: string[];
    inputLabel: {
        email: string;
        password: string;
        confirmPassword: string;
        [index: string]: string;
    }
}

export default Translation;