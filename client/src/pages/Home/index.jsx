import React from 'react';
import './Home.scss';
import HomeIntro from './HomeIntro';
import MoreBtn from '../../components/Buttons/MoreBtn';
import InstallBtn from '../../components/Buttons/InstallBtn';
import HomeServices from './HomeServices';
import HomeProducts from './HomeProducts';
import HomeProjects from './HomeProjects';
import HomeRecruitments from './HomeRecruitments';
import HomePartners from './HomePartners';

const Home = () => {
  return (
    <main className='home main-container'>
      <HomeIntro />
      <HomeServices />
      <HomeProducts />
      <HomeProjects />
      <HomeRecruitments />
      <HomePartners />
    </main>
  );
};

export default Home;
