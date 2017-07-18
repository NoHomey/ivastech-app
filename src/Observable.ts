class Observable {
    private static observe(this: null, observer: () => void) {
        observer();
    }

    private observers: Array<() => void>;

    constructor() {
        this.observers = [];
    }

    onChange(observer: () => void): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: () => void): void {
        const index = this.observers.indexOf(observer);
        if(index >= 0) {
            this.observers.splice(index, 1);
        }
    }

    protected emitChange(): void {
        this.observers.forEach(Observable.observe);
    }
}

export default Observable;