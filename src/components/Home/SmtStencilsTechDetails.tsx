import * as React from "react";
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";
import Paper from "material-ui/Paper";
import List, {ListItem, ListSubheader, ListItemText} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import Hidden from "material-ui/Hidden";
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";

function SmtStencilsTechDetails(): JSX.Element {
    return <LayoutContainer direction="column" gutter={40} justify="space-around" align="stretch" style={{
        minHeight: "500",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 24,
        width: "80%"}}> 
        <LayoutItem>
            <Paper style={{padding: 14}}>
                    <Typography paragraph type="subheading">
                        За изработката на лазарно изрязани SMT стенсили използваме
                        специална нераъждаема листова стомана. Ламарината е с необходимият
                        химичен състав, както и с гарантирана дебелина. Използваните пластини
                        имат малка степен на разтегляемост, което от своя страна не води до
                        деформация на апартюрите. Химичния състав, както и физичните
                        характеристики на използвания материал позволяват цикъл от 50000 намазвания.
                    </Typography>
                    <Typography paragraph type="title" style={{fontSize: 18}}>
                        Mаксималния размер на стенсил, който можем да произведем е 600 x 800mm.
                    </Typography>
            </Paper>
        </LayoutItem>
        <LayoutItem>
            <Paper style={{padding: 16}}>
                <Typography paragraph type="title" style={{fontSize: 18}}>
                        Физико-маханични параметри на пластината:
                    </Typography>
                    <Typography paragraph type="subheading">
                        Разтегливост: 1256N/mm2
                    </Typography>
                    <Typography paragraph type="subheading">
                        Коефициент на удължаване: 4.9%
                    </Typography>
                    <Typography paragraph type="subheading">
                        Твърдост: 393HV
                    </Typography>
            </Paper>
        </LayoutItem>
        <Hidden mdUp>
            <LayoutItem>
                <LayoutContainer justify="space-around" align="flex-start">
                    <LayoutItem>
                        <Paper square elevation={9}>
                            <List  subheader={<ListSubheader>Химичен състав</ListSubheader>}>
                                <ListItem divider>
                                    <Avatar style={{color: "#fff", backgroundColor: "#273746"}}>C</Avatar>
                                    <ListItemText primary="0.05%"/>
                                </ListItem>
                                <ListItem divider>
                                    <Avatar style={{color: "#fff", backgroundColor: "#95A5A6"}}>Si</Avatar>
                                    <ListItemText primary="0.49%"/>
                                </ListItem>
                                <ListItem divider>
                                    <Avatar style={{color: "#fff", backgroundColor: "#FA8072"}}>Mn</Avatar>
                                    <ListItemText primary="1.09%"/>
                                </ListItem>
                                <ListItem divider>
                                    <Avatar style={{color: "#fff", backgroundColor: "#F5B041"}}>P</Avatar>
                                    <ListItemText primary="0.039%"/>
                                </ListItem>
                                <ListItem divider>
                                    <Avatar style={{color: "#fff", backgroundColor: "#F4D03F"}}>S</Avatar>
                                    <ListItemText primary="0.008%"/>
                                </ListItem>
                                <ListItem divider>
                                    <Avatar style={{color: "#fff", backgroundColor: "#1ABC9C"}}>Ni</Avatar>
                                    <ListItemText primary="8.06%"/>
                                </ListItem>
                                <ListItem divider>
                                    <Avatar style={{color: "#fff", backgroundColor: "#5499C7"}}>Cr</Avatar>
                                    <ListItemText primary="18.38%"/>
                                </ListItem>
                                <ListItem divider>
                                    <Avatar style={{color: "#fff", backgroundColor: "#E67E22"}}>Fe</Avatar>
                                    <ListItemText primary="71.883%"/>
                                </ListItem>
                            </List>
                        </Paper>
                    </LayoutItem>
                    <LayoutItem>
                        <Paper square elevation={9}>
                            <List  subheader={<ListSubheader style={{lineHeight: "32px"}}>
                                Дебелина<br/>
                                на пластината
                                </ListSubheader>}>
                                <ListItem divider>
                                    <ListItemText primary="0.08mm (80 um)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="0.10mm (100 um)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="0.12mm (120 um)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="0.127mm (127 um)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="0.13mm (130 um)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="0.15mm (150 um)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="0.18mm (180 um)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="0.20mm (200 um)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="0.25mm (250 um)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="0.30mm (300 um)"/>
                                </ListItem>
                            </List>
                        </Paper>
                    </LayoutItem>
                </LayoutContainer>
            </LayoutItem>
        </Hidden>
        <Hidden only={["xs", "sm", "lg", "xl"]}>
            <LayoutItem>
                <Paper square style={{padding: 16}}>
                <Typography paragraph type="headline">
                    Химичен състав
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell compact>
                                <Avatar style={{color: "#fff", backgroundColor: "#273746"}}>C</Avatar>
                            </TableCell>
                            <TableCell compact>
                                <Avatar style={{color: "#fff", backgroundColor: "#95A5A6"}}>Si</Avatar>
                            </TableCell>
                            <TableCell compact>
                                <Avatar style={{color: "#fff", backgroundColor: "#FA8072"}}>Mn</Avatar>
                            </TableCell>
                            <TableCell compact>
                                <Avatar style={{color: "#fff", backgroundColor: "#F5B041"}}>P</Avatar>
                            </TableCell>
                            <TableCell compact>
                                <Avatar style={{color: "#fff", backgroundColor: "#F4D03F"}}>S</Avatar>
                            </TableCell>
                            <TableCell compact>
                                <Avatar style={{color: "#fff", backgroundColor: "#1ABC9C"}}>Ni</Avatar>
                            </TableCell>
                            <TableCell compact>
                                <Avatar style={{color: "#fff", backgroundColor: "#5499C7"}}>Cr</Avatar>
                            </TableCell>
                            <TableCell compact>
                                <Avatar style={{color: "#fff", backgroundColor: "#E67E22"}}>Fe</Avatar>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell compact>0.05%</TableCell>
                            <TableCell compact>0.49%</TableCell>
                            <TableCell compact>1.09%</TableCell>
                            <TableCell compact>0.039%</TableCell>
                            <TableCell compact>0.008%</TableCell>
                            <TableCell compact>8.06%</TableCell>
                            <TableCell compact>18.38%</TableCell>
                            <TableCell compact>71.883%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </Paper>
            </LayoutItem>
        </Hidden>
        <Hidden mdDown>
            <LayoutItem>
                <Paper square style={{padding: 16}}>
                <Typography paragraph type="headline">
                    Химичен състав
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Avatar style={{color: "#fff", backgroundColor: "#273746"}}>C</Avatar>
                            </TableCell>
                            <TableCell>
                                <Avatar style={{color: "#fff", backgroundColor: "#95A5A6"}}>Si</Avatar>
                            </TableCell>
                            <TableCell>
                                <Avatar style={{color: "#fff", backgroundColor: "#FA8072"}}>Mn</Avatar>
                            </TableCell>
                            <TableCell>
                                <Avatar style={{color: "#fff", backgroundColor: "#F5B041"}}>P</Avatar>
                            </TableCell>
                            <TableCell>
                                <Avatar style={{color: "#fff", backgroundColor: "#F4D03F"}}>S</Avatar>
                            </TableCell>
                            <TableCell>
                                <Avatar style={{color: "#fff", backgroundColor: "#1ABC9C"}}>Ni</Avatar>
                            </TableCell>
                            <TableCell>
                                <Avatar style={{color: "#fff", backgroundColor: "#5499C7"}}>Cr</Avatar>
                            </TableCell>
                            <TableCell>
                                <Avatar style={{color: "#fff", backgroundColor: "#E67E22"}}>Fe</Avatar>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell><Typography type="body2">0.05%</Typography></TableCell>
                            <TableCell><Typography type="body2">0.49%</Typography></TableCell>
                            <TableCell><Typography type="body2">1.09%</Typography></TableCell>
                            <TableCell><Typography type="body2">0.039%</Typography></TableCell>
                            <TableCell><Typography type="body2">0.008%</Typography></TableCell>
                            <TableCell><Typography type="body2">8.06%</Typography></TableCell>
                            <TableCell><Typography type="body2">18.38%</Typography></TableCell>
                            <TableCell><Typography type="body2">71.883%</Typography></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </Paper>
            </LayoutItem>
        </Hidden>
        <Hidden smDown>
            <LayoutItem>
                <Paper square style={{padding: 24}}>
                <Typography paragraph type="headline">
                    Дебелина на ламарината
                </Typography>
                <Typography paragraph type="subheading" style={{fontSize: 22}}>
                    На склад поддържаме следните дебелини:
                </Typography>
                <Typography paragraph type="title" style={{letterSpacing : 1, lineHeight: 2}}>
                    0.08mm, 
                    0.10mm, 0.12mm, 0.127mm,
                    0.13mm, 0.15mm, 0.18mm,
                    0.20mm, 0.25mm, 0.30mm.
                </Typography>
                </Paper>
            </LayoutItem>
        </Hidden>
    </LayoutContainer>;
}

/*
<Paper square elevation={9}>
                            <List  subheader={<ListSubheader style={{lineHeight: "32px"}}>
                                Подържани<br/>
                                файлови формати
                                </ListSubheader>}>
                                <ListItem divider>
                                    <ListItemText primary="Gerber Standart (RS-274-D)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="Gerber Standart (RS-274-x)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="Excellon NC Drill"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="Sieb & Meyer NC Drill"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="HPGL"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="DXF"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="ODB++ (PCB version only)"/>
                                </ListItem>
                                <ListItem divider>
                                    <ListItemText primary="Barco DPF (PCB version only)"/>
                                </ListItem>
                            </List>
                        </Paper>
*/

export default SmtStencilsTechDetails;