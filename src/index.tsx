import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import {App} from "./App";

function render(app: () => JSX.Element): void {
    ReactDOM.render(
        <AppContainer>
            {app()}
        </AppContainer>,
        document.getElementById("root")
    );
}

render(App);

if (module.hot) {
    module.hot.accept("./App", () =>
        render(require<{App: () => JSX.Element}>("./App").App)
    );
}
