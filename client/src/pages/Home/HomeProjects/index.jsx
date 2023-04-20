import React from 'react';
import './HomeProjects.scss';
import project1 from '../../../assets/images/Home/project1.png';
import project2 from '../../../assets/images/Home/project2.png';
import project3 from '../../../assets/images/Home/project3.png';
import checkedIcon from '../../../assets/icons/checked.svg';
import MoreBtn from '../../../components/Buttons/MoreBtn';
import { Col, Row } from 'antd';

const cards = [
  {
    img: project1,
    title: 'MEHUB',
    subTitle: 'Mô hình nền tảng thương mại điện tử Print-On-Demand (POD)',
    description:
      'Với thế giới mô hình nền tảng thương mại điện tử Print- On - Demand (POD) là một mô hình không còn xa lạ. Tuy nhiên với Việt Nam đây là một mô hình hoàn toàn mới lạ. SFIN cùng với Thinkgroup cùng kết hợp để triển khai mô hình này vào thị trường Việt Nam và là một trong những doanh nghiệp đầu tiên đưa mô hình này vào thị trường Việt Nam',
    link: '',
  },
  {
    img: project2,
    title: 'FINBLUE',
    subTitle: 'GIẢI PHÁP INVESTMENTT PLATFORM, BUY NOW PAY LATER, P2P',
    description:
      'SFIN Tự hào là đơn vị cung cấp các giải pháp công nghệ để phát triển các platform Investment, Buy Now Pay Later, P2P. Với kinh nghiệm xử lý và phân tích về công nghệ cũng như nghiệp vụ, SFIN được Đối tác đánh giá cao về chất lượng xây dựng sản phẩm cũng như  tính bảo mật an toàn của sản phẩm',
    link: '',
  },
  {
    img: project3,
    title: 'SAVA METAVERSE MEETING ',
    subTitle:
      'SAVA Metaverse Meeting - Giải pháp Meeting sử dụng công nghệ VR/AR',
    description:
      'Trong thời đại 4.0, Công nghệ thực tế ảo (VR) và Thực tế ảo tăng cường (AR) là xu hướng phát triển mạnh mẽ. Chúng tôi là tự hào là đơn vị cùng với đối tác cung cấp giải pháp Meetings sử dụng công nghệ VR/AR.  Giải pháp giúp các doanh nghiệp chi phí đi lại, cải thiện năng suất tại các cuộc họp, và hỗ trợ các phong cách làm việc đa dạng.',
    link: '',
  },
];

const HomeProjects = () => {
  return (
    <div className='home-projects'>
      <div className='general-title'>dự án tiêu biểu</div>
      <div className='cards'>
        {cards.map((item, index) => (
          <Row
            gutter={[64, 64]}
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '0.5rem',
            }}>
            <Col xs={24} sm={24} md={10} className='col-img'>
              <img
                src={item.img}
                alt={`Project ${index + 1}`}
                className='card-img'
              />
            </Col>
            <Col xs={24} sm={24} md={14} className='col-detail'>
              <div className='card-title'>
                <img src={checkedIcon} alt='check icon' className='card-icon' />
                <h1>{item.title}</h1>
              </div>
              <h2>{item.subTitle}</h2>
              <p>{item.description}</p>
              <MoreBtn />
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
