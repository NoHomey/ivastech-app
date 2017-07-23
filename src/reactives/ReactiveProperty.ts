import ForceUpdatable from "./ForceUpdatable";

function observe(observer: ForceUpdatable) {
    observer.forceUpdate();
}

class ReactiveProperty<Type> {
    constructor(value: Type) {
        this.observers = new Set<ForceUpdatable>();
        this.internalValue = value;
    }

    get value(): Type {
        return this.internalValue;
    }

    set value(value: Type) {
        if(this.internalValue !== value) {
            this.internalValue = value;
            this.notify();
        }
    }

    notify(): void {
        this.observers.forEach(observe);
    }
    
    set(value: Type): void {
        this.internalValue = value;
    }

    subscribe(observer: ForceUpdatable): void {
        this.observers.add(observer)
    }

    unsubscribe(observer: ForceUpdatable): void {
        this.observers.delete(observer);
    }

    private observers: Set<ForceUpdatable>;
    private internalValue: Type;
}

export default ReactiveProperty;