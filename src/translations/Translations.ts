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
        oldPassword: string;
        newPassword: string;
        confirmNewPassword: string;
    },
    order: string;
    orders: string;
    templates: string;
    addresses: string;
    changePassword: string;
    changeEmail: string;
    logout: string;
    addNew: string;
    name: string;
    info: string;
    edit: string;
    delete: string;
    page: string;
    id: string;
    orderDate: string;
    delivaryDate: string;
    price: string;
    status: string;
}

export default Translations;