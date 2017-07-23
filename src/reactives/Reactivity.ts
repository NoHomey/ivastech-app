import ForceUpdatable from "./ForceUpdatable";

interface Reactivity<Actions, Externals = {}> {
    actions: Actions;

    reactivity: {
        subscribe: (observer: ForceUpdatable) => void;

        unsubscribe: (observer: ForceUpdatable) => void;
    };

    externals?: Externals;
}

export default Reactivity;