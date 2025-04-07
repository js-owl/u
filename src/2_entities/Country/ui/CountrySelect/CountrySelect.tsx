import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '1_shared/libs/classNames/classNames';
import { Select } from '1_shared/ui/Select/Select';
import { ListBox } from '1_shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus }
];

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation();
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <ListBox
      className={classNames('', {}, [className])}
      // label={t('country')}
      items={options}
      defaultValue={t('select country')}
      label={t('select country')}
      value={value}
      readonly={readonly}
      direction="top"
      onChange={onChangeHandler}
    />
  );
});
