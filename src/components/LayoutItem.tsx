import * as React from "react";
import Grid, {BreakpointProp} from "material-ui/Grid";

interface LayoutItemProps {
    lg?: BreakpointProp;

    md?: BreakpointProp;

    sm?: BreakpointProp;

    xl?: BreakpointProp;

    xs?: BreakpointProp;

    style?: React.CSSProperties;

    children: React.ReactNode
}

function LayoutItem(props: LayoutItemProps): JSX.Element {
    return <Grid item {...props}/>;
}

export default LayoutItem;