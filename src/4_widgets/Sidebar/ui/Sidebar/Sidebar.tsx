import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '1_shared/libs/classNames/classNames';
import { Button, ButtonTheme, ButtonSize } from '1_shared/ui/Button/Button';
import { VStack } from '1_shared/ui/Stack/VStack/VStack';
import { ThemeSwitcher } from '4_widgets/ThemeSwitcher';
import { LangSwithcher } from '4_widgets/LangSwithcher';

import cls from './Sidebar.module.scss';
import { SidebarItem } from './SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItems = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () => sidebarItems.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
    [collapsed, sidebarItems]
  );

  return (
    <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack gap="8" className={cls.items}>
        {itemsList}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwithcher short={collapsed} className={cls.lang} />
      </div>
    </aside>
  );
};
