import React from 'react';
import './Header.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import sfinLogo from '../../../assets/logos/sfin/LG_SFIN.svg';
import viFlag from '../../../assets/images/vi.png';
import usFlag from '../../../assets/images/us.png';
import dropdownIcon from '../../../assets/icons/dropdown.png';
import { scrolled, scrollToTop } from '../../../utils/handleScroll';
import NavBarMobile from '../NavBarMobile';
import useViewport from '../../../hooks/useViewPorts';

const items = [
  {
    key: 'vi',
    label: (
      <div className='dropdown-item'>
        <div>
          <img src={viFlag} alt='' className='nation-icon' />
        </div>
        <p>Vietnamese</p>
      </div>
    ),
    // onClick: () => handleChangeLanguage('en'),
  },
  {
    key: 'en',
    label: (
      <div className='dropdown-item'>
        <div>
          <img src={usFlag} alt='' className='nation-icon' />
        </div>
        <p>English</p>
      </div>
    ),
    // onClick: () => handleChangeLanguage('vi'),
  },
];

const Header = () => {
  const navigate = useNavigate();
  const scroll = scrolled();

  const navigateHome = () => {
    scrollToTop();
    navigate('/');
  };

  const viewPort = useViewport();
  const isMobile = viewPort.width <= 768;

  return (
    <header className={scroll ? 'scrolled' : ''}>
      <div className='main-container'>
        <img
          src={sfinLogo}
          alt='SFIN Logo'
          className='sfin-logo'
          onClick={navigateHome}
        />
        {isMobile ? (
          <NavBarMobile />
        ) : (
          <nav>
            <NavLink
              to='/'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              Trang chủ
            </NavLink>
            <NavLink
              to='/introduction'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              giới thiệu
            </NavLink>
            <NavLink
              to='/services'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              dịch vụ
            </NavLink>
            <NavLink
              to='/products'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              sản phẩm
            </NavLink>
            <NavLink
              to='/projects'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              dự án
            </NavLink>
            <NavLink
              to='/recruitments'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              tuyển dụng
            </NavLink>
            {/* <NavLink className='lang-wrapper'>
              <Dropdown
                menu={{
                  items,
                }}
                placement='bottomRight'
                arrow>
                <div className='lang'>
                  <img src={viFlag} alt='' className='nation-icon' />
                  <img src={dropdownIcon} className='drop-icon' alt='' />
                </div>
              </Dropdown>
            </NavLink> */}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
