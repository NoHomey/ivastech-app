import Reactivity from "./Reactivity";
import ReactiveProperty from "./ReactiveProperty";
import ForceUpdatable from "./ForceUpdatable";

function reactivityCreator<Type, Actions>(property: ReactiveProperty<Type>, actions: Actions): Reactivity<Actions> {
    return {
        actions: actions,

        reactivity: {
            subscribe: function(observer: ForceUpdatable): void {
                property.subscribe(observer);
            },
                
            unsubscribe: function(observer: ForceUpdatable): void {
                property.unsubscribe(observer);
            }
        }
    };
}

export default reactivityCreator;