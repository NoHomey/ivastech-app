import Nullable from "./../types/Nullable";
import Observable from "./../Observable";

class SideNavService extends Observable {
    private static service: Nullable<SideNavService> = null;

    private isSideNavOpen: boolean;

    public open: () => void;
    public close: () => void;

    private toggle(isOpen: boolean): void {
        if(this.isSideNavOpen !== isOpen) {
            this.isSideNavOpen = isOpen;
            this.emitChange();
        }
    }

    static getService(): SideNavService {
        if(SideNavService.service === null) {
            SideNavService.service = new SideNavService();
        }
        return SideNavService.service;
    }

    constructor() {
        super();
        this.isSideNavOpen = false;
        this.open = this.toggle.bind(this, true);
        this.close = this.toggle.bind(this, false);
    }

    isOpen(): boolean {
        return this.isSideNavOpen;
    }
}

export default SideNavService;