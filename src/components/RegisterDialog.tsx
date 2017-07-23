import * as React from "react";
import Dialog, {DialogContent, DialogActions} from "material-ui/Dialog";
import LayoutContainer from "./LayoutContainer";
import LayoutItem from "./LayoutItem";
import Button from "material-ui/Button";
import createComponent from "./../createComponent"
import Translations from "./../translations/Translations";
import {OpenActions} from "./../reactives/openReactive";

interface Actions {
    registerDialog: OpenActions;
}

const RegisterDialog = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Dialog
                open={actions.registerDialog.actions.isOpen()}
                onRequestClose={actions.registerDialog.actions.close}>
            <DialogContent>
                <LayoutContainer direction="column">
                    <LayoutItem>{translations.register}</LayoutItem>
                </LayoutContainer>
            </DialogContent>
            <DialogActions>
                <Button color="primary">{translations.register}</Button>
            </DialogActions>
        </Dialog>;
    }, "registerDialog"
);

export default RegisterDialog;