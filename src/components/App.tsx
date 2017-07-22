
import * as React from "react";
import AppBar from "./AppBar";
import LanguagePickerMenu from "./LanguagePickerMenu";
import SideNav from "./SideNav";
import createComponent from "./../createComponent";

const App = createComponent(
    function(): JSX.Element {
        return <div>
            <AppBar/>
            <LanguagePickerMenu/>
            <SideNav/>
        </div>;
    }, ["language"]
);

export default App;