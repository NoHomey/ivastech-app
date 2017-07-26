import Reactivity from "./Reactivity";
import ReactiveProperty from "./ReactiveProperty";
import ForceUpdatable from "./ForceUpdatable";
import Nullable from "./../types/Nullable";

function NOP(observer: ForceUpdatable): void { }

function reactivityCreator<Type, Actions, Externals = {}>(
        property: Nullable<ReactiveProperty<Type>>,
        actions: Actions,
        externals?: Externals
): Reactivity<Actions, Externals> {
    return {
        actions: actions,

        reactivity: {
            subscribe: property !== null ? function(observer: ForceUpdatable): void {
                property.subscribe(observer);
            } : NOP,
                
            unsubscribe: property !== null ? function(observer: ForceUpdatable): void {
                property.unsubscribe(observer);
            } : NOP
        },

        externals: externals
    };
}

export default reactivityCreator;