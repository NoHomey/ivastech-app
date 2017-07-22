import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";

interface SideNavReactivity {
    open: () => void;

    close: () => void;

    ensureClose: () => void;

    isOpen: () => boolean;
}

function sideNav(): Reactivity<SideNavReactivity> {
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

export {SideNavReactivity};

export default sideNav;