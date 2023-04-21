import React from 'react';
import './MoreBtn.scss';
import Right from '../../../assets/icons/Right.svg';
import { useTranslation } from 'react-i18next';

const MoreBtn = () => {
  const { t } = useTranslation('buttons');

  return (
    <button className='more-btn'>
      <span>{t('see more')}</span>
      <img src={Right} alt='' />
    </button>
  );
};

export default MoreBtn;
