import Nullable from "./../types/Nullable";
import Observable from "./../Observable";

class UserService extends Observable {
    private static service: Nullable<UserService> = null;

    private isLogedIn: boolean;

    static getService(): UserService {
        if(UserService.service === null) {
            UserService.service = new UserService();
        }
        return UserService.service;
    }

    constructor() {
        super();
        this.isLogedIn = false;
    }

    login(): void {
        if(!this.isLogedIn) {
            this.isLogedIn = true;
            this.emitChange();
        }
    }

    logout(): void {
        if(this.isLogedIn) {
            this.isLogedIn = false;
            this.emitChange();
        }
    }

    isUserLogedIn(): boolean {
        return this.isLogedIn;
    }
}

export default UserService;