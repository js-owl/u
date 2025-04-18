import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo(
  ({
    className, tabs, value, onTabClick
  }: TabsProps) => {
    const clickHandle = useCallback(
      (tab: TabItem) => {
        return () => {
          onTabClick(tab);
        };
      },
      [onTabClick]
    );

    return (
      <div className={classNames(cls.Tabs, {}, [className])}>
        {tabs.map((tab) => (
          <Card
            key={tab.value}
            className={cls.tab}
            theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
            onClick={clickHandle(tab)}
          >
            {tab.content}
          </Card>
        ))}
      </div>
    );
  }
);
