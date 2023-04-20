import React from 'react';
import './Services.scss';
import ServicesCards from './ServicesCards';
import ServicesApps from './ServicesApps';

const Services = () => {
  return (
    <main className='services main-container'>
      <div className='general-title'>về chúng tôi</div>
      <ServicesCards />
      <ServicesApps />
    </main>
  );
};

export default Services;
