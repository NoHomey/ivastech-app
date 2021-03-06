import * as React from "react";
import LayoutContainer from "./../LayoutContainer";
import LayoutItem from "./../LayoutItem";
import Paper from "material-ui/Paper";
import List, { ListItem, ListSubheader, ListItemIcon, ListItemText } from "material-ui/List";
import EmailIcon from "material-ui-icons/Email";
import PhoneIcon from "material-ui-icons/Phone";
import MobilePhoneIcon from "material-ui-icons/PhoneAndroid";
import FaxIcon from "material-ui-icons/Print";
import AddressIcon from "material-ui-icons/Place";

const style: React.CSSProperties = {marginTop: 16, width: "80%", marginLeft: "auto", marginRight: "auto"};

function ContactUs(): JSX.Element {
    return <LayoutContainer justify="space-around" gutter={40} align="flex-start" style={style}>
        <LayoutItem>
            <Paper square style={{padding: 12}} elevation={9}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1744.263349270425!2d23.38238065659303!3d42.67217036638893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85ccb7685389%3A0x5edf848929d24042!2z0JjQktCQ0KEg0KLQldClINCe0J7QlCAvIElWQVNURUNIIEx0ZC4!5e0!3m2!1sbg!2sbg!4v1501583119511"
                    width={1000}
                    height={560}
                    frameBorder={0}
                    style={{border: 0}}
                    allowFullScreen>
                </iframe>
            </Paper>
        </LayoutItem>
        <LayoutItem>
                <Paper square elevation={9}>
                    <List subheader={<ListSubheader>Contacts</ListSubheader>}>
                        <ListItem divider>
                            <ListItemIcon>
                                <EmailIcon/>
                            </ListItemIcon>
                            <ListItemText primary="ivastech.com"/>
                        </ListItem>
                        <ListItem divider>
                            <ListItemIcon>
                                <PhoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary="+359 2 962 9385"/>
                        </ListItem>
                        <ListItem divider>
                            <ListItemIcon>
                                <MobilePhoneIcon/>
                            </ListItemIcon>
                            <ListItemText primary="+359 2 962 9385"/>
                        </ListItem>
                        <ListItem divider>
                            <ListItemIcon>
                                <FaxIcon/>
                            </ListItemIcon>
                            <ListItemText primary="+359 2 962 9385"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AddressIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"bul. \"Asen Yordanov\" 10,"}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={"1592 g.k. Druzhba 1, Sofia, Bulgaria"}/>
                        </ListItem>
                    </List>
                </Paper>
        </LayoutItem>
    </LayoutContainer>;
}

export default ContactUs;