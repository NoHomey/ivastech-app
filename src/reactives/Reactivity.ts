import ForceUpdatable from "./ForceUpdatable";

interface Reactivity<Actions> {
    actions: Actions;

    reactivity: {
        subscribe: (observer: ForceUpdatable) => void;

        unsubscribe: (observer: ForceUpdatable) => void;
    }
}

export default Reactivity;