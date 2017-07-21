import Nullable from "./../types/Nullable";
import Observable from "./../Observable";

class UserService extends Observable {
    private static service: Nullable<UserService> = null;

    private isLoggedIn: boolean;

    static getService(): UserService {
        if(UserService.service === null) {
            UserService.service = new UserService();
        }
        return UserService.service;
    }

    constructor() {
        super();
        this.isLoggedIn = false;
    }

    login(): void {
        if(!this.isLoggedIn) {
            this.isLoggedIn = true;
            this.emitChange();
        }
    }

    logout(): void {
        if(this.isLoggedIn) {
            this.isLoggedIn = false;
            this.emitChange();
        }
    }

    isUserLoggedIn(): boolean {
        return this.isLoggedIn;
    }
}

export default UserService;