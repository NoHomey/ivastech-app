import * as React from "react";
import { MuiThemeProvider } from "material-ui/styles"
import AppBar from "./AppBar/AppBar";

class App extends React.Component {
    render(): JSX.Element {
        return <MuiThemeProvider>
            <AppBar/>
        </MuiThemeProvider>
    }
}

export default App;