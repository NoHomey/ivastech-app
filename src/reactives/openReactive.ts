import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";

interface Open {
    open: () => void;

    close: () => void;

    ensureClose: () => void;

    isOpen: () => boolean;
}

type OpenActions = Actions<Open>;

function open(): Reactivity<Open> {
    const isOpen = new ReactiveProperty<boolean>(false);

    return reactivityCreator(isOpen, {
        open: function(): void {
            isOpen.value = true;
        },

        close: function(): void {
            isOpen.value = false;
        },

        ensureClose: function(): void {
            isOpen.set(false);
        },

        isOpen: function(): boolean {
            return isOpen.value;
        }
    });
}

export {OpenActions};

export default open;