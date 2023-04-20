import React, { useRef } from 'react';
import './HomeRecruitments.scss';
import Accountant from '../../../assets/images/Recruitments/Accountant.png';
import BA from '../../../assets/images/Recruitments/BA.png';
import Dev from '../../../assets/images/Recruitments/Dev.png';
import InternWeb from '../../../assets/images/Recruitments/Intern-web.png';
import SEO from '../../../assets/images/Recruitments/SEO.png';
import Tester from '../../../assets/images/Recruitments/Tester.png';
import MoreBtn from '../../../components/Buttons/MoreBtn';
import { Col, Row } from 'antd';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from '../../../components/Buttons/ArrowBtn';

const items = [
  {
    img: Accountant,
    position: 'tuyển dụng nhân viên kế toán',
    requirement:
      'Tốt nghiệp chuyên ngành Kế toán các trường thuộc khối ngành kinh tế, học viện tài chính, Đại học KTQĐ, Học viện Ngân hàng...',
    link: '',
  },
  {
    img: BA,
    position: 'tuyển dụng nhân viên kinh doanh',
    requirement:
      'Tốt nghiệp cao đẳng trở lên. Ưu tiên tốt nghiệp chuyên ngành QTKD, Marketing, CNTT hoặc chuyên ngành liên quan...',
    link: '',
  },
  {
    img: Dev,
    position: 'tuyển dụng nhân viên lập trình',
    requirement:
      'Tốt nghiệp cao đẳng, trung cấp chuyên ngành công nghệ thông tin hiểu và nắm vững kiến thức cơ bản về cấu trúc dữ liệu, thuật toán...',
    link: '',
  },
  {
    img: InternWeb,
    position: 'TUYỂN DỤNG THỰC TẬP SINH LẬP TRÌNH WEB, MOBI',
    requirement:
      'Sinh viên năm cuối/cận cuối chuyên ngành CNTT, toán - tin và tương đương, hệ chính quy...',
    link: '',
  },
  {
    img: SEO,
    position: 'tuyển dụng nhân viên seo',
    requirement:
      'Hiện đang là sinh viên năm 4 hoặc sắp tốt nghiệp, chuyên ngành Marketing, Truyền thông, Kinh tế,...',
    link: '',
  },
  {
    img: Tester,
    position: 'tuyển dụng nhân viên tester',
    requirement:
      'Ít nhất 01 năm kinh nghiệm , ưu tiên ứng viên đã từng tham gia phát triển các sản phẩm TMĐT nắm vững quy trình kiểm thử sản phẩm...',
    link: '',
  },
];

const HomeRecruitments = () => {
  const slider = useRef(null);
  const settings = {
    className: 'slider',
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <div className='home-recruitments'>
      <div className='general-title'>tuyển dụng</div>
      <div className='lists'>
        <Row
          gutter={[64, 64]}
          style={{ display: 'flex', alignItems: 'center' }}>
          <Slider {...settings} ref={slider}>
            {items.map((item, index) => (
              <Col xs={24} sm={24} md={12} key={index}>
                <Row
                  gutter={[32, 32]}
                  style={{ display: 'flex', alignItems: 'center' }}>
                  <Col span={6}>
                    <img
                      src={item.img}
                      alt={`Image ${index + 1}`}
                      className='item-img'
                    />
                  </Col>
                  <Col span={18}>
                    <div className='position'>{item.position}</div>
                    <div className='requirement'>{item.requirement}</div>
                    <MoreBtn />
                  </Col>
                </Row>
              </Col>
            ))}
          </Slider>
          <Col span={24} className='arrow-btn-group'>
            <PrevArrow onClick={() => slider?.current?.slickPrev()} />
            <NextArrow onClick={() => slider?.current?.slickNext()} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeRecruitments;
