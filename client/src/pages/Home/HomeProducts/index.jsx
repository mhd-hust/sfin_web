import React from 'react';
import { Col, Row } from 'antd';
import './HomeProducts.scss';
import MoreBtn from '../../../components/Buttons/MoreBtn';
import InstallBtn from '../../../components/Buttons/InstallBtn';
import sshop from '../../../assets/logos/sfin/sshop.png';
import sspa from '../../../assets/logos/sfin/sspa.png';
import appStore from '../../../assets/logos/sfin/appStore.png';
import ggPlay from '../../../assets/logos/sfin/ggPlay.png';
import product1 from '../../../assets/images/Home/product1.png';
import product2 from '../../../assets/images/Home/product2.png';

const HomeProducts = () => {
  return (
    <div className='home-products'>
      <div className='general-title'>Sản phẩm</div>
      <Row
        gutter={[48, 48]}
        style={{
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 10, order: 1 }}
          className='col-img'>
          <div>
            <img src={product1} alt='' />
          </div>
        </Col>
        <Col
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          md={{ span: 14, order: 2 }}>
          <div className='home-product-text'>
            <div className='header'>
              <div className='header-logo'>
                <img src={sshop} alt='sshop' />
              </div>
              <div className='header-title'>
                <h2>SShop platform</h2>
                <div className='stores'>
                  <img src={appStore} alt='App Store' />
                  <img src={ggPlay} alt='Google Play' />
                </div>
              </div>
            </div>
            <div className='content'>
              <h3>Open SMART SHOP - GIẢI PHÁP TOÀN DIỆN CHO KINH DOANH</h3>
              <p>
                SShop là ứng dụng quản lý cửa hàng đa nền tảng. Đầy đủ mọi tính
                năng và nghiệp vụ để vận hành, phát triển doanh nghiệp của mình.
                Cho dù cửa hàng lớn hay nhỏ, SShop giúp bạn theo dõi doanh thu,
                quản lý hóa đơn, hàng hóa, dòng tiền, nhân viên, khách hàng..
                Giao diện bán hàng đa dạng trên nhiều thiết bị, tự động đồng bộ
                dữ liệu, báo cáo chi tiết và rõ ràng. Chỉ bằng việc cài đặt ứng
                dụng trên điện thoại di động, Chủ cửa hàng sẽ nắm bắt và quản lý
                được tất cả các giao dịch phát sinh, tình hình doanh thu, tình
                trạng hàng hóa, tồn kho, ... bất kỳ lúc nào và bất cứ nơi đâu.
              </p>
            </div>
            <div className='group-btn'>
              <MoreBtn />
              <InstallBtn />
            </div>
          </div>
        </Col>

        <Col
          xs={{ span: 24, order: 4 }}
          sm={{ span: 24, order: 4 }}
          md={{ span: 14, order: 3 }}>
          <div className='home-product-text'>
            <div className='header'>
              <div className='header-logo'>
                <img src={sspa} alt='sspa' />
              </div>
              <div className='header-title'>
                <h2>SSPA - Phần mềm quản lý ngành spa</h2>
                <div className='stores'>
                  <img src={appStore} alt='App Store' />
                  <img src={ggPlay} alt='Google Play' />
                </div>
              </div>
            </div>
            <div className='content'>
              <h3>SSPA - GIẢI PHÁP TOÀN DIỆN CHO QUẢN LÝ NGÀNH LÀM ĐẸP</h3>
              <p>
                SSpa là phần mềm quản lý bán hàng, CSKH chuyên nghiệp nhất được
                tin dùng bởi hàng ngàn doanh nghiệp Spa, Clinic, Thẩm Mỹ Viện,
                Nail, Hair, Beauty Salon, Phòng Xăm,… nhờ tính chuyên nghiệp,
                đơn giản, thân thiện, dễ sử dụng nhưng đầy hiệu quả. Phần mềm
                đưa ra hàng loạt giải pháp thông minh, tập trung vào đúng quy
                trình nghiệp vụ giúp người dùng nắm bắt được tất cả tình hình
                doanh thu, chăm sóc khách hàng, quản lý liệu trình, bất kỳ lúc
                nào và bất cứ nơi đâu. Nhanh chóng, đơn giản và chính xác nhất.
              </p>
            </div>
            <div className='group-btn'>
              <MoreBtn />
              <InstallBtn />
            </div>
          </div>
        </Col>
        <Col
          xs={{ span: 24, order: 3 }}
          sm={{ span: 24, order: 3 }}
          md={{ span: 10, order: 4 }}
          className='col-img'>
          <div>
            <img src={product2} alt='' className='home-product-png' />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeProducts;
