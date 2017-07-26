import * as React from "react";
import Dialog, {DialogContent, DialogActions} from "material-ui/Dialog";
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";
import RegisterButton from "./RegisterButton";
import TextInput from "./../TextInput";
import ComponentWrapper from "./../ComponentWrapper";
import Translations from "./../../translations/Translations";
import {OpenActions} from "./../../reactives/openReactive";

interface Actions {
    registerDialog: OpenActions;
}

function RegisterDialog(actions: Actions, translations: Translations): JSX.Element {
    return <Dialog
        open={actions.registerDialog.actions.isOpen()}
        onRequestClose={actions.registerDialog.actions.close}>
        <DialogContent>
            <LayoutContainer direction="column">
                <LayoutItem>
                    <TextInput field="email"/>
                </LayoutItem>
                <LayoutItem>
                    <TextInput field="userPassword"/>
                </LayoutItem>
                <LayoutItem>
                    <TextInput field="confirmPassword"/>
                </LayoutItem>
            </LayoutContainer>
        </DialogContent>
        <DialogActions>
            <RegisterButton/>
        </DialogActions>
    </Dialog>;
}

function RegisterDialogComponent(): JSX.Element {
    return <ComponentWrapper component={RegisterDialog} reactives="registerDialog"/>;
}

export default RegisterDialogComponent;