import React, { useState } from 'react';
import './NotFound.scss';
import DaiImg from '../../assets/images/Introduction/founders/dai.png';
import DatImg from '../../assets/images/Introduction/founders/dat.png';
import KiemImg from '../../assets/images/Introduction/founders/kiem.png';
import TungImg from '../../assets/images/Introduction/founders/tung.png';
import flag from '../../assets/icons/flag.svg';
import inIcon from '../../assets/icons/in.svg';
import { Col, Row } from 'antd';

const founders = [
  {
    name: 'lÊ TÀI ĐẠI',
    position: 'Chủ tịch HĐQT - CEO',
    img: DaiImg,
    exp: [
      '20 năm CNTT & 13 năm Fintech',
      'CTO & CEO VNPT EPAY',
      'GĐTT Giải Pháp Viettel Solution',
      'CTO - TIMA Group',
    ],
    background: ['Kỹ sư CNTT ĐH BKHN', 'MBA Leipzig CHLB Đức'],
  },
  {
    name: 'lUYỆN THANH ĐẠT',
    position: 'Thành viên HĐQT - CTO',
    img: DatImg,
    exp: [
      '20 năm CNTT & 13 năm Fintech',
      'CTO & CEO VNPT EPAY',
      'GĐTT Giải Pháp Viettel Solution',
      'CTO - TIMA Group',
    ],
    background: ['Kỹ sư CNTT ĐH BKHN', 'MBA Leipzig CHLB Đức'],
  },
  {
    name: 'NGUYỄN XUÂN KIỂM',
    position: 'Thành viên HĐQT',
    img: KiemImg,
    exp: [
      '20 năm CNTT & 13 năm Fintech',
      'CTO & CEO VNPT EPAY',
      'GĐTT Giải Pháp Viettel Solution',
      'CTO - TIMA Group',
    ],
    background: ['Kỹ sư CNTT ĐH BKHN', 'MBA Leipzig CHLB Đức'],
  },
  {
    name: 'NGUYỄN THANH TÙNG',
    position: 'Thành viên HĐQT - Tp. PTDV',
    img: TungImg,
    exp: [
      '20 năm CNTT & 13 năm Fintech',
      'CTO & CEO VNPT EPAY',
      '20 năm CNTT & 13 năm Fintech',
      'CTO & CEO VNPT EPAY',
      'GĐTT Giải Pháp Viettel Solution',
      'CTO - TIMA Group',
    ],
    background: ['Kỹ sư CNTT ĐH BKHN', 'MBA Leipzig CHLB Đức'],
  },
];

const IntroFounders = () => {
  return (
    <main className='not-found main-container'>
      <div className='general-title'>founders</div>
      <Row
        gutter={[32, 32]}
        style={{
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        {founders.map((item, index) => (
          <Col
            xs={24}
            sm={12}
            md={12}
            xxl={6}
            key={index}
            className='founder-info'
            // style={{ height: '100%' }}
          >
            <div className='founder-name'>
              <img src={flag} alt='flag' />
              <h3>{item.name}</h3>
            </div>
            <div className='card'>
              <div className='img-wrap'>
                <img src={item.img} alt={`Founder ${index + 1}`} />
              </div>
              <div className='bottom-wrap'>
                <div className='detail-info'>
                  <h3 className='position'>{item.position}</h3>
                  <div className='detail-info-item-wrap'>
                    <div className='detail-info-item'>
                      <h4>Kinh nghiệm:</h4>
                      <ul>
                        {item.exp.map((exp, i) => (
                          <li className='italic' key={i}>
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className='detail-info-item'>
                      <h4>Học vấn:</h4>
                      <ul>
                        {item.background.map((bg, i) => (
                          <li className='italic' key={i}>
                            {bg}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='in-link'>
                  <img src={inIcon} alt='' />
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default IntroFounders;
