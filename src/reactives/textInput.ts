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
}

type TextInputActions = Actions<TextInput>;

function textInput(): Reactivity<TextInput> {
    const input = new ReactiveProperty<string>("");

    return reactivityCreator(input, {
        onChange: function(event: InputEvent): void {
            input.value = event.currentTarget.value;
        },

        reset: function(): void {
            input.set("");
        },

        value: function(): string {
            return input.value;
        }
    });
}

export {TextInputActions};

export default textInput;