import * as React from "react";
import ContrastButton from "./ContrastButton";
import TranslationService from "./../../services/TranslationService/TranslationService";

class LoginButton extends React.Component {
    render(): JSX.Element {
        return <ContrastButton>
            {TranslationService.getTranslation().login}
        </ContrastButton>;
    }
}

export default LoginButton;