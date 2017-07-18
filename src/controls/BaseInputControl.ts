import InputError from "./InputError";
import Nullable from "./../types/Nullable";
import Observable from "./../Observable"
import TranslationService from "./../services/TranslationService/TranslationService";

interface ValidationResult {
    valid: boolean;

    shouldUpdate: boolean;
}

class BaseInputControl extends Observable {
    protected value: string;
    protected error: boolean;
    protected inputError: Nullable<InputError>;
    protected fieldIsValid: (value: string) => void;

    private setValue(value: string): boolean {
        if(this.value !== value) {
            this.value = value;
            return true;
        }
        return false;
    }

    private setError(error: boolean): boolean {
        if(this.error !== error) {
            this.error = error;
            return true;
        }
        return false;
    }

    private setInputError(inputError: Nullable<InputError>): boolean {
        if(this.inputError !== inputError) {
            this.inputError = inputError;
            return true;
        }
        return false;
    }

    protected setErrorState(error: boolean, inputError: Nullable<InputError>, value: string): boolean {
        let shouldUpdate = this.setValue(value);
        shouldUpdate = this.setError(error) || shouldUpdate;
        return this.setInputError(inputError) || shouldUpdate;
    }

    protected setState(error: boolean, inputError: Nullable<InputError>, value: string): void {
        if(this.setErrorState(error, inputError, value)) {
            this.emitChange();
        }
    }

    constructor() {
        super();
        this.fieldIsValid = this.setState.bind(this, false, null);
        this.reset();
    }

    reset(): void {
        this.value = "";
        this.error = false;
        this.inputError = null;
    }

    isValid(): Nullable<InputError> {
        return null;
    }

    validate(): ValidationResult {
        const result = this.isValid();
        const valid = result === null;
        return {
            valid: valid,
            shouldUpdate: this.setErrorState(!valid, result, this.value)
        };
    }

    setInputValue(value: string): void {
        this.fieldIsValid(value);
    }

    getValue(): string {
        return this.value;
    }

    isError(): boolean {
        return this.error;
    }

    getInputErrorMessage(): string {
        return this.error ? TranslationService.getTranslation().inputError[this.inputError!] : "";
    }
}

export {ValidationResult};

export default BaseInputControl;