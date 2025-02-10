import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { Button, ButtonTheme, ButtonSize } from "1_shared/ui/Button/Button";
import { ThemeSwitcher } from "4_widgets/ThemeSwitcher";
import { LangSwithcher } from "4_widgets/LangSwithcher";
import { SidebarItemsList } from "4_widgets/Sidebar/model/items";
import cls from "./Sidebar.module.scss";
import { SidebarItem } from "./SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        {SidebarItemsList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
};
