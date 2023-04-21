import React from 'react';
import './RecruitmentList.scss';
import Accountant from '../../../assets/images/Recruitment/Accountant.png';
import BA from '../../../assets/images/Recruitment/BA.png';
import Dev from '../../../assets/images/Recruitment/Dev.png';
import InternWeb from '../../../assets/images/Recruitment/Intern-web.png';
import SEO from '../../../assets/images/Recruitment/SEO.png';
import Tester from '../../../assets/images/Recruitment/Tester.png';
import MoreBtn from '../../../components/Buttons/MoreBtn';
import { Col, Row } from 'antd';

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

const RecruitmentList = () => {
  return (
    <div className='recruitment-list'>
      <Row gutter={[64, 64]} style={{ display: 'flex', alignItems: 'center' }}>
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
      </Row>
    </div>
  );
};

export default RecruitmentList;
