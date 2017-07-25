import * as React from "react";
import AppBar from "./AppBar";
import LanguagePickerMenu from "./LanguagePickerMenu";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import SideNav from "./SideNav";
import ComponentWrapper from "./ComponentWrapper";

function App(): JSX.Element {
    return <div>
        <AppBar/>
        <LanguagePickerMenu/>
        <LoginDialog/>
        <RegisterDialog/>
        <SideNav/>
    </div>;
}

function AppComponent(): JSX.Element {
    return <ComponentWrapper component={App} reactives="language"/>;
}

export default AppComponent;