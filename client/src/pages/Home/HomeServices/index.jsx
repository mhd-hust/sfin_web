import React from 'react';
import './HomeServices.scss';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
import MoreBtn from '../../../components/Buttons/MoreBtn';
import service1 from '../../../assets/images/Home/service1.png';
import service2 from '../../../assets/images/Home/service2.png';
import service3 from '../../../assets/images/Home/service3.png';

const cards = [
  {
    img: service1,
    title: 'Cung cấp giải pháp thanh toán số và fintech',
    description:
      'SFIN tự hào là đơn vị tiên phong trong việc tư vấn và thiết kế, lập trình các giải pháp thanh toán và fintech cho nhiều đối tác lớn tại Việt Nam.  Các giải pháp chúng tôi cung cấp được các Đối tác đánh giá cao về tính hiệu quả, an toàn và tính bảo mật cao',
  },
  {
    img: service2,
    title: 'Giải pháp dịch vụ phần mềm cho doanh nghiệp',
    description:
      'Các giải pháp cho doanh nghiệp do SFIN phát triển được ứng dụng các công nghệ mới để tạo ra quy trình hoạt động mới, văn hóa và trải nghiệm khách hàng để đáp ứng đa dạng nhu cầu của thị trường. Giải pháp của chúng tôi phù hợp với nhiều lĩnh vực như thương mại điện tử, quản lý doanh nghiệp...',
  },
  {
    img: service3,
    title: 'Tư vấn giải pháp công nghệ thông tin',
    description:
      'Với kinh nghiệm tư vấn CNTT và triển khai cho nhiều doanh nghiệp Việt Nam, SFIN cam kết mang đến cho các doanh nghiệp giải pháp CNTT hiện đại, tiêu chuẩn, an toàn hiệu quả với chi phí đầu tư thấp nhất',
  },
];

const HomeServices = () => {
  return (
    <div className='home-services'>
      <div className='general-title'>dịch vụ</div>
      <Row gutter={[64, 64]}>
        {cards.map((card, index) => (
          <Col xs={24} sm={24} md={8} key={index}>
            <Card
              style={{ height: '100%' }}
              hoverable
              cover={<img alt='example' src={card.img} className='card-img' />}>
              <Meta title={card.title} description={card.description} />
            </Card>
          </Col>
        ))}
        <Col span={24}>
          <MoreBtn />
        </Col>
      </Row>
    </div>
  );
};

export default HomeServices;
