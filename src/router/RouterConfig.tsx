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
    path: "/login",
    element: lazy(() => import("../pages/Login")),
  },
  {
    path: "/lbt",
    element: lazy(() => import("../pages/Lbt")),
  },
  {
    path: "/scroll",
    element: lazy(() => import("../pages/Scroll")),
  },
  {
    path: "*",
    element: lazy(() => import("../pages/Error")),
  },
];

export default routes;
