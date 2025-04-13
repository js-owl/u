import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '1_shared/libs/classNames/classNames';
import { TabItem, Tabs } from '1_shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/const/consts';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(({ className, value, onChangeType }: ArticleTypeTabsProps) => {
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t('ALL') },
      { value: ArticleType.IT, content: t('IT') },
      { value: ArticleType.ECONOMICS, content: t('ECONOMICS') },
      { value: ArticleType.SCIENCE, content: t('SCIENCE') }
    ],
    [t]
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType]
  );

  return <Tabs tabs={typeTabs} value={value} onTabClick={onTabClick} className={classNames('', {}, [className])} />;
});
