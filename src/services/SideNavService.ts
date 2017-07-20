import Nullable from "./../types/Nullable";
import Observable from "./../Observable";
import bindAllArgumentsOf from "./../decorators/bindAllArgumentsOf";

class SideNavService extends Observable {
    private static service: Nullable<SideNavService> = null;

    private isSideNavOpen: boolean;

    static getService(): SideNavService {
        if(SideNavService.service === null) {
            SideNavService.service = new SideNavService();
        }
        return SideNavService.service;
    }

    private toggle(isOpen: boolean): void {
        if(this.isSideNavOpen !== isOpen) {
            this.isSideNavOpen = isOpen;
            this.emitChange();
        }
    }

    @bindAllArgumentsOf("toggle", [true])
    open(): void { }

    @bindAllArgumentsOf("toggle", [false])
    close(): void { }

    constructor() {
        super();
        this.isSideNavOpen = false;
    }

    isOpen(): boolean {
        return this.isSideNavOpen;
    }
}

export default SideNavService;