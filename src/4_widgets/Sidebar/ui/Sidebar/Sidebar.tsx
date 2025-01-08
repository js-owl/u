import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "4_widgets/ThemeSwitcher";
import { LangSwithcher } from "4_widgets/LangSwithcher";
import { Button, ButtonTheme, ButtonSize } from "1_shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "1_shared/ui/AppLink/AppLink";
import { RoutePath } from "1_shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
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
          {t("main")}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.RED}
          to={RoutePath.about}
          className={cls.item}
        >
          {t("about")}
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
