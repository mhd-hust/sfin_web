import React from 'react';
import './Footer.scss';
import { FloatButton } from 'antd';
import addressIcon from '../../../assets/icons/addressIcon.svg';
import phoneIcon from '../../../assets/icons/phoneIcon.svg';
import mailIcon from '../../../assets/icons/mailIcon.svg';
import fbIcon from '../../../assets/icons/fbIcon.svg';
import tiktokIcon from '../../../assets/icons/tiktokIcon.svg';
import youtubeIcon from '../../../assets/icons/youtubeIcon.svg';
import linkedinIcon from '../../../assets/icons/linkedinIcon.svg';
import bocongthuong from '../../../assets/images/bocongthuong.png';

const contact = [
  {
    alt: 'address icon',
    icon: addressIcon,
    text: (
      <>
        <span>Số 89b Đường Đền Lừ, Phường Hoàng Văn Thụ</span>
        <span>Quận Hoàng Mai, Thành Phố Hà Nội</span>
      </>
    ),
  },
  { alt: 'phone icon', icon: phoneIcon, text: '+84-969877888' },
  { alt: 'mail icon', icon: mailIcon, text: 'letaidai@sfin.vn' },
];

const socialNetwork = [
  {
    link: 'https://fb.com',
    img: fbIcon,
    alt: 'facebook',
  },
  {
    link: 'https://tiktok.com',
    img: tiktokIcon,
    alt: 'tiktok',
  },
  {
    link: 'https://youtube.com',
    img: youtubeIcon,
    alt: 'youtube',
  },
  {
    link: 'https://linkedin.com',
    img: linkedinIcon,
    alt: 'linkedin',
  },
];

const Footer = () => {
  return (
    <footer>
      <FloatButton.BackTop tooltip={<div>Back top</div>} />
      <div className='main-container'>
        <div className='footer-l'>
          <div className='footer-title'>
            <h1>cÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG MINH SFIN</h1>
          </div>
          <div className='footer-info'>
            {contact.map((contact, index) => (
              <div className='contact-item' key={index}>
                <img src={contact.icon} alt={contact.alt} />
                <p>{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='footer-r'>
          <div className='bo-cong-thuong'>
            <img src={bocongthuong} alt='' />
          </div>
          <div className='social-networks'>
            <p>Kết nối với chúng tôi</p>
            <div className='social-networks-icon'>
              {socialNetwork.map((socialNetwork, index) => (
                <a
                  href={socialNetwork.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  key={index}
                  className='item-icon'>
                  <img src={socialNetwork.img} alt={socialNetwork.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
