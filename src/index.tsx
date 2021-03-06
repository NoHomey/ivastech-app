import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";

function render(AppComponent: typeof App): void {
    ReactDOM.render(
        <AppContainer>
            <AppComponent/>
        </AppContainer>,
        document.getElementById("root")
    )
}

render(App);

if (module.hot) {
    module.hot.accept("./components/App", () =>
        render(require<{default: typeof App}>("./components/App").default)
    )
}
