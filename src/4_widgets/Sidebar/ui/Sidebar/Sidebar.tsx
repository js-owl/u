import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwither } from "4_widgets/ThemeSwitcher";
import { LangSwithcher } from "4_widgets/LangSwithcher";
import { Button } from "1_shared/ui/Button/Button";
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
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwither />
        <LangSwithcher className={cls.lang} />
      </div>
    </div>
  );
};
