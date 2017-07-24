interface Translations {
    login: string,
    register: string,
    language: string;
    languages: {
        EN: string;
        BG: string;
    };
    inputErrors: string[];
    inputLabel: {
        email: string;
        password: string;
        userPassword: string;
        confirmPassword: string;
    },
    order: string;
    orders: string;
    templates: string;
    addresses: string;
    changePassword: string;
    changeEmail: string;
    logout: string;
}

export default Translations;