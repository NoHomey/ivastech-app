class Observable {
    private static observe(this: null, observer: () => void) {
        observer();
    }

    private observers: Set<() => void>;

    constructor() {
        this.observers = new Set();
    }

    onChange(observer: () => void): void {
        this.observers.add(observer);
    }

    unsubscribe(observer: () => void): void {
        this.observers.delete(observer);
    }

    protected emitChange(): void {
        this.observers.forEach(Observable.observe);
    }
}

export default Observable;
