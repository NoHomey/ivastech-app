import * as React from "react";
import Dialog, {DialogContent, DialogActions} from "material-ui/Dialog";
import EmailInputControl from "./../controls/EmailInputControl";
import ConfirmPasswordInputControl from "./../controls/ConfirmPasswordInputControl";
import InputFormControl from "./../controls/InputFormControl";
import InputControl from "./../controls/InputControl";
import PasswordInput from "./PasswordInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import EmailInput from "./EmailInput";
import LayoutContainer from "./LayoutContainer";
import LayoutItem from "./LayoutItem";

interface OnClickProp {
    onClick: () => void;
}

type OnClickable = React.ReactElement<OnClickProp>;

interface DialogTriggerProps {
    trigger: OnClickable;
    actioner: OnClickable;
    inputControls: InputControl[];
    action: (
        formControl: InputFormControl,
        closeDialog: () => void,
        formIsInvalid: (shouldUpdate: boolean) => void
    ) => void
}

class DialogTrigger extends React.Component<DialogTriggerProps> {
    private static generateKey(inputControl: InputControl, index: number): number {
        return (inputControl + 1) * 10 + index + 1;
    }

    private openDialog: () => void;
    private closeDialog: () => void;
    private takeAction: () => void;
    private isDialogOpen: boolean;
    private inputFormControl: InputFormControl;
    
    private setDialogState(open: boolean): void {
        if(this.isDialogOpen !== open) {
            this.isDialogOpen = open;
            if(!open) {
                this.inputFormControl.reset();
            }
            this.forceUpdate();
        }
    }

    private formIsInvalidAction(shouldUpdate: boolean): void {
        if(shouldUpdate) {
            this.forceUpdate();
        }
    }

    private inputControlComponent(inputControl: InputControl): JSX.Element {
        const control = this.inputFormControl.getInputControl(inputControl);
        switch(inputControl) {
            case InputControl.email:
                return <EmailInput inputControl={control as EmailInputControl}/>;
            case InputControl.password:
                return <PasswordInput inputControl={control}/>;
            case InputControl.confirmPassword:
                return <ConfirmPasswordInput
                    inputControl={control as ConfirmPasswordInputControl}/>;
        }
    }

    constructor(props: DialogTriggerProps) {
        super(props);
        this.isDialogOpen = false;
        this.openDialog = this.setDialogState.bind(this, true);
        this.closeDialog = this.setDialogState.bind(this, false);
        this.inputFormControl = new InputFormControl(props.inputControls);
        this.takeAction = props.action.bind(
            null,
            this.inputFormControl,
            this.closeDialog,
            this.formIsInvalidAction.bind(this)
        );
    }

    componentWillUnmount(): void {
        this.inputFormControl.release();
    }

    render(): JSX.Element {
        return <div>
            {React.cloneElement(this.props.trigger, {onClick: this.openDialog})}
            <Dialog open={this.isDialogOpen} onRequestClose={this.closeDialog}>
                <DialogContent>
                    <LayoutContainer direction="column">
                        {this.inputFormControl.controls
                            .map<JSX.Element>((control: InputControl, index: number) => {
                            return <LayoutItem key={DialogTrigger.generateKey(control, index)}>
                                {this.inputControlComponent(control)}
                            </LayoutItem>
                        })}
                    </LayoutContainer>
                </DialogContent>
                <DialogActions>
                    {React.cloneElement(this.props.actioner, {onClick: this.takeAction})}
                </DialogActions>
            </Dialog>
        </div>;
    }
}

export default DialogTrigger;