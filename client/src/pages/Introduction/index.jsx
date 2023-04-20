import React from 'react';
import './Introduction.scss';
import IntroHead from './IntroHead';
import IntroFounders from './IntroFounders';
import IntroCulture from './IntroCulture';

const Introduction = () => {
  return (
    <main className='introduction main-container'>
      <IntroHead />
      <IntroFounders />
      <IntroCulture />
    </main>
  );
};

export default Introduction;
