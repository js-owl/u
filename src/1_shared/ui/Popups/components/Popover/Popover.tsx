import { ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '1_shared/types/ui';
import { classNames } from '1_shared/libs/classNames/classNames';

import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  children: ReactNode;
  direction?: DropdownDirection;
}

export function Popover(props: PopoverProps) {
  const { className, trigger, children, direction = 'bottom right' } = props;
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>{children}</HPopover.Panel>
    </HPopover>
  );
}
