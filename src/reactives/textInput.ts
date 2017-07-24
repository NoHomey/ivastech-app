import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";

type EventCurrentTarget = EventTarget & HTMLInputElement;

interface InputEvent {
    currentTarget: EventCurrentTarget;
}

interface TextInput {
    onChange: (event: InputEvent) => void;

    reset: () => void;

    value: () => string;

    lock: () => void;

    unlock: () => void;
}

type TextInputActions = Actions<TextInput>;

function textInput(): Reactivity<TextInput> {
    const input = new ReactiveProperty<string>("");

    let lock: boolean = false;

    return reactivityCreator(input, {
        onChange: function(event: InputEvent): void {
            if(!lock) {
                input.value = event.currentTarget.value;
            }
        },

        reset: function(): void {
            if(!lock) {
                input.set("");
            }
        },

        value: function(): string {
            return input.value;
        },

        lock: function(): void {
            lock = true;
        },

        unlock: function(): void {
            lock = false;
        }
    });
}

export {TextInputActions};

export default textInput;