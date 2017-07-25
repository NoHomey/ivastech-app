import ForceUpdatableReactivity from "./ForceUpdatableReactivity";

interface Reactivity<Actions, Externals = {}> {
    actions: Actions;

    reactivity: ForceUpdatableReactivity;

    externals?: Externals;
}

export default Reactivity;