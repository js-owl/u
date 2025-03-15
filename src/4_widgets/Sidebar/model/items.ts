import { RoutePath } from "1_shared/config/routeConfig/routeConfig";
import MainIcon from "1_shared/assets/icons/main.svg";
import AboutIcon from "1_shared/assets/icons/about.svg";
import ProfileIcon from "1_shared/assets/icons/profile.svg";
import ArticleIcon from "1_shared/assets/icons/article-20-20.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
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
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: "articles",
    icon: ArticleIcon,
    authOnly: true,
  },
];
