import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";
import {SyntheticEvent} from "react";

enum Tab {
    AboutUs,
    SmtStencilsTechDetails,
    ContactUs,
}

interface HomeTabSwitcher {
    switchTab: (event: SyntheticEvent<HTMLElement>, index: number) => void
    currentTab: () => Tab;
}

type HomeTabSwitcherActions = Actions<HomeTabSwitcher>;

function homeTabSwitcher(): Reactivity<HomeTabSwitcher> {
    const currentTab = new ReactiveProperty<Tab>(Tab.AboutUs);

    return reactivityCreator(currentTab, {
        switchTab: function(event: SyntheticEvent<HTMLElement>, index: number): void {
            currentTab.value = index;
        },
        currentTab: function(): Tab {
            return currentTab.value;
        }
    });
}

export {Tab, HomeTabSwitcherActions};

export default homeTabSwitcher;