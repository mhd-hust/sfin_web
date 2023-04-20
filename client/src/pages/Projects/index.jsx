import React from 'react';
import './Projects.scss';
import ProjectsCards from './ProjectsCards';
import ServicesApps from '../../pages/Services/ServicesApps';

const Projects = () => {
  return (
    <main className='projects main-container'>
      <div className='general-title'>DỰ ÁN TIÊU BIỂU</div>
      <ProjectsCards />
      <ServicesApps />
    </main>
  );
};

export default Projects;
