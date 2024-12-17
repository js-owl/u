import { classNames } from "1_shared/libs/classNames/classNames";
import { Theme, useTheme } from "7_app/providers/ThemeProvider";
import cls from "./ThemeSwither.module.scss";
import LightIcon from "1_shared/assets/icons/theme-light.svg";
import DarkIcon from "1_shared/assets/icons/theme-dark.svg";

interface ThemeSwitherProps {
  className?: string;
}
export const ThemeSwither = ({ className }: ThemeSwitherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={classNames(cls.ThemeSwither, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </button>
  );
};
