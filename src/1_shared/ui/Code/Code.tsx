import { memo, ReactNode } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./Code.module.scss";
import { Button } from "../Button/Button";

interface CodeProps {
  className?: string;
  children: ReactNode;
}

export const Code = memo(({ className, children }: CodeProps) => {
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn}>Копировать</Button>
      <code>{children}</code>
    </pre>
  );
});
