import {TextInputActions} from "./../../reactives/textInput";
import {TextInputErrorActions} from "./../../reactives/textInputError";

interface Actions {
    [key: string]: TextInputActions & TextInputErrorActions;
}

export default Actions;