import {TextInputActions} from "./../../reactives/textInput";
import {TextInputErrorActions} from "./../../reactives/textInputError";

interface Actions {
    [key: string]: {
        input: TextInputActions;
        error: TextInputErrorActions;
    }
}

export default Actions;