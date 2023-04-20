import React from 'react';
import './IntroHead.scss';
import introHeadPng from '../../../assets/images/Introduction/intro-header.png';
import introHeadBg from '../../../assets/images/Introduction/intro-header-bg.png';
import { Col, Row } from 'antd';

const IntroHead = () => {
  return (
    <div className='intro-head'>
      <div className='general-title'>về chúng tôi</div>
      <Row
        gutter={[64, 64]}
        style={{
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Col xs={24} sm={24} md={11}>
          <div className='col-l'>
            <img src={introHeadPng} alt='' />
            <div className='text'>
              <button className='title-wrap'>
                <h6 className='bg-grey'>tầm</h6>
                <h6>nhìn</h6>
              </button>
              <p className='italic'>
                SFIN là 1 trong những doanh nghiệp cung cấp dịch vụ công nghệ
                nền tảng TMĐT và Fintech có quy mô lớn nhất Việt Nam, với các
                sản phẩm thương hiệu quốc tế.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={13}>
          <div className='col-r'>
            <div className='mission'>
              <button className='title-wrap'>
                <h6 className='bg-grey'>sứ</h6>
                <h6>mệnh</h6>
              </button>
              <div className='mission-list'>
                <div className='item'>
                  <div className='item-title'>Đối với cộng đồng</div>
                  <ul>
                    <li className='italic'>
                      SFIN cung cấp các dịch vụ SaaS, PaaS, góp phần chuyển đổi
                      số doanh nghiệp, nâng cao chất lượng cuộc sống cho Cộng
                      đồng và thúc đẩy sự tiến bộ của Xã hội.
                    </li>
                  </ul>
                </div>
                <div className='item'>
                  <div className='item-title'>Đối với khách hàng</div>
                  <ul>
                    <li className='italic'>
                      SFIN cung cấp dịch vụ nền tảng tin cậy, hợp tác bền vững,
                      luôn đồng hành cùng khách hàng.
                    </li>
                  </ul>
                </div>
                <div className='item'>
                  <div className='item-title'>Đối với cổ đông</div>
                  <ul>
                    <li className='italic'>
                      SFIN mang lại giá trị đầu tư hiệu quả lâu dài cho Cổ đông.
                    </li>
                  </ul>
                </div>
                <div className='item'>
                  <div className='item-title'>Đối với nhân viên</div>
                  <ul>
                    <li className='italic'>
                      SFIN xây dựng môi trường làm việc chuyên nghiệp, thân
                      thiện với cơ hội phát triển tốt nhất và chế độ đãi ngộ
                      xứng đáng cho nhân viên, là nơi mỗi người được ghi nhận,
                      thấu hiểu và đối xử.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='strategy'>
              <button className='title-wrap'>
                <h6 className='bg-grey'>chiến</h6>
                <h6>lược</h6>
              </button>
              <ul>
                <li>
                  Linh hoạt, sáng tạo nắm bắt mọi cơ hội để từng bước đi đến mục
                  tiêu. Cộng hưởng sức mạnh tập thể và sự chuyên nghiệp để cung
                  cấp dịch vụ chất lượng với quy mô lớn.
                </li>
              </ul>
            </div>
            <div className='core-values'>
              <button className='title-wrap'>
                <h6 className='bg-grey'>giá trị</h6>
                <h6>cốt lõi</h6>
              </button>
              <ul>
                <li>SFIN lựa chọn các giá trị để xây dựng và phát triển</li>
              </ul>
            </div>
            <div className='slogan'>
              6t{': '}
              <span className='text-green'>
                Tinh - Tốc - Tâm - Trí - Tín - Tầm
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default IntroHead;
