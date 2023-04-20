import React from 'react';
import './ServicesCards.scss';
import service1 from '../../../assets/images/Services/service1.svg';
import service2 from '../../../assets/images/Services/service2.svg';
import service3 from '../../../assets/images/Services/service3.svg';
import { Col, Row } from 'antd';
import inIcon from '../../../assets/icons/in.svg';
import contactIcon from '../../../assets/icons/contact.svg';
import letterIcon from '../../../assets/icons/letter.svg';
import messIcon from '../../../assets/icons/mess.svg';

const cards = [
  {
    img: service1,
    title: 'Cung cấp giải pháp thanh toán số và fintech',
    description: [
      'SFIN tự hào là đơn vị tiên phong trong việc tư vấn và thiết kế, lập trình các giải pháp thanh toán số và fintech cho nhiều đối tác lớn tại Việt Nam. Các giải pháp chúng tôi cung cấp được các Đối tác đánh giá cao về tính hiệu quả, an toàn và tính bảo mật cao.',
      'Công nghệ chúng tôi sử dụng trong việc xây dựng giải pháp là các công nghệ mới như AI, Bigdata.... sẽ giúp hệ thống chính xác và an toàn, UI/UX thân thiện với người dùng Các dự án như FINBLUE, FIBO CAPITAL,... được các doanh nghiệp đánh gía cao',
    ],
  },
  {
    img: service2,
    title: 'Giải pháp dịch vụ phần mềm cho doanh nghiệp',
    description: [
      'Chúng tôi cung cấp một loạt các dịch vụ và giải pháp công nghệ tập trung vào các ứng dụng AI, Bigdata, Web và Di động phù hợp với các vấn đề cụ thể của doanh nghiệp và công ty SMEs; hộ kinh doanh cá nhân;',
      'Với ứng dụng công nghệ phù hợp, chúng tôi sẽ biến giấc mơ kinh doanh của bạn thành hiện thực.',
      'Với đội ngũ quản lý hơn 15 năm kinh nghiệm làm việc cho các công ty lớn cùng hàng triệu khách hàng, theo mô hình B2B và B2C và các kỹ sư lập trình và đồ hoạ giỏi chúng tôi luôn đưa ra các giải pháp phần mềm phù hợp cho nhiều doanh nghiệp lớn, doanh nghiệp vừa và nhỏ, các hộ kinh doanh cá nhân,...',
    ],
  },
  {
    img: service3,
    title: 'tư vấn giải pháp công nghệ thông tin',
    description: [
      'Để một doanh nghiệp, tổ chức hoạt động hiệu quả, đảm bảo tối ưu năng suất, tạo điều kiện thuận lợi cho công tác điều hành và quản lý, cơ sở hạ tầng CNTT và phần mềm hỗ trợ phải đủ mạnh, đảm bảo đáp ứng nhu cầu sử dụng của doanh nghiệp trong cả chiến lược ngắn hạn và dài hạn. Với đội ngũ chuyên gia có nhiều kinh nghiệm tư vấn CNTTcho nhiều doanh nghiệp Việt Nam, SFIN cam kết mang đến cho các doanh nghiệp giải pháp CNTT hiện đại, tiêu chuẩn, an toàn. Với việc liên tục cải tiến, áp dụng các công nghệ mới nhất, các doanh nghiệp/tổ chức sẽ hoàn toàn yên tâm khi sử dụng giải pháp CNTT hiệu quả với chi phí đầu tư thấp nhất.',
    ],
  },
];

const socialNetworks = [inIcon, contactIcon, letterIcon, messIcon];

const ServicesCards = () => {
  return (
    <div className='services-cards-wrap'>
      {cards.map((card, index) => (
        <Row
          gutter={[48, 128]}
          style={{
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'end',
          }}
          key={index}>
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 13, order: `${index % 2 === 0 ? 1 : 2}` }}
            className='col-img'>
            <div>
              <img src={card.img} alt={`Image ${index + 1}`} />
            </div>
          </Col>
          <Col
            xs={{ span: 24, order: 2 }}
            sm={{ span: 24, order: 2 }}
            md={{ span: 11, order: `${index % 2 === 0 ? 2 : 1}` }}
            className='col-detail'>
            <div className='text'>
              <div className='title'>{card.title}</div>
              <div className='des'>
                {card.description.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
            <div className='social-networks-btn'>
              {socialNetworks.map((socialNetwork, j) => (
                <img src={socialNetwork} alt={`Icon ${j + 1}`} key={j} />
              ))}
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ServicesCards;
