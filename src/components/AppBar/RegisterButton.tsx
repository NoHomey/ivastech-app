import * as React from "react";
import ContrastButton from "./ContrastButton";
import TranslationService from "./../../services/TranslationService/TranslationService";

class RegisterButton extends React.Component {
    render(): JSX.Element {
        return <ContrastButton>
            {TranslationService.getTranslation().register}
        </ContrastButton>;
    }
}

export default RegisterButton;