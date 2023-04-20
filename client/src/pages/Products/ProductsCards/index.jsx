import React from 'react';
import './ProductsCards.scss';
import { Col, Row } from 'antd';
import Product1 from '../../../assets/images/Products/Product1.svg';
import Product2 from '../../../assets/images/Products/Product2.svg';
import Product3 from '../../../assets/images/Products/Product3.svg';
import inIcon from '../../../assets/icons/in.svg';
import contactIcon from '../../../assets/icons/contact.svg';
import letterIcon from '../../../assets/icons/letter.svg';
import messIcon from '../../../assets/icons/mess.svg';

const cards = [
  {
    title: 'tăng doanh thu',
    subTitle: 'TOP 03 LÝ DO KHIẾN DOANH NGHIỆP SỤT GIẢM DOANH THU',
    img: Product1,
    desList: [
      'Chỉ bán hàng tại cửa hàng theo giờ hành chính.',
      'Khách hàng không xem được toàn bộ sản phẩm',
      'Khách hàng chưa đủ tin tưởng vào thương hiệu của bạn.',
      'X5 doanh thu bán hàng với những tính năng tuyệt vời từ ứng dụng quản lý bán hàng SSHOP.',
      'Bán hàng online 24/7, khách hàng có thể đặt hàng ở bất kỳ khung giờ nào.',
      'Mở ra nguồn thu từ kênh bán hàng mới, ứng dụng hiển thị toàn bộ thông tin sản phẩm. Khách hàng vào ứng dụng xem và chọn sản phẩm muốn mua.',
      'Khẳng định giá trị thương hiệu uy tín.',
    ],
  },
  {
    title: 'ra mắt tính năng loyalty',
    subTitle:
      'TĂNG TRƯỞNG KINH DOANH NHỜ CHÍNH SÁCH LOYALTY CHĂM SÓC KHÁCH HÀNG',
    img: Product2,
    desList: [
      '80% doanh thu của doanh nghiệp đến từ khách hàng cũ.',
      'Chi phí bán hàng cho khách hàng mới cao hơn 5 – 10 lần so với khách hàng trung thành.',
      '70% khách hàng sẽ giới thiệu khách hàng mới sau khi có trải nghiệm khách hàng tích cực.',
      'Làm thế nào để xây dựng được những chiến lược thu hút khách hàng, in đậm hình ảnh doanh nghiệp trong tâm trí khách hàng?',
      'Thấu hiểu được những điều trên SShop cho ra mắt tính năng Loyatly mang đến giải pháp tối ưu cho để gia tăng trải nghiệm cho khách hàng.',
      'Tính năng Loyalty, thông báo đẩy Push Notification tự động gửi các chương trình CSKH, tích điểm, voucher,… tới từng khách hàng hàng, kéo khách hàng quay trở lại với cửa hàng, kích thích mua hàng, giảm thiểu chi phí Marketing.',
    ],
  },
  {
    title: 'quy mô kinh doanh đa dạng',
    subTitle:
      'Một phần mềm quản lý bán hàng phù hợp với đa dạng QUY MÔ KINH DOANH?',
    img: Product3,
    desList: [
      'Đã có SShop với những tính năng quản lý bán hàng chuyên biệt cho đa dạng quy mô kinh doanh chắc chắn sẽ làm hài lòng các chủ shop:',
      'Với quy mô rất nhỏ, tính năng quản lý bán hàng ngay trên điện thoại dễ dàng, lại tiết kiệm chi phí mà lại tích hợp nhiều tiện ích như , tìm hàng, nhập hàng, kiểm kho, báo cáo doanh thu, lợi nhuận... sẽ là chìa khoá giúp chủ shop kinh doanh nhàn tênh.',
      'Với quy mô nhỏ, SShop hỗ trợ các chủ Shop quản lý đa nền tảng cả trên PC và Mobile, tích hợp đầy đủ các tính năng phù hợp để quản lý nhân viên và đánh giá của khách hàng hỗ trợ đắc lực cho chủ Shop trong việc quản lý của hàng dù ở bất kỳ đâu, bất kỳ thời gian nào.',
      'Với quy mô vừa, SShop có đầy đủ các tính năng phù hợp để quản lý chuỗi cửa hàng đồng nhất & hiệu quả. Tính năng quản lý chi nhánh và quản lý nhân viên sẽ là nhưng trợ thủ đắc lực cho các chủ shop trong việc kiểm soát tình thái kinh doanh của từng chi nhánh hay chấm công, tính lương cho từng nhân viên, ngồi một chỗ cũng xem được.',
    ],
  },
];

const socialNetworks = [inIcon, contactIcon, letterIcon, messIcon];

const ProductsCards = () => {
  return (
    <div className='products-cards'>
      {cards.map((card, index) => (
        <div className='card-item' key={index}>
          <div className='title'>{card.title}</div>
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
                <div className='sub-title'>{card.subTitle}</div>
                <div className='des'>
                  {card.desList.map((item, i) => (
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
        </div>
      ))}
    </div>
  );
};

export default ProductsCards;
