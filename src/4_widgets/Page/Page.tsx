import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { classNames } from "1_shared/libs/classNames/classNames";
import { useInfiniteScroll } from "1_shared/libs/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "1_shared/libs/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "1_shared/libs/hooks/useAppDispatch/useAppDispatch";
import { getUIScrollByPath, uiActions } from "3_features/UI";
import { StateSchema } from "7_app/providers/StoreProvider";
import cls from "./Page.module.scss";

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getUIScrollByPath(state, pathname)
  );

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    console.log("useInitialEffect", { scrollPosition });
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    console.log("onScroll", e.currentTarget.scrollTop);
    dispatch(
      uiActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    );
  };

  return (
    <section
      ref={wrapperRef}
      onScroll={onScroll}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
