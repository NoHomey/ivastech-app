import * as React from "react";
import Dialog, {DialogContent, DialogActions} from "material-ui/Dialog";
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";
import ChangePasswordButton from "./ChangePasswordButton";
import TextInput from "./../TextInput";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import {OpenActions} from "./../../reactives/openReactive";

interface Actions {
    changePasswordDialog: OpenActions;
}

function ChangePasswordDialog(actions: Actions, translations: Translations): JSX.Element {
    return <Dialog
        open={actions.changePasswordDialog.actions.isOpen()}
        onRequestClose={actions.changePasswordDialog.actions.close}>
        <DialogContent>
            <LayoutContainer direction="column">
                <LayoutItem>
                    <TextInput field="password" label="oldPassword"/>
                </LayoutItem>
                <LayoutItem>
                    <TextInput field="userPassword" label="newPassword"/>
                </LayoutItem>
                <LayoutItem>
                    <TextInput field="confirmPassword" label="confirmNewPassword"/>
                </LayoutItem>
            </LayoutContainer>
        </DialogContent>
        <DialogActions>
            <ChangePasswordButton/>
        </DialogActions>
    </Dialog>;
}

function ChangePasswordDialogComponent(): JSX.Element {
    return <ComponentWrapper component={ChangePasswordDialog} reactives="changePasswordDialog"/>;
}

export default ChangePasswordDialogComponent;