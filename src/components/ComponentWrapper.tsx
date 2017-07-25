import * as React from "react";
import Translations from "./../translations/Translations";
import ForceUpdatable from "./../reactives/ForceUpdatable";
import ForceUpdatableReactivity from "./../reactives/ForceUpdatableReactivity";
import store from "./store";

type SingleOrArray<Type> = Type | Type[];

interface ComponentWrapperProps {
    component: (reactives: any, translation: Translations, props?: any) => JSX.Element;

    reactives?: SingleOrArray<string>;

    shouldUpdate?: boolean;

    props?: any;
}

function resolveReactivity(path: string): ForceUpdatableReactivity {
    if(path.indexOf('.') > 0) {
        let array = path.split('.');
        var access: any = store;
        for(let i = 0; i < array.length; ++i) {
            access = access[array[i]];
        }
        return access.reactivity;
    } else {
        return (store as any)[path].reactivity;
    }
}

type Unsubscribers = SingleOrArray<(wrapper: ForceUpdatable) => void>;

function subscribeToReactivity(this: ForceUpdatable, path: string): (wrapper: ForceUpdatable) => void {
    const reactivity = resolveReactivity(path);
    reactivity.subscribe(this);
    return reactivity.unsubscribe;
}

const {getTranslations} = store.language.actions;

class ComponentWrapper extends React.Component<ComponentWrapperProps> {
    private unsubscribers: Unsubscribers | null;

    private subscribe(): void {
        const {reactives} = this.props;
        if(reactives !== undefined) {
            if(reactives.constructor === Array) {
                this.unsubscribers = 
                    (reactives as string[]).map(subscribeToReactivity, this);
            } else {
                const reactivity = resolveReactivity(reactives as string);
                reactivity.subscribe(this);
                this.unsubscribers = reactivity.unsubscribe;
            }
        }
    }

    private unsubscribe(): void {
        if(this.unsubscribers !== null) {
            if(this.unsubscribers.constructor === Array) {
                for(let i: number = 0; i < this.unsubscribers.length; ++i) {
                    (this.unsubscribers as Array<(wrapper: ForceUpdatable) => void>)[i](this);
                }
            } else {
                (this.unsubscribers as (wrapper: ForceUpdatable) => void)(this);
            }
        }
    }

    constructor(props: ComponentWrapperProps) {
        super(props);
        this.unsubscribers = null;
        this.subscribe();
    }

    shouldComponentUpdate(): boolean {
        return this.props.shouldUpdate === undefined ? true : false;
    }

    componentWillUnmount(): void {
        this.unsubscribe();
    }

    render(): JSX.Element {
        return this.props.component(store, getTranslations(), this.props.props);
    }   
}

export default ComponentWrapper;