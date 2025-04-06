import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '1_shared/libs/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false }
];

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem;
  value?: string;
}

export function ListBox(props: ListBoxProps) {
  const { className, items } = props;
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <HListBox
      as="div"
      className={classNames(cls.ListBox, {}, [className])}
      value={selectedPerson}
      onChange={setSelectedPerson}
    >
      <HListBox.Button className={cls.trigger}>
        <Button>{selectedPerson.name}</Button>
      </HListBox.Button>
      <HListBox.Options className={cls.options}>
        {people.map((person) => (
          <HListBox.Option key={person.id} value={person} disabled={person.unavailable}>
            {({ active, selected }) => (
              <li className={classNames(cls.item, { [cls.active]: active }, [])}>
                {selected && '!'}
                {person.name}
              </li>
            )}
          </HListBox.Option>
        ))}
      </HListBox.Options>
    </HListBox>
  );
}
