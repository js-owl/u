import { classNames } from "1_shared/libs/classNames/classNames";
import { AppLink, AppLinkTheme } from "1_shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";
import { ThemeSwither } from "4_widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwither />
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          Main
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={"/about"}>
          About
        </AppLink>
      </div>
    </div>
  );
};
export default Navbar;
