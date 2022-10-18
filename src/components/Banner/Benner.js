import React from 'react';
import '../Banner/Banner.scss';

export default function Banner() {
  return (
    <section className="container">
      <div className="billboard">
        <a href="/Productlist">
          <img
            src={window.location.origin + '/images/sliders/1.jpg'}
            width="100%"
            alt="BillboardImage"
          />
        </a>
      </div>
    </section>
  );
}
