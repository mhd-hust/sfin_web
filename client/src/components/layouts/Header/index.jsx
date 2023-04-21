import React, { useState } from 'react';
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
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [currentLang, changeCurrentLang] = useState('vi');
  const navigate = useNavigate();
  const scroll = scrolled();

  const navigateHome = () => {
    scrollToTop();
    navigate('/');
  };

  const viewPort = useViewport();
  const isMobile = viewPort.width <= 768;

  const { t } = useTranslation('header');
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', i18n.language);
    changeCurrentLang(i18n.language);
  };

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
      onClick: () => handleChangeLanguage('vi'),
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
      onClick: () => handleChangeLanguage('en'),
    },
  ];

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
              {t('home')}
            </NavLink>
            <NavLink
              to='/introduction'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              {t('introduction')}
            </NavLink>
            <NavLink
              to='/services'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              {t('services')}
            </NavLink>
            <NavLink
              to='/products'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              {t('products')}
            </NavLink>
            <NavLink
              to='/projects'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              {t('projects')}
            </NavLink>
            <NavLink
              to='/recruitment'
              className={({ isActive }) => `link ${isActive ? 'actived' : ''}`}
              onClick={scrollToTop}>
              {t('recruitment')}
            </NavLink>
            <NavLink className='lang-wrapper'>
              <Dropdown
                menu={{
                  items,
                }}
                placement='bottomRight'
                arrow>
                <div className='lang'>
                  <img
                    src={currentLang === 'vi' ? viFlag : usFlag}
                    alt=''
                    className='nation-icon'
                  />
                  <img src={dropdownIcon} className='drop-icon' alt='' />
                </div>
              </Dropdown>
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
