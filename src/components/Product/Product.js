import React from 'react';
import '../Product/Product.scss';

export default function Product({ phone }) {
  console.log(phone);

  return (
    <div className="mobile-item col-xs-6 col-sm-6 col-md-2">
      <div className="product-wrapper">
        <a href={'/ProductDetail/' + phone.id}>
          <img
            className="product-img"
            src={'/images/' + phone.img}
            alt="product pic"
          />
        </a>
      </div>
      <div className="caption text-center">
        <p className="mobile-name">{phone.name}</p>
        <p className="mobile-price">{phone.price}</p>
        <button type="button" className="btn btn-warning cartbtn">
          Add to Cart{' '}
        </button>
      </div>
    </div>
  );
}
