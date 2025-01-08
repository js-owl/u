import { useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import MaintIcon from "1_shared/assets/icons/main.svg";
import AboutIcon from "1_shared/assets/icons/about.svg";
import { RoutePath } from "1_shared/config/routeConfig/routeConfig";
import { Button, ButtonTheme, ButtonSize } from "1_shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "1_shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "4_widgets/ThemeSwitcher";
import { LangSwithcher } from "4_widgets/LangSwithcher";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
        onClick={onToggle}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.main}
          className={cls.item}
        >
          <MaintIcon className={cls.icon} />
          <span className={cls.link}>{t("main")}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.RED}
          to={RoutePath.about}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t("about")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
