import * as React from "react";
import ContrastButton from "./ContrastButton";
import PrimaryButton from "./../PrimaryButton";
import DialogTrigger from "./../DialogTrigger";
import InputFormControl from "./../../controls/InputFormControl";
import InputControl from "./../../controls/InputControl";
import TranslationService from "./../../services/TranslationService/TranslationService";

class LoginButton extends React.Component {
    private static action(this: null,
        formControl: InputFormControl,
        closeDialog: () => void,
        formIsInvalid: (shouldUpdate: boolean) => void): void {
            
        const validationResult = formControl.validate();
        if(validationResult.valid) {
            closeDialog();
        } else {
            formIsInvalid(validationResult.shouldUpdate);
        }
    }

    constructor() {
        super();
    }

    render(): JSX.Element {
        const {login} = TranslationService.getTranslation();
        return <DialogTrigger
            trigger={<ContrastButton>{login}</ContrastButton>}
            actioner={<PrimaryButton>{login}</PrimaryButton>}
            action={LoginButton.action}
            inputControls={[
                InputControl.email,
                InputControl.password
            ]} />;
    }
}

export default LoginButton;