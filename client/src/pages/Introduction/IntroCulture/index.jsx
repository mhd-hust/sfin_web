import React, { useRef } from 'react';
import './IntroCulture.scss';
import cultureImg1 from '../../../assets/images/Introduction/culture.png';
import cultureImg2 from '../../../assets/images/Introduction/MHD_5139.png';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from '../../../components/Buttons/ArrowBtn';
import { Col, Row } from 'antd';
import item1 from '../../../assets/icons/b5 1.svg';
import item2 from '../../../assets/icons/b2 1.svg';
import item3 from '../../../assets/icons/b7 1.svg';
import item4 from '../../../assets/icons/b3 1.svg';
import item5 from '../../../assets/icons/b4 1.svg';
import item6 from '../../../assets/icons/b1 1.svg';

const sliders = [
  {
    img: cultureImg1,
  },
  {
    img: cultureImg2,
  },
];

const items = [
  {
    img: item1,
    title: 'CHÍNH TRỰC',
    description:
      'Con người, lời nói, hành động của SFINer trong cuộc sống cũng như công việc luôn là một',
  },
  {
    img: item2,
    title: 'HIỆU QUẢ',
    description: 'Kết quả đo lường bằng sự hài lòng của khách hàng',
  },
  {
    img: item3,
    title: 'QUYẾT LIỆT',
    description: 'Không có áp lực, Không có kim cương',
  },
  {
    img: item4,
    title: 'chủ động',
    description: 'Luôn coi mình là nguồn gốc của vấn đề',
  },
  {
    img: item5,
    title: 'tích cực',
    description: 'Mọi vấn đề luôn có giải pháp thực hiện',
  },
  {
    img: item6,
    title: 'CHUYÊN NGHIỆP',
    description:
      'Mỗi SFINer là một bộ phận quan trọng, không tách rời của một cỗ máy đồng bộ',
  },
];

const IntroCulture = () => {
  const slider = useRef(null);
  const settings = {
    className: 'slider',
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='intro-culture'>
      <div className='general-title'>văn hóa công ty</div>
      <div className='slide-wrap'>
        <Slider {...settings} ref={slider}>
          {sliders.map((item, i) => (
            <div className='slide-item' key={i}>
              <img src={item.img} alt='' />
            </div>
          ))}
        </Slider>
        <div className='arrow-btn-group'>
          <PrevArrow onClick={() => slider?.current?.slickPrev()} />
          <NextArrow onClick={() => slider?.current?.slickNext()} />
        </div>
      </div>
      <Row gutter={[32, 32]}>
        {items.map((item, i) => (
          <Col className='col-item' key={i} xs={12} sm={8} xxl={4}>
            <div className='icon-wrap'>
              <img src={item.img} alt={`Icon ${i + 1}`} />
            </div>
            <div className='divider'></div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default IntroCulture;
