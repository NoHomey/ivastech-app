import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Nullable from "./../types/Nullable";

type EventCurrentTarget = EventTarget & HTMLElement;

interface OpenEvent {
    currentTarget: EventCurrentTarget;
}

interface LanguageMenuReactivity {
    open: (event: OpenEvent) => void;

    close: () => void;

    ensureClose: () => void;

    isOpen: () => boolean;

    getMenuAnchorElement: () => Nullable<EventCurrentTarget>;
}

function languageMenu(): Reactivity<LanguageMenuReactivity> {
    const open = new ReactiveProperty<boolean>(false);

    let menuAnchorElement: Nullable<EventCurrentTarget> = null;

    return reactivityCreator(open, {
        open: function(event: OpenEvent): void {
            menuAnchorElement = event.currentTarget;
            open.value = true;
        },

        close: function(): void {
            menuAnchorElement = null;
            open.value = false;
        },

        ensureClose: function(): void {
            menuAnchorElement = null;
            open.set(false);
        },

        isOpen: function(): boolean {
            return open.value;
        },

        getMenuAnchorElement: function(): Nullable<EventCurrentTarget> {
            return menuAnchorElement;
        }
    });
}

export {LanguageMenuReactivity};

export default languageMenu;