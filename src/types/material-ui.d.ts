/// <reference types="react" />

declare module "material-ui/AppBar" {
    import AppBar = MaterialUI.AppBar;
    export import AppBarProps = MaterialUI.AppBarProps;
    export default AppBar;
}

declare module "material-ui/Toolbar" {
    import Toolbar = MaterialUI.Toolbar;
    export default Toolbar;
}

declare module "material-ui/Typography" {
    import Typography = MaterialUI.Typography;
    export default Typography;
}

declare module "material-ui/Button" {
    import Button = MaterialUI.Button;
    export import ButtonProps = MaterialUI.ButtonProps;
    export default Button;
}

declare module "material-ui/Hidden" {
    import Hidden = MaterialUI.Hidden;
    export default Hidden;
}

declare module "material-ui/Grid" {
    import Grid = MaterialUI.Grid;
    export import BreakpointProp = MaterialUI.BreakpointProp;
    export default Grid;
}

declare module "material-ui/Switch" {
    import Switch = MaterialUI.Switch;
    import LabelSwitch = MaterialUI.LabelSwitch;
    export {Switch, LabelSwitch};
    export default Switch;
}

declare module "material-ui/Menu" {
    import Menu = MaterialUI.Menu;
    import MenuItem = MaterialUI.MenuItem;
    import MenuList = MaterialUI.MenuList;
    export {MenuItem, MenuList};
    export default Menu;
}

declare module "material-ui/Dialog" {
    import Dialog = MaterialUI.Dialog;
    import DialogTitle = MaterialUI.DialogTitle;
    import DialogContent = MaterialUI.DialogContent;
    import DialogContentText = MaterialUI.DialogContentText;
    import DialogActions = MaterialUI.DialogActions;
    export {DialogTitle, DialogContent, DialogContentText, DialogActions};
    export default Dialog;
}

declare module "material-ui/Form/FormControl" {
    import FormControl = MaterialUI.FormControl;
    export default FormControl;
}

declare module "material-ui/Input/InputLabel" {
    import InputLable = MaterialUI.InputLable;
    export default InputLable;
}

declare module "material-ui/Input" {
    import Input = MaterialUI.Input;
    export import MaterialUIInputProps = MaterialUI.MaterialUIInputProps;
    export import InputProps = MaterialUI.InputProps;
    export default Input;
}

declare module "material-ui/Form/FormHelperText" {
    import FormHelperText = MaterialUI.FormHelperText;
    export default FormHelperText;
}

declare module "material-ui/styles" {
    export import MuiThemeProvider = MaterialUI.MuiThemeProvider;
}

declare namespace MaterialUI {
    type CSS = React.CSSProperties;

    type ComponentProp = string | React.ReactNode;

    type BasicSyntheticEvent = React.SyntheticEvent<HTMLElement>;

    export interface AppBarProps {
        color?: "inherit" | "primary" | "accent" | "default";

        position?: "static" | "fixed" | "absolute";

        style?: CSS;
    }

    export class AppBar extends React.Component<AppBarProps> { }

    export interface ToolbarProps {
        disableGutters?: boolean;

        style?: CSS;
    }

    export class Toolbar extends React.Component<ToolbarProps> { }

    export interface TypographyProps {
        allign?: "inherit" | "left" | "center" | "right" | "justify";

        color?: "inherit" | "secondary" | "accent" | "default";

        component?: ComponentProp;

        gutterBottom?: boolean;

        headlineMapping ?: { [index: string] : string };

        noWrap?: boolean;

        paragraph?: boolean;

        type?: "display4" | "display3" | "display2" | "display1" | "headline" | "title" | "subheading" | "body2" | "body1" | "caption" | "button";

        style?: CSS;
    }

    export class Typography extends React.Component<TypographyProps> { }

    export interface MaterialUIButtonProps {
        color?: "inherit" | "primary" | "contrast" | "accent" | "default";

        component?: ComponentProp;

        dense?: boolean;

        disableFocusRipple?: boolean;

        disableRipple?: boolean;

        disabled?: boolean;

        fab?: boolean;

        href?: string;

        raised?: boolean;

        style?: CSS;
    }

    export type ButtonProps = MaterialUIButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>; 

    export class Button extends React.Component<ButtonProps> { }

    export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

    export interface HiddenProps {
        implementation?: "js" | "css";

        lgDown?: boolean;

        lgUp?: boolean;

        mdDown?: boolean;

        mdUp?: boolean;

        only?: Breakpoint | [Breakpoint];

        smDown?: boolean;

        smUp?: boolean;

        xlDown?: boolean;

        xlUp?: boolean;

        xsDown?: boolean;

        xsUp?: boolean;
    }

    export class Hidden extends React.Component<HiddenProps> { }

    export type BreakpointProp = boolean | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

    export interface GridProps {
        align?: "flex-start" | "center" | "flex-end" | "stretch";

        component?: ComponentProp;

        container?: boolean;

        direction?: "row" | "row-reverse" | "column" | "column-reverse";

        gutter?: 0 | 8 | 16 | 24 | 40;

        hidden?: HiddenProps;

        item?: boolean;

        justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";

        lg?: BreakpointProp;

        md?: BreakpointProp;

        sm?: BreakpointProp;

        wrap?: "nowrap" | "wrap" | "wrap-reverse";

        xl?: BreakpointProp;

        xs?: BreakpointProp;

        style?: CSS;
    }

    export class Grid extends React.Component<GridProps> { }

    export interface SwitchProps {
        checked?: boolean;

        checkedClassName?: string;

        checkedIcon?: React.ReactNode;
        
        disableRipple?: boolean;

        disabled?: boolean;

        disabledClassName?: string;

        icon?: React.ReactNode;

        inputProps?: React.InputHTMLAttributes<boolean>;

        name?: string;

        onChange?: (event: object, checked: boolean) => void;

        value?: string;

        style?: CSS;
    }

    export class Switch extends React.Component<SwitchProps> { }

    export type LabelProps<Props> = Props & {label?: React.ReactNode;  labelClassName?: string};

    export class LabelSwitch extends React.Component<LabelProps<SwitchProps>> { }

    export interface MenuProps {
        anchorEl?: EventTarget & HTMLElement;

        onEnter?: () => void;

        onEntered?: () => void;

        onEntering?: () => void;

        onExit?: () => void;

        onExited?: () => void;

        onExiting?: () => void;

        onRequestClose?: () => void;

        open?: boolean;

        transitionDuration?: number | "auto";

        style?: CSS;
    }

    export class Menu extends React.Component<MenuProps> { }

    export interface MenuItemProps {
        component?: ComponentProp;

        onClick?: React.EventHandler<BasicSyntheticEvent>;

        selected?: boolean;
    }

    export class MenuItem extends React.Component<MenuItemProps> { }

    export class MenuList extends React.Component { }

    export interface DialogProps {
        enterTransitionDuration?: boolean;

        fullScreen?: boolean;

        ignoreBackdropClick?: boolean;

        ignoreEscapeKeyUp?: boolean;

        leaveTransitionDuration?: boolean;

        maxWidth?: "xs" | "sm" | "md";
        
        onBackdropClick?: () => void;

        onEnter?: () => void;

        onEntered?: () => void;

        onEntering?: () => void;

        onEscapeKeyUp?: () => void;

        onExit?: () => void;

        onExited?: () => void;

        onExiting?: () => void;

        onRequestClose?: () => void;

        open?: boolean;

        transition?: React.SFC<any> | React.ReactElement<any>;

        style?: CSS;
    }

    export class Dialog extends React.Component<DialogProps> { }

    export class DialogActions extends React.Component { }

    export class DialogContent extends React.Component { }

    export class DialogContentText extends React.Component { }

    export interface DialogTitleProps {
        disableTypography?: boolean;
    }

    export class DialogTitle extends React.Component<DialogTitleProps> { }

    export interface FormControlProps {
        disabled?: boolean;

        error?: boolean;

        fullWidth?: boolean;

        margin?: "none" | "dense" | "normal";

        required?: boolean;

        style?: CSS;
    }

    export class FormControl extends React.Component<FormControlProps> { }

    export interface InputLableProps {
        disableAnimation?: boolean;

        disabled?: boolean;

        error?: boolean;

        focused?: boolean;

        required?: boolean;

        shrink?: boolean;

        htmlFor?: string;

        style?: boolean;
    }

    export class InputLable extends React.Component<InputLableProps> { }

    export interface MaterialUIInputProps {
        component?: ComponentProp;

        defaultValue?: string | number;

        disableUnderline?: boolean;

        error?: boolean;

        fullWidth?: boolean;

        id?: string;

        inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

        inputRef?: (input: HTMLInputElement) => void;

        multile?: boolean;

        rows?: string | number;

        rowsMax?: string | number;

        type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "number" | "password" | "radio" | "range";

        value?: string | number;

        style?: CSS;
    }

    export type InputProps = MaterialUIInputProps & React.InputHTMLAttributes<HTMLInputElement>;

    export class Input extends React.Component<InputProps> { }

    export interface FormHelperTextProps {
        disabled?: boolean;

        error?: boolean;

        style?: CSS;
    }

    export class FormHelperText extends React.Component<FormHelperTextProps> { }

    export class MuiThemeProvider extends React.Component { }
}