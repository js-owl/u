import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/1_shared/libs/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/1_shared/ui/Text/Text';
import { Input } from '@/1_shared/ui/Input/Input';
import { Loader } from '@/1_shared/ui/Loader/Loader';
import { Avatar } from '@/1_shared/ui/Avatar/Avatar';
import { HStack, VStack } from '@/1_shared/ui/Stack';

import { Currency, CurrencySelect } from '@/2_entities/Currency';
import { Country, CountrySelect } from '@/2_entities/Country';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (currency: Country) => void;
}
export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack justify="center" max className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text theme={TextTheme.ERROR} title={t('error occur')} text={t('try to reload')} align={TextAlign.CENTER} />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  };

  return (
    <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
      {data?.avatar && (
        <HStack justify="center" max>
          <Avatar src={data?.avatar} />
        </HStack>
      )}
      <Input
        value={data?.first}
        placeholder={t('name')}
        data-testid="ProfileCard.firstname"
        onChange={onChangeFirstName}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder={t('lastname')}
        data-testid="ProfileCard.lastname"
        onChange={onChangeLastName}
        readonly={readonly}
      />
      <Input value={data?.age} placeholder={t('age')} onChange={onChangeAge} readonly={readonly} />
      <Input value={data?.city} placeholder={t('city')} onChange={onChangeCity} readonly={readonly} />
      <Input value={data?.username} placeholder={t('username')} onChange={onChangeUsername} readonly={readonly} />
      <Input value={data?.avatar} placeholder={t('avatar')} onChange={onChangeAvatar} readonly={readonly} />
      <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VStack>
  );
};
