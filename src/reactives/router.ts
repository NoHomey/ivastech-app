import Reactivity from "./Reactivity";
import reactivityCreator from "./reactivityCreator";
import ReactiveProperty from "./ReactiveProperty";
import Actions from "./../reactives/Actions";

enum Routes {
    Home,
    Order,
    Orders,
    Templates,
    Addresses,
    Admin
}

interface Router {
    navigateToHome: () => void;
    navigateToOrder: () => void;
    navigateToOrders: () => void;
    navigateToTemplates: () => void;
    navigateToAddresses: () => void;
    navigateToAdmin: () => void;
    whichRoute: () => Routes;
}

type RouterActions = Actions<Router>;

function router(): Reactivity<Router> {
    const currentRoute = new ReactiveProperty<Routes>(Routes.Home);

    return reactivityCreator(currentRoute, {
        navigateToHome: function(): void {
            currentRoute.value = Routes.Home;
        },

        navigateToOrder: function(): void {
            currentRoute.value = Routes.Order;
        },

        navigateToOrders: function(): void {
            currentRoute.value = Routes.Orders;
        },

        navigateToTemplates: function(): void {
            currentRoute.value = Routes.Templates;
        },

        navigateToAddresses: function(): void {
            currentRoute.value = Routes.Addresses;
        },

        navigateToAdmin: function(): void {
            currentRoute.value = Routes.Admin;
        },

        whichRoute: function(): Routes {
            return currentRoute.value;
        }
    });
}

export {Routes, RouterActions};

export default router;