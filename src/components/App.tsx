import * as React from "react";
import AppBar from "./AppBar/AppBar";
import TranslationService from "./../services/TranslationService/TranslationService";

class App extends React.Component {
    private onTranslationChange: () => void;

    constructor() {
        super();
        this.onTranslationChange = this.forceUpdate.bind(this);
        TranslationService.getService().onTranslationChange(this.onTranslationChange);
    }

    componentWillUnmount(): void {
        TranslationService.getService().unsubscribe(this.onTranslationChange);
    }

    render(): JSX.Element {
        return <AppBar/>;
    }
}

export default App;