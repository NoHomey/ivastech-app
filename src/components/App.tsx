import * as React from "react";
import AppBar from "./AppBar";
import LanguagePickerMenu from "./LanguagePickerMenu";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import SideNav from "./SideNav";
import ChangePasswordDialog from "./ChangePasswordDialog";
import AppContent from "./AppContent";
import ComponentWrapper from "./ComponentWrapper";

function App(): JSX.Element {
    return <div>
        <AppBar/>
        <AppContent/>
        <LanguagePickerMenu/>
        <LoginDialog/>
        <RegisterDialog/>
        <SideNav/>
        <ChangePasswordDialog/>
    </div>;
}

const reactives = ["language", "login"];

function AppComponent(): JSX.Element {
    return <ComponentWrapper component={App} reactives={reactives}/>;
}

export default AppComponent;