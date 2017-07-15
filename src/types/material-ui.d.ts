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

declare module "material-ui/Hidden" {
    import Hidden = MaterialUI.Hidden;
    export default Hidden;
}

declare module "material-ui/Grid" {
    import Grid = MaterialUI.Grid;
    export default Grid;
}

declare module "material-ui/styles" {
    export import MuiThemeProvider = MaterialUI.MuiThemeProvider;
}

declare namespace MaterialUI {
    type CSS = React.CSSProperties;

    type ComponentProp = string | React.ReactNode;

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

    export interface ButtonProps {
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

    export class MuiThemeProvider extends React.Component<any> { }
}