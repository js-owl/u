import { classNames } from "1_shared/libs/classNames/classNames";
import { useTheme } from "7_app/providers/ThemeProvider";
import cls from "./ThemeSwither.module.scss";

interface ThemeSwitherProps {
  className?: string;
}
export const ThemeSwither = ({ className }: ThemeSwitherProps) => {
  const { toggleTheme } = useTheme();
  return (
    <button
      className={classNames(cls.ThemeSwither, {}, [className])}
      onClick={toggleTheme}
    >
      Toggle
    </button>
  );
};
