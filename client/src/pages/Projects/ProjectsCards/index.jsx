import React from 'react';
import './ProjectsCards.scss';
import { Col, Row } from 'antd';
import project1 from '../../../assets/images/Projects/project1.svg';
import project2 from '../../../assets/images/Projects/project2.svg';
import project3 from '../../../assets/images/Projects/project3.svg';
import project4 from '../../../assets/images/Projects/project4.svg';

const cards = [
  {
    name: 'DỰ ÁN MEHUB',
    img: project1,
    title: 'Mô hình nền tảng thương mại điện tử Print-On-Demand (POD)',
    des: 'Với thế giới mô hình nền tảng thương mại điện tử Print- On - Demand (POD) là một mô hình không còn xa lạ. Tuy nhiên với Việt Nam đây là một mô hình hoàn toàn mới lạ. SFIN cùng với Thinkgroup cùng kết hợp để triển khai mô hình này vào thị trường Việt Nam và là một trong những doanh nghiệp đầu tiên đưa mô hình này vào thị trường Việt Nam',
    lists: [
      'In theo yêu cầu',
      'Sản phẩm tùy chỉnh',
      'Tạo ra sản phẩm nhanh chóng',
    ],
  },
  {
    name: 'DỰ ÁN FINBLUE',
    img: project2,
    title: 'GIẢI PHÁP INVESTMENTT PLATFORM, BUY NOW PAY LATER, P2P',
    des: 'SFIN Tự hào là đơn vị cung cấp các giải pháp công nghệ để phát triển các platform Investment, Buy Now Pay Later, P2P. Với kinh nghiệm xử lý và phân tích về công nghệ cũng như nghiệp vụ, SFIN được Đối tác đánh giá cao về chất lượng xây dựng sản phẩm cũng như tính bảo mật an toàn của sản phẩm',
    lists: [
      'Mua hàng ngay không cần chờ đợi, không cần để dành đủ tiền',
      'Chia nhỏ khoản thanh toán làm nhiều kỳ, giúp giảm áp lực tài chính',
      'Mở rộng lượng khách hàng hơn nhờ việc giảm áp lực tài chính',
    ],
  },
  {
    name: 'DỰ ÁN SAVA',
    img: project3,
    title: 'SAVA Metaverse Meeting- Giải pháp Meeting sử dụng công nghệ VR/AR',
    des: 'Trong thời đại 4.0, Công nghệ thực tế ảo (VR) và Thực tế ảo tăng cường (AR) là xu hướng phát triển mạnh mẽ. Chúng tôi là tự hào là đơn vị cùng với đối tác cung cấp giải pháp Meetings sử dụng công nghệ VR/AR. Giải pháp giúp các doanh nghiệp chi phí đi lại, cải thiện năng suất tại các cuộc họp, và hỗ trợ các phong cách làm việc đa dạng.',
    lists: [
      'Môi trường 3D nhiều người dùng liên tục dựa trên web',
      'Không gian trưng bày, sự kiện & hội thảo',
      'Thiết kế avatar và hình ảnh động của công ty tùy chỉnh',
    ],
  },
  {
    name: 'DỰ ÁN MOBIFONE MONEY',
    img: project4,
    title: 'MobiFone Money',
    des: 'MobiFone Money là Hệ sinh thái Tài chính số của MobiFone, cung cấp cho khách hàng các dịch vụ tài chính trên nền tảng số một cách dễ dàng, nhanh chóng và an toàn. Khách hàng có thể sử dụng trên nhiều thiết bị ở mọi lúc, mọi nơi mà chưa cần tài khoản ngân hàng hay kết nối Internet. Trong vai trong chuyên gia tư vấn xây dụng kiến trúc và hỗ trợ triển khai, chúng tôi đã hoàn thiện được hệ thống và giúp khách hàng vận hành chính thức đáp ứng hàng triệu khách hàng và giao dich mỗi tháng.',
    lists: [
      'An toàn bảo mật',
      'Thao tác dẽ dàng',
      'Chuyển, nhận tiền linh hoạt',
    ],
  },
];

const ProjectsCards = () => {
  return (
    <div className='projects-cards'>
      {cards.map((card, index) => (
        <div className='card-item' key={index}>
          <div className='title'>{card.name}</div>
          <Row
            gutter={[48, 128]}
            style={{
              display: 'flex',
              // justifyContent: 'center',
              alignItems: 'end',
            }}>
            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 24, order: 1 }}
              md={{ span: 11, order: 1 }}
              className='col-img'>
              <div>
                <img src={card.img} alt={`Image ${index + 1}`} />
              </div>
            </Col>
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              md={{ span: 13, order: 2 }}
              className='col-detail'>
              <div className='text'>
                <div className='sub-title'>{card.title}</div>
                <div className='des'>
                  <p>{card.des}</p>
                  <ul>
                    {card.lists.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
