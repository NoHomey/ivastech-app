import ForceUpdatable from "./ForceUpdatable";

interface ForceUpdatableReactivity {
    subscribe: (observer: ForceUpdatable) => void;

    unsubscribe: (observer: ForceUpdatable) => void;
}

export default ForceUpdatableReactivity;