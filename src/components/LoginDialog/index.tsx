import * as React from "react";
import Dialog, {DialogContent, DialogActions} from "material-ui/Dialog";
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";
import LoginButton from "./LoginButton";
import TextInput from "./../TextInput";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import {OpenActions} from "./../../reactives/openReactive";

interface Actions {
    loginDialog: OpenActions;
}

function LoginDialog(actions: Actions, translations: Translations): JSX.Element {
    return <Dialog
        open={actions.loginDialog.actions.isOpen()}
        onRequestClose={actions.loginDialog.actions.close}>
        <DialogContent>
            <LayoutContainer direction="column">
                <LayoutItem>
                    <TextInput field="email"/>
                </LayoutItem>
                <LayoutItem>
                    <TextInput field="password"/>
                </LayoutItem>
            </LayoutContainer>
        </DialogContent>
        <DialogActions>
            <LoginButton/>
        </DialogActions>
    </Dialog>;
}

function LoginDialogComponent(): JSX.Element {
    return <ComponentWrapper component={LoginDialog} reactives="loginDialog"/>;
}

export default LoginDialogComponent;