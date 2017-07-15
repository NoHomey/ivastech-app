/// <reference types="react" />

declare module "material-ui/AppBar" {
    import AppBar = MaterialUI.AppBar;
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
    export default Button;
}

declare module "material-ui/styles" {
    export import MuiThemeProvider = MaterialUI.MuiThemeProvider;
}

declare namespace MaterialUI {
    type CSS = React.CSSProperties;

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

        component?: string | React.ReactNode;

        gutterBottom?: boolean;

        headlineMapping ?: { [index: string] : string };

        noWrap?: boolean;

        paragraph?: boolean;

        type?: "display4" | "display3" | "display2" | "display1" | "headline" | "title" | "subheading" | "body2" | "body1" | "caption" | "button";

        style?: CSS;
    }

    export class Typography extends React.Component<TypographyProps> { }

    export interface ButtonProps {
        color?: "inherit" | "primary" | "contrast" | "accent" | "default";

        component?: string | React.ReactNode;

        dense?: boolean;

        disableFocusRipple?: boolean;

        disableRipple?: boolean;

        disabled?: boolean;

        fab?: boolean;

        href?: string;

        raised?: boolean;

        style?: CSS;
    }

    export class Button extends React.Component<ButtonProps> { }

    export class MuiThemeProvider extends React.Component<any> { }
}