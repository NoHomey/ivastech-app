import * as React from "react";
import LayoutContainer from "./LayoutContainer";
import LayoutItem from "./LayoutItem";
import Paper from "material-ui/Paper";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import AddIcon from "material-ui-icons/Add";
import InfoIcon from "material-ui-icons/Info";
import EditIcon from "material-ui-icons/Edit";
import DeleteIcon from "material-ui-icons/Delete";
import PrevIcon from "material-ui-icons/NavigateBefore";
import NextIcon from "material-ui-icons/NavigateNext";
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";
import Typography from "material-ui/Typography";
import ComponentWrapper from "./ComponentWrapper";
import Translations from "./../translations/Translations";

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const style: React.CSSProperties = {marginTop: 34, maxWidth: "100%"};

namespace constants {
    export const column = "column";
    export const primary = "primary";
    export const defaultColor = "default";
    export const accent = "accent";
    export const secondary = "secondary";
}

function Addresses(actions: {}, translations: Translations): JSX.Element {
    return <LayoutContainer gutter={16} style={style} direction={constants.column}>
        <LayoutItem>
            <Paper square>
                <Toolbar>
                    <Button color={constants.primary}>
                        <AddIcon/> {translations.addNew}
                    </Button>
                </Toolbar>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell compact>{translations.name}</TableCell>
                            <TableCell compact>
                                <div>
                                    <span>Orders made</span><br/>
                                    <span>since last edit</span>
                                </div>
                            </TableCell>
                            <TableCell compact>{translations.info}</TableCell>
                            <TableCell compact>{translations.edit}</TableCell>
                            <TableCell compact>{translations.delete}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            arr.map<JSX.Element>(function (i: number): JSX.Element {
                                    return i < 10 ? <TableRow key={i} hover>
                                    <TableCell compact>dfjkj399fdjfsf9dk</TableCell>
                                    <TableCell compact>{i}</TableCell>
                                    <TableCell compact>
                                        <IconButton color={constants.primary}>
                                            <InfoIcon/>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell compact>
                                        <IconButton color={constants.defaultColor}>
                                            <EditIcon/>
                                        </IconButton>
                                    </TableCell>
                                    <TableCell compact>
                                        <IconButton color={constants.accent}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                : <TableRow key={i}/>
                            })
                        }
                    </TableBody>
                </Table>
            </Paper>
        </LayoutItem>
        <LayoutItem>
            <LayoutContainer gutter={40}>
                <LayoutItem>
                    <IconButton>
                        <PrevIcon/>
                    </IconButton>
                </LayoutItem>
                <LayoutItem>
                    <Typography color={constants.secondary}>
                        {translations.page} 1/10
                    </Typography>
                </LayoutItem>
                <LayoutItem>
                    <IconButton>
                        <NextIcon/>
                    </IconButton>
                </LayoutItem>
            </LayoutContainer>
        </LayoutItem>
    </LayoutContainer>;
}

function AddressesComponent(): JSX.Element {
    return <ComponentWrapper component={Addresses}/>;
}

export default AddressesComponent;