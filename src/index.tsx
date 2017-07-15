import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { MuiThemeProvider } from "material-ui/styles";
import App from "./App";

function render(app: () => JSX.Element): void {
    ReactDOM.render(
        <AppContainer>
            <MuiThemeProvider>
                {app()}
            </MuiThemeProvider>
        </AppContainer>,
        document.getElementById("root")
    );
}

render(App);

if (module.hot) {
    module.hot.accept("./App", () =>
        render(require<{default: () => JSX.Element}>("./App").default)
    );
}
