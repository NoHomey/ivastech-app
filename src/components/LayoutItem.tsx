import * as React from "react";
import Grid, {BreakpointProp} from "material-ui/Grid";

interface LayoutItemProps {
    lg?: BreakpointProp;

    md?: BreakpointProp;

    sm?: BreakpointProp;

    xl?: BreakpointProp;

    xs?: BreakpointProp;

    style?: React.CSSProperties;
}

class LayoutItem extends React.PureComponent<LayoutItemProps> {
    render(): JSX.Element {
        return <Grid item {...this.props}/>;
    }
}

export default LayoutItem;