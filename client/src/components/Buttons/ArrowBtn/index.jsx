import React from 'react';
import prevBtn from '../../../assets/icons/prevBtn.svg';
import './ArrowBtn.scss';

export const PrevArrow = ({ onClick }) => {
  return (
    <div className='slide-btn' onClick={onClick}>
      <img src={prevBtn} alt='' />
    </div>
  );
};

export const NextArrow = ({ onClick }) => {
  return (
    <div className='slide-btn next' onClick={onClick}>
      <img src={prevBtn} alt='' />
    </div>
  );
};
