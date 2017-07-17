import Nullable from "./types/Nullable";

class Observable {
    private observer: Nullable<() => void> = null;

    constructor() {
        this.observer = null;
    }

    onChange(observer: () => void): void {
        this.observer = observer;
    }

    unsubscribe(): void {
        this.observer = null;
    }

    protected emitChange(): void {
        if(this.observer !== null) {
            this.observer();
        }
    }
}

export default Observable;