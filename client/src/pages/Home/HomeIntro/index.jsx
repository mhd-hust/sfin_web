import React from 'react';
import './HomeIntro.scss';
import { Col, Row } from 'antd';
import MoreBtn from '../../../components/Buttons/MoreBtn';
import homeIntroPng from '../../../assets/images/Home/intro.png';

const HomeIntro = () => {
  return (
    <div className='home-intro'>
      <div className='general-title'>về chúng tôi</div>
      <Row
        gutter={[64, 24]}
        style={{
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col xs={24} sm={24} md={11}>
          {/* <div className='general-title'>về chúng tôi</div> */}

          <p className='general-p italic'>
            SFIN là đơn vị tiên phong cung cấp các dịch vụ tư vấn CNTT, các giải
            pháp trong các lĩnh vực thanh toán điện tử, công nghệ Fintech và
            Thương mại điện tử; Xây dựng thiết kế phần mềm Websites/App mobile
            quảng bá cho các doanh nghiệp vừa và nhỏ trong nước và các tổ chức
            nước ngoài. Với đội ngũ là các nhân sự có kinh nghiệm trong lĩnh vực
            CNTT, chúng tôi tự hào là một trong những đơn vị có các thành viên
            từng nắm các vai trò quan trọng tại các Tập đoàn lớn và các Công ty
            có tầm ảnh hưởng trong lĩnh vực Phần mềm, Thanh toán số và công nghệ
            Fintech như Tập đoàn Viettel, Tập đoàn G-Group, Mobifone, VCcorp,
            VNPT EPAY, VPS...
          </p>
        </Col>
        <Col xs={24} sm={24} md={13} className='col-r'>
          <div>
            <img src={homeIntroPng} alt='' className='home-intro-png' />
          </div>
        </Col>
        <Col span={24}>
          <MoreBtn />
        </Col>
      </Row>
    </div>
  );
};

export default HomeIntro;
