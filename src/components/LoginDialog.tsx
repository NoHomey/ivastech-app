import * as React from "react";
import Dialog, {DialogContent, DialogActions} from "material-ui/Dialog";
import LayoutContainer from "./LayoutContainer";
import LayoutItem from "./LayoutItem";
import Button from "material-ui/Button";
import createComponent from "./../createComponent"
import Translations from "./../translations/Translations";
import {OpenActions} from "./../reactives/openReactive";

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
                    <LayoutItem>{translations.login}</LayoutItem>
                </LayoutContainer>
            </DialogContent>
            <DialogActions>
                <Button color="primary">{translations.login}</Button>
            </DialogActions>
        </Dialog>;
    }, "loginDialog"
);

export default LoginDialog;