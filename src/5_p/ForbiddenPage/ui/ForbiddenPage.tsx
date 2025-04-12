import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '4_widgets/Page/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('');

  return <Page>{t('no access')}</Page>;
};

export default ForbiddenPage;
