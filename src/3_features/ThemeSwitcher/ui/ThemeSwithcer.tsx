import { memo } from 'react';
import LightIcon from '@/1_shared/assets/icons/theme-light.svg';
import DarkIcon from '@/1_shared/assets/icons/theme-dark.svg';
import { Theme } from '@/1_shared/const/theme';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { useTheme } from '@/1_shared/libs/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/1_shared/ui/Button/Button';
import cls from './ThemeSwither.module.scss';

interface ThemeSwitherProps {
  className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwither, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
