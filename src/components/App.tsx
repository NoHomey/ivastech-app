import * as React from "react";
import AppBar from "./AppBar/AppBar";
import TranslationService from "./../services/TranslationService/TranslationService";

class App extends React.Component {
    constructor() {
        super();
        TranslationService.getService().onTranslationChange(this.forceUpdate.bind(this));
    }

    componentWillUnmount(): void {
        TranslationService.getService().unsubscribe();
    }

    render(): JSX.Element {
        return <AppBar/>;
    }
}

export default App;