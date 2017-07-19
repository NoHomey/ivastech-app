import * as React from "react";
import AppBar from "./AppBar/AppBar";
import LayoutContainer from "./LayoutContainer";
import LayoutItem from "./LayoutItem";
import TranslationService from "./../services/TranslationService/TranslationService";
import UserService from "./../services/UserService";

/*const style: {appContainer: React.CSSProperties} = {
    appContainer: {marginLeft: 200}
};*/

class App extends React.Component {
    private reRender: () => void;

    constructor() {
        super();
        this.reRender = this.forceUpdate.bind(this);
        TranslationService.getService().onTranslationChange(this.reRender);
        UserService.getService().onChange(this.reRender);
    }

    componentWillUnmount(): void {
        TranslationService.getService().unsubscribe(this.reRender);
        UserService.getService().unsubscribe(this.reRender);
    }

    render(): JSX.Element {
        return <div>
            <AppBar/>
            <div>
                <LayoutContainer>
                    <LayoutItem>
                        <div style={{width: 200, height: 200, backgroundColor: "red"}}/>
                    </LayoutItem>
                </LayoutContainer>
            </div>
        </div>
    }
}

export default App;