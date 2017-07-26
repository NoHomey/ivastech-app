import * as React from "react";
import LayoutContainer from "./LayoutContainer";
import LayoutItem from "./LayoutItem";
import Paper from "material-ui/Paper";
import IconButton from "material-ui/IconButton";
import WaitingIcon from "material-ui-icons/Schedule";
import PaymentRequiredIcon from "material-ui-icons/Payment";
import ProceededIcon from "material-ui-icons/EventAvailable";
import SentIcon from "material-ui-icons/LocalShipping";
import DeliveredIcon from "material-ui-icons/Done";
import CancelIcon from "material-ui-icons/Cancel";
import PrevIcon from "material-ui-icons/NavigateBefore";
import NextIcon from "material-ui-icons/NavigateNext";
import Table, { TableBody, TableCell, TableHead, TableRow } from "material-ui/Table";
import Typography from "material-ui/Typography";
import ComponentWrapper from "./ComponentWrapper";
import Translations from "./../translations/Translations";

const style: React.CSSProperties = {marginTop: 44, maxWidth: "100%"};

enum OrderStatus {
    Waiting,
    PaymentRequired,
    Proceeded,
    Sent,
    Delivered,
    Canceled
}

interface OrderInfo {
    name: string;
    id: string;
    orderDate: string;
    deliveryDate: string;
    price: string;
    status: OrderStatus;
}

interface OrderStatusInfo {
    text: string;
    icon: JSX.Element;
    color: string;
}

const orderStatusInfo: OrderStatusInfo[] = [
    {text: "Waiting", icon: <WaitingIcon style={{fill: "#FFC107"}}/>, color: "#FFC107"},
    {text: "Payment required", icon: <PaymentRequiredIcon style={{fill: "#2196F3"}}/>, color: "#2196F3"},
    {text: "Proceed", icon: <ProceededIcon style={{fill: "#9C27B0"}}/>, color: "#9C27B0"},
    {text: "Sent", icon: <SentIcon style={{fill: "#FF9800"}}/>, color: "#FF9800"},
    {text: "Delivered", icon: <DeliveredIcon style={{fill: "#4CAF50"}}/>, color: "#4CAF50"},
    {text: "Canceled", icon: <CancelIcon style={{fill: "#F44336"}}/>, color: "#F44336"}
]

const data: Array<OrderInfo | null> = [
    {
        name: "ass33raf3rdhyv",
        id: "nvff848fj8edh3ra",
        orderDate: "20.06.17",
        deliveryDate: "22.06.17",
        price: "120 лв.",
        status: OrderStatus.Waiting
    },
    {
        name: "ass33raf3rdhyv",
        id: "nvff848fj8edh3ra",
        orderDate: "20.06.17",
        deliveryDate: "22.06.17",
        price: "120 лв.",
        status: OrderStatus.PaymentRequired
    },
    {
        name: "ass33raf3rdhyv",
        id: "nvff848fj8edh3ra",
        orderDate: "20.06.17",
        deliveryDate: "22.06.17",
        price: "120 лв.",
        status: OrderStatus.Proceeded
    },
    {
        name: "ass33raf3rdhyv",
        id: "nvff848fj8edh3ra",
        orderDate: "20.06.17",
        deliveryDate: "22.06.17",
        price: "120 лв.",
        status: OrderStatus.Sent
    },
    {
        name: "ass33raf3rdhyv",
        id: "nvff848fj8edh3ra",
        orderDate: "20.06.17",
        deliveryDate: "22.06.17",
        price: "120 лв.",
        status: OrderStatus.Delivered
    },
    {
        name: "ass33raf3rdhyv",
        id: "nvff848fj8edh3ra",
        orderDate: "20.06.17",
        deliveryDate: "22.06.17",
        price: "120 лв.",
        status: OrderStatus.Canceled
    }, null, null, null
];

function Orders(actions: {}, translations: Translations): JSX.Element {
    return <LayoutContainer gutter={16} style={style} direction="column">
        <LayoutItem>
            <Paper square>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell compact>{translations.name}</TableCell>
                            <TableCell compact>{translations.id}</TableCell>
                            <TableCell compact>{translations.orderDate}</TableCell>
                            <TableCell compact>{translations.delivaryDate}</TableCell>
                            <TableCell compact>{translations.price}</TableCell>
                            <TableCell compact>{translations.status}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map<JSX.Element>(function (order: OrderInfo | null, i: number): JSX.Element {
                                    if(order === null) {
                                        return <TableRow key={i}/>;
                                    }
                                    
                                    const statusInfo = orderStatusInfo[order!.status];
                                    
                                    return <TableRow key={i} hover>
                                    <TableCell compact>{order.name}</TableCell>
                                    <TableCell compact>{order.id}</TableCell>
                                    <TableCell compact>{order.orderDate}</TableCell>
                                    <TableCell compact>{order.deliveryDate}</TableCell>
                                    <TableCell compact>{order.price}</TableCell>
                                    <TableCell compact>
                                        <Typography type="caption" style={{color: statusInfo.color}}>
                                            {statusInfo.text}
                                        </Typography>
                                        {statusInfo.icon}
                                    </TableCell>
                                </TableRow>
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
                    <Typography color="secondary">
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

function OrdersComponent(): JSX.Element {
    return <ComponentWrapper component={Orders}/>;
}

export default OrdersComponent;