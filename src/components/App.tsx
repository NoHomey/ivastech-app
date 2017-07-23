
import * as React from "react";
import AppBar from "./AppBar";
import LanguagePickerMenu from "./LanguagePickerMenu";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import SideNav from "./SideNav";
import createComponent from "./../createComponent";

const App = createComponent(
    function(): JSX.Element {
        return <div>
            <AppBar/>
            <LanguagePickerMenu/>
            <LoginDialog/>
            <RegisterDialog/>
            <SideNav/>
        </div>;
    }, ["language"]
);

export default App;