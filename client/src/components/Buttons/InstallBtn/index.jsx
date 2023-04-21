import React from 'react';
import './InstallBtn.scss';
import { useTranslation } from 'react-i18next';

const InstallBtn = () => {
  const { t } = useTranslation('buttons');

  return <button className='install-btn'>{t('install')}</button>;
};

export default InstallBtn;
