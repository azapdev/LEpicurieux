import { Histoire, Home, Medias, Menu } from "../pages";
import type { Routes } from "../types";

export const Navroutes = {
  HISTOIRE: "/histoire",
  HOME: "/",
  MEDIAS: "/medias",
  MENU: "/menu",
};

export const routes: Routes[] = [
  {
    path: Navroutes.HOME,
    element: <Home />,
  },
  {
    path: Navroutes.HISTOIRE,
    element: <Histoire />,
  },
  {
    path: Navroutes.MEDIAS,
    element: <Medias />,
  },
  {
    path: Navroutes.MENU,
    element: <Menu />,
  },
];
