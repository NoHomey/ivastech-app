import * as React from "react";
import Grid from "material-ui/Grid";

interface LayoutContainerProps {
    align?: "flex-start" | "center" | "flex-end" | "stretch";

    direction?: "row" | "row-reverse" | "column" | "column-reverse";

    gutter?: 0 | 8 | 16 | 24 | 40;

    justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";

    wrap?: "nowrap" | "wrap" | "wrap-reverse";

    style?: React.CSSProperties;
}

class LayoutContainer extends React.Component<LayoutContainerProps> {
    static defaultProps: LayoutContainerProps = {
        align: "center",
        gutter: 0,
        justify: "center"
    };

    render(): JSX.Element {
        return <Grid container {...this.props}/>;
    }
}

export default LayoutContainer;