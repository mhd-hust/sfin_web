import React from 'react';
import './Recruitment.scss';
import RecruitmentDetail from './RecruitmentDetail';
import RecruitmentList from './RecruitmentList';
import ServicesApps from '../../pages/Services/ServicesApps';

const Recruitment = () => {
  return (
    <main className='recruitment main-container'>
      <div className='general-title'>tuyển dụng</div>
      <RecruitmentDetail />
      <div className='general-title'>danh sách tuyển dụng</div>
      <RecruitmentList />
      <ServicesApps />
    </main>
  );
};

export default Recruitment;
