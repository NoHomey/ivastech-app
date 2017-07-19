import * as React from "react";
import ContrastButton from "./ContrastButton";
import PrimaryButton from "./../PrimaryButton";
import DialogTrigger from "./../DialogTrigger";
import InputFormControl from "./../../controls/InputFormControl";
import InputControl from "./../../controls/InputControl";
import TranslationService from "./../../services/TranslationService/TranslationService";

class RegisterButton extends React.Component {
    private static action(this: null,
        formControl: InputFormControl,
        closeDialog: (forceUpdate: boolean) => void,
        formIsInvalid: (shouldUpdate: boolean) => void): void {
            
        const validationResult = formControl.validate();
        if(validationResult.valid) {
            closeDialog(true);
        } else {
            formIsInvalid(validationResult.shouldUpdate);
        }
    }

    constructor() {
        super();
    }

    render(): JSX.Element {
        const {register} = TranslationService.getTranslation();
        return <DialogTrigger
            trigger={<ContrastButton>{register}</ContrastButton>}
            actioner={<PrimaryButton>{register}</PrimaryButton>}
            action={RegisterButton.action}
            inputControls={[
                InputControl.email,
                InputControl.password,
                InputControl.confirmPassword
            ]} />;
    }
}

export default RegisterButton;