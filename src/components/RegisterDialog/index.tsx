import * as React from "react";
import Dialog, {DialogContent, DialogActions} from "material-ui/Dialog";
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";
import RegisterButton from "./RegisterButton";
import createComponent from "./../../createComponent"
import Translations from "./../../translations/Translations";
import {OpenActions} from "./../../reactives/openReactive";

interface Actions {
    registerDialog: OpenActions;
}

import EmailInput from "./../EmailInput";
import UserPasswordInput from "./../UserPasswordInput";
import ConfirmPasswordInput from "./../ConfirmPasswordInput";

const RegisterDialog = createComponent<Actions>(
    function(actions: Actions, translations: Translations): JSX.Element {
        return <Dialog
                open={actions.registerDialog.actions.isOpen()}
                onRequestClose={actions.registerDialog.actions.close}>
            <DialogContent>
                <LayoutContainer direction="column">
                    <LayoutItem>
                        <EmailInput/>
                    </LayoutItem>
                    <LayoutItem>
                        <UserPasswordInput/>
                    </LayoutItem>
                    <LayoutItem>
                        <ConfirmPasswordInput/>
                    </LayoutItem>
                </LayoutContainer>
            </DialogContent>
            <DialogActions>
                <RegisterButton/>
            </DialogActions>
        </Dialog>;
    }, "registerDialog"
);

export default RegisterDialog;