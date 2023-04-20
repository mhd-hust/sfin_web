import React from 'react';
import './ProductsPoster.scss';
import ProductPosterImg from '../../../assets/images/Products/ProductPoster.png';

const ProductsPoster = () => {
  return (
    <div className='products-poster'>
      <h1>Open SMART SHOP - GIẢI PHÁP TOÀN DIỆN CHO KINH DOANH</h1>
      <p>
        Trong thời đại 4.0, công nghệ phát triển như vũ bão, các doanh nghiệp
        chuyển mình từ offline sang online cần có các Hệ thống thương mại điện
        tử bảo mật, an toàn và cũng có trải nghiệm người dùng tốt. Và hơn thế
        nữa, là mang lại nguồn khách hàng mới cho chủ shop.Tiện ích đa dạng có
        thể áp dụng cho hầu hết tất cả ngành hàng từ cửa hàng đến các tiểu
        thương.
      </p>
      <img src={ProductPosterImg} alt='' />
    </div>
  );
};

export default ProductsPoster;
