import { memo } from 'react';
import { classNames } from '@/1_shared/libs/classNames/classNames';
import { Theme, useTheme } from '@/7_app/providers/ThemeProvider';
import LightIcon from '@/1_shared/assets/icons/theme-light.svg';
import DarkIcon from '@/1_shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from '@/1_shared/ui/Button/Button';
import cls from './ThemeSwither.module.scss';

interface ThemeSwitherProps {
  className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwither, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
