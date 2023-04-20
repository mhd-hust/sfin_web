import React from 'react';
import './Recruitments.scss';
import RecruitmentsDetail from './RecruitmentsDetail';
import RecruitmentsList from './RecruitmentsList';
import ServicesApps from '../../pages/Services/ServicesApps';

const Recruitments = () => {
  return (
    <main className='recruitments main-container'>
      <div className='general-title'>tuyển dụng</div>
      <RecruitmentsDetail />
      <div className='general-title'>danh sách tuyển dụng</div>
      <RecruitmentsList />
      <ServicesApps />
    </main>
  );
};

export default Recruitments;
