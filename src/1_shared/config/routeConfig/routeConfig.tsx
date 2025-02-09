import { RouteProps } from "react-router-dom";
import { MainPage } from "5_p/MainPage";
import { AboutPage } from "5_p/AboutPage";
import { ProfilePage } from "5_p/ProfilePage";
import { NotFoundPage } from "5_p/NotFoundPage";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not_found",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*",
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: { path: RoutePath.main, element: <MainPage /> },
  [AppRoutes.ABOUT]: { path: RoutePath.about, element: <AboutPage /> },
  [AppRoutes.PROFILE]: { path: RoutePath.profile, element: <ProfilePage /> },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
