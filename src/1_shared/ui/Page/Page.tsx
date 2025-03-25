import { memo, ReactNode } from "react";
import { classNames } from "1_shared/libs/classNames/classNames";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = memo(({ className, children }: PageProps) => {
  return (
    <section className={classNames(cls.Page, {}, [className])}>
      {children}
    </section>
  );
});
