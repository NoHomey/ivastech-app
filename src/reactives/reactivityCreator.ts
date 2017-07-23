import Reactivity from "./Reactivity";
import ReactiveProperty from "./ReactiveProperty";
import ForceUpdatable from "./ForceUpdatable";

function reactivityCreator<Type, Actions, Externals = {}>(
        property: ReactiveProperty<Type>,
        actions: Actions,
        externals?: Externals
): Reactivity<Actions, Externals> {
    return {
        actions: actions,

        reactivity: {
            subscribe: function(observer: ForceUpdatable): void {
                property.subscribe(observer);
            },
                
            unsubscribe: function(observer: ForceUpdatable): void {
                property.unsubscribe(observer);
            }
        },

        externals: externals
    };
}

export default reactivityCreator;