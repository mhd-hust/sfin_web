import React from 'react';
import './MoreBtn.scss';
import Right from '../../../assets/icons/Right.svg';

const MoreBtn = () => {
  return (
    <button className='more-btn'>
      <span>Xem thêm</span>
      <img src={Right} alt='' />
    </button>
  );
};

export default MoreBtn;
