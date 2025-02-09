import { RoutePath } from "1_shared/config/routeConfig/routeConfig";
import MainIcon from "1_shared/assets/icons/main.svg";
import AboutIcon from "1_shared/assets/icons/about.svg";
import ProfileIcon from "1_shared/assets/icons/profile.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: "main",
    icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: "about",
    icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: "profile",
    icon: ProfileIcon,
  },
];
