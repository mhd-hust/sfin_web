import React from 'react';
import './Products.scss';
import ProductsPoster from './ProductsPoster';
import ProductsCards from './ProductsCards';

const Products = () => {
  return (
    <main className='products main-container'>
      <div className='general-title'>SSHOP - PHẦN MỀM QUẢN LÝ BÁN HÀNG</div>
      <ProductsPoster />
      <ProductsCards />
    </main>
  );
};

export default Products;
