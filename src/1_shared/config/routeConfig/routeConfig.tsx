import { RouteProps } from "react-router-dom";
import { MainPage } from "5_p/MainPage";
import { AboutPage } from "5_p/AboutPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
};
