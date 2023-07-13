import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import TypeShop from "./pages/TypeShop";
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, SHOP_ROUTE, TYPE_ROUTE } from "./utils/const";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  }
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
  {
    path: TYPE_ROUTE + '/:type',
    Component: TypeShop
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  }
];