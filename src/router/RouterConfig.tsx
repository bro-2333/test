import { lazy } from "react";

import * as Type from "../utils/index";

// 二级路由
export const homeRoutes: Type.RouterList = [];
// 一级路由
const routes: Type.RouterList = [
  {
    path: "/",
    to: "/home",
  },
  {
    path: "/home",
    element: lazy(() => import("../pages/Home")),
    children: homeRoutes,
  },
  {
    path: "/details",
    element: lazy(() => import("../pages/Details")),
  },
  {
    path: "/login",
    element: lazy(() => import("../pages/login")),
  },
  {
    path: "*",
    element: lazy(() => import("../pages/Error")),
  },
];

export default routes;
