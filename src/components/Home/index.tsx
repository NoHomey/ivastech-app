import * as React from "react";
import AppBar from "material-ui/AppBar";
import Tabs, {Tab} from "material-ui/Tabs";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import SmtStencilsTechDetails from "./SmtStencilsTechDetails";
import ComponentWrapper from "./../ComponentWrapper";
import {Tab as TabEnum, HomeTabSwitcherActions} from "./../../reactives/homeTabSwitcher";

interface Actions {
    homeTabSwitcher: HomeTabSwitcherActions;
}

function currentTab(tab: TabEnum): JSX.Element {
    switch(tab) {
        case TabEnum.AboutUs: return <AboutUs/>;
        case TabEnum.SmtStencilsTechDetails: return <SmtStencilsTechDetails/>;
        case TabEnum.ContactUs: return <ContactUs/>;
        default: return <div/>;
    }
}

function Home(actions: Actions): JSX.Element {
    const tab = actions.homeTabSwitcher.actions.currentTab();
    return <div>
        <AppBar position="static" color="default">
            <Tabs
                index={tab}
                onChange={actions.homeTabSwitcher.actions.switchTab}
                indicatorColor="primary"
                textColor="primary"
                fullWidth
                centered>
                <Tab label="About us"/>
                <Tab label="SMT Stencils technical details"/>
                <Tab label="Production stages"/>
                <Tab label="Equpment"/>
                <Tab label="Stencil types"/>
                <Tab label="Contact us"/>
            </Tabs>
        </AppBar>
        {currentTab(tab)}
    </div>;
}

function HomeComponent(): JSX.Element {
    return <ComponentWrapper component={Home} reactives="homeTabSwitcher"/>;
}

export default HomeComponent;