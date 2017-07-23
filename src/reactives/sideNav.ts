import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";

interface SideNav {
    open: () => void;

    close: () => void;

    ensureClose: () => void;

    isOpen: () => boolean;
}

type SideNavActions = Actions<SideNav>;

function sideNav(): Reactivity<SideNav> {
    const open = new ReactiveProperty<boolean>(false);

    return reactivityCreator(open, {
        open: function(): void {
            open.value = true;
        },

        close: function(): void {
            open.value = false;
        },

        ensureClose: function(): void {
            open.set(false);
        },

        isOpen: function(): boolean {
            return open.value;
        }
    });
}

export {SideNavActions};

export default sideNav;