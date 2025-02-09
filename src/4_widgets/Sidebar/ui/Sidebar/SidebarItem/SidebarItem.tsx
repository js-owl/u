import { useTranslation } from "react-i18next";
import { classNames } from "1_shared/libs/classNames/classNames";
import { AppLink, AppLinkTheme } from "1_shared/ui/AppLink/AppLink";
import { SidebarItemType } from "4_widgets/Sidebar/model/items";
import cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}
export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
};
