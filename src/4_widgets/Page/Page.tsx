import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { classNames } from '1_shared/libs/classNames/classNames';
import { useThrottle } from '1_shared/libs/hooks/useThrottle/useThrottle';
import { useInfiniteScroll } from '1_shared/libs/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '1_shared/libs/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '1_shared/libs/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from '3_features/UI';
import { StateSchema } from '7_app/providers/StoreProvider';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd
  });

  useInitialEffect(() => {
    console.log('useInitialEffect', { scrollPosition });
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname
      })
    );
  }, 500);

  return (
    <main ref={wrapperRef} onScroll={onScroll} className={classNames(cls.Page, {}, [className])} id={PAGE_ID}>
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
});
