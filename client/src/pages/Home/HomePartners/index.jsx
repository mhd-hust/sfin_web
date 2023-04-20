import React from 'react';
import './HomePartners.scss';
import { Col, Row } from 'antd';
import golsoft from '../../../assets/logos/partners/Logo-Golsoft 1.png';
import thinkpro from '../../../assets/logos/partners/ThinkPro-Logo-PNG 1.png';
import napas from '../../../assets/logos/partners/napas-logo.png';
import fbc from '../../../assets/logos/partners/fbc-logo.png';

const partners = [
  {
    img: golsoft,
  },
  {
    img: thinkpro,
  },
  {
    img: napas,
  },
  {
    img: fbc,
  },
];

const HomePartners = () => {
  return (
    <div className='home-partners'>
      <div className='general-title'>ĐỐI TÁC</div>
      <div className='partner-lists'>
        <Row
          gutter={[64, 64]}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {partners.map((item, index) => (
            <Col xs={12} sm={12} md={6} key={index}>
              <img src={item.img} alt={`logo ${index + 1}`} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePartners;
