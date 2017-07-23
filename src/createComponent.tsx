import * as React from "react";
import Translations from "./translations/Translations";
import ForceUpdatable from "./reactives/ForceUpdatable";
import language from "./reactives/language";
import languageMenu from "./reactives/languageMenu";
import open from "./reactives/openReactive";
import emailInput from "./reactives/emailInput";
import emailError from "./reactives/emailError";

const store = {
    language: language(),
    languageMenu: languageMenu(),
    sideNav: open(),
    loginDialog: open(),
    registerDialog: open(),
    emailInput: emailInput(),
    emailError: emailError()
};

type ReactivesKey = "language" | "languageMenu" | "sideNav" | "loginDialog"
    | "registerDialog" | "emailInput" | "emailError";

const {getTranslations} = store.language.actions;

store.language.reactivity.subscribe({
    forceUpdate: store.languageMenu.actions.ensureClose
});

store.emailError.externals!.emailInputValue(
    store.emailInput.actions.value
);

interface HOCProps {
    component: (reactives: any, translation: Translations, props: any) => JSX.Element;

    reactives?: ReactivesKey | ReactivesKey[];

    shouldUpdate: boolean;

    props: any;
}


const reactivityActions = {
    subscribe: function(this: ForceUpdatable, key: ReactivesKey): void {
        store[key].reactivity.subscribe(this);
    },

    unsubscribe: function(this: ForceUpdatable, key: ReactivesKey): void {
        store[key].reactivity.unsubscribe(this);
    },
};

function reactivesAction(action: "subscribe" | "unsubscribe"): (hoc: React.Component<HOCProps>) => void {
    return function(hoc: React.Component<HOCProps>): void {
        const {reactives} = hoc.props;
        if(reactives !== undefined) {
            if(reactives.constructor === Array) {
                (reactives as ReactivesKey[]).forEach(reactivityActions[action], hoc);
            } else {
                store[reactives as ReactivesKey].reactivity[action](hoc);
            }
        }
    }
}

const subscribe = reactivesAction("subscribe");

const unsubscribe = reactivesAction("unsubscribe");

class HOC extends React.Component<HOCProps> {
    constructor(props: HOCProps) {
        super(props);
        subscribe(this);
    }

    shouldComponentUpdate(): boolean {
        return this.props.shouldUpdate;
    }

    componentWillUnmount(): void {
        unsubscribe(this);
    }

    render(): JSX.Element {
        return this.props.component(store, getTranslations(), this.props.props);
    }   
}

function createComponent<Actions = {}, Props = {}>(
            component: (actions: Actions, translations: Translations, props: Props) => JSX.Element,
            reactives: undefined | ReactivesKey | ReactivesKey[] = undefined,
            shouldUpdate: boolean = true
        ) : (props: Props) => JSX.Element {
    return function(props: Props): JSX.Element {
        return <HOC reactives={reactives} component={component} props={props} shouldUpdate={shouldUpdate}/>;
    }
}

export default createComponent;