import * as React from "react";
import ContrastButton from "./ContrastButton";
import Dialog, {DialogContent, DialogActions} from "material-ui/Dialog";
import PrimaryButton from "./../PrimaryButton";
import TranslationService from "./../../services/TranslationService/TranslationService";
import Translation from "./../../services/TranslationService/Translation";
import EmailInputControl from "./../../controls/EmailInputControl";
import RequiredInputControl from "./../../controls/RequiredInputControl";
import PasswordInput from "./../PasswordInput";
import EmailInput from "./../EmailInput";
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";

class LoginButton extends React.Component {
    private openLoginDialog: () => void;

    private closeLoginDialog: () => void;

    private isLoginDialogOpen: boolean;

    private passwordControl: RequiredInputControl;
    private emailControl: EmailInputControl;
    
    private setLoginDialogState(open: boolean) {
        this.isLoginDialogOpen = open;
        this.forceUpdate();
    }

    constructor() {
        super();
        this.isLoginDialogOpen = false;
        this.openLoginDialog = this.setLoginDialogState.bind(this, true);
        this.closeLoginDialog = this.setLoginDialogState.bind(this, false);
        this.emailControl = new EmailInputControl();
        this.passwordControl = new RequiredInputControl();
    }

    render(): JSX.Element {
        const translation: Translation = TranslationService.getTranslation();
        return <div>
            <ContrastButton onClick={this.openLoginDialog}>
                {translation.login}
            </ContrastButton>
            <Dialog open={this.isLoginDialogOpen} onRequestClose={this.closeLoginDialog}>
                <DialogContent>
                    <LayoutContainer direction="column">
                        <LayoutItem>
                            <EmailInput inputControl={this.emailControl}/>
                        </LayoutItem>
                        <LayoutItem>
                            <PasswordInput inputControl={this.passwordControl}/>
                        </LayoutItem>
                    </LayoutContainer>
                </DialogContent>
                <DialogActions>
                    <PrimaryButton>{translation.login}</PrimaryButton>
                </DialogActions>
            </Dialog>
        </div>;
    }
}

export default LoginButton;