import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "1_shared/ui/Button/Button";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./LangSwithcher.module.scss";

interface LangSwithcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwithcher = memo(
  ({ className, short }: LangSwithcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
      i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };
    return (
      <Button
        className={classNames(cls.LangSwithcher, {}, [className])}
        theme={ButtonTheme.CLEAR}
        onClick={toggle}
      >
        {t(short ? "short_lang" : "lang")}
      </Button>
    );
  }
);
