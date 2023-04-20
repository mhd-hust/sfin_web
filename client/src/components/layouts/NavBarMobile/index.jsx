import React, { useState } from 'react';
import { Button, Collapse, Drawer, Menu } from 'antd';
import sfinLogo from '../../../assets/logos/sfin/LG_SFIN.svg';
import viFlag from '../../../assets/images/vi.png';
import usFlag from '../../../assets/images/us.png';
import dropdownIcon from '../../../assets/icons/dropdown.png';
import { scrolled, scrollToTop } from '../../../utils/handleScroll';
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  MailOutlined,
  CustomerServiceOutlined,
  GlobalOutlined,
  UserOutlined,
  DownOutlined,
  AudioOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBarMobile.scss';
// import { Input } from 'antd';
// const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <NavLink
      to='/'
      className={({ isActive }) => `nav-bar-link ${isActive ? 'actived' : ''}`}
      onClick={scrollToTop}
      style={{ fontWeight: 400, fontSize: '3rem', paddingLeft: '1.6rem' }}>
      Trang chủ
    </NavLink>,
    '1',
    <HomeOutlined />
  ),
  getItem(
    <NavLink
      to='/introduction'
      className={({ isActive }) => `nav-bar-link ${isActive ? 'actived' : ''}`}
      onClick={scrollToTop}
      style={{ fontWeight: 400, fontSize: '3rem', paddingLeft: '1.6rem' }}>
      giới thiệu
    </NavLink>,
    '2',
    <InfoCircleOutlined />
  ),
  getItem(
    <NavLink
      to='/services'
      className={({ isActive }) => `nav-bar-link ${isActive ? 'actived' : ''}`}
      onClick={scrollToTop}
      style={{ fontWeight: 400, fontSize: '3rem', paddingLeft: '1.6rem' }}>
      dịch vụ
    </NavLink>,
    '3',
    <UserOutlined />
  ),
  getItem(
    <NavLink
      to='/products'
      className={({ isActive }) => `nav-bar-link ${isActive ? 'actived' : ''}`}
      onClick={scrollToTop}
      style={{ fontWeight: 400, fontSize: '3rem', paddingLeft: '1.6rem' }}>
      sản phẩm
    </NavLink>,
    '4',
    <HomeOutlined />
  ),
  getItem(
    <NavLink
      to='/projects'
      className={({ isActive }) => `nav-bar-link ${isActive ? 'actived' : ''}`}
      onClick={scrollToTop}
      style={{ fontWeight: 400, fontSize: '3rem', paddingLeft: '1.6rem' }}>
      dự án
    </NavLink>,
    '5',
    <HomeOutlined />
  ),
  getItem(
    <NavLink
      to='/recruitments'
      className={({ isActive }) => `nav-bar-link ${isActive ? 'actived' : ''}`}
      onClick={scrollToTop}
      style={{ fontWeight: 400, fontSize: '3rem', paddingLeft: '1.6rem' }}>
      tuyển dụng
    </NavLink>,
    '6',
    <SearchOutlined />
  ),
  // getItem(
  //   <div
  //     className='nav-bar-link lang'
  //     style={{ fontWeight: 400, fontSize: '3rem', paddingLeft: '1.6rem' }}>
  //     {/* <img src={viFlag} alt='' className='flag-icon' />
  //     <img src={dropdownIcon} className='drop-icon' alt=''></img> */}
  //     ngôn ngữ
  //   </div>,
  //   '7',
  //   <GlobalOutlined />,
  //   [
  //     getItem(
  //       'Vietnamese',
  //       '5',
  //       <img
  //         src={viFlag}
  //         alt=''
  //         className='nation-icon'
  //         style={{
  //           width: '4.6rem',
  //           border: '0.2rem solid #fff',
  //           borderRadius: '0.2rem',
  //         }}
  //       />
  //     ),
  //     getItem(
  //       'English',
  //       '6',
  //       <img
  //         src={usFlag}
  //         alt=''
  //         className='nation-icon'
  //         style={{
  //           width: '4.6rem',
  //           border: '0.2rem solid #fff',
  //           borderRadius: '0.2rem',
  //         }}
  //       />
  //     ),
  //   ]
  // ),
];

const NavBarMobile = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const navigateHome = () => {
    scrollToTop();
    onClose();
    navigate('/');
  };
  return (
    <aside className='nav-bar'>
      <Button
        // type='primary'
        icon={<MenuOutlined />}
        size='large'
        className='menu-respon'
        onClick={showDrawer}
      />
      <Drawer
        title={
          <img
            src={sfinLogo}
            alt='SFIN Logo'
            className='sfin-logo'
            onClick={navigateHome}
          />
        }
        placement='right'
        onClose={onClose}
        open={open}
        style={{ width: '100%' }}>
        <Menu
          style={{
            fontSize: '3.4rem',
            textTransform: 'capitalize',
            color: '#4B4B4B',
          }}
          items={items}
          mode='inline'
          onClick={onClose}
        />
      </Drawer>
    </aside>
  );
};

export default NavBarMobile;
