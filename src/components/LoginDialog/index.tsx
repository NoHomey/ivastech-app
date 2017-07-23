import * as React from "react";
import Dialog, {DialogContent, DialogActions} from "material-ui/Dialog";
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";
import LoginButton from "./LoginButton";
import createComponent from "./../../createComponent"
import Translations from "./../../translations/Translations";
import {OpenActions} from "./../../reactives/openReactive";

import EmailInput from "./../EmailInput";
import PasswordInput from "./../PasswordInput";

interface Actions {
    loginDialog: OpenActions;
}

const LoginDialog = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Dialog
                open={actions.loginDialog.actions.isOpen()}
                onRequestClose={actions.loginDialog.actions.close}>
            <DialogContent>
                <LayoutContainer direction="column">
                    <LayoutItem>
                        <EmailInput/>
                    </LayoutItem>
                    <LayoutItem>
                        <PasswordInput/>
                    </LayoutItem>
                </LayoutContainer>
            </DialogContent>
            <DialogActions>
                <LoginButton/>
            </DialogActions>
        </Dialog>;
    }, "loginDialog"
);

export default LoginDialog;