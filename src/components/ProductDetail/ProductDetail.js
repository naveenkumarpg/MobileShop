import React, { Component } from "react";
import "../ProductDetail/ProductDetail.scss";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: null,
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/mobiles/" + this.props.match.params.id;

    const fetchPhonesData = new Promise(function (resolve, reject) {
      fetch(url)
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          resolve(data);
        });
    });

    fetchPhonesData.then((data) => {
      this.setState({
        mobile: data,
      });
    });
  }

  render() {
    if (this.state.mobile == null) {
      return "";
    }

    return (
      <div className="container">
        <div className="thumbnail product-detail-wrapper row">
          <div className="col-md-6 text-center">
            <img
              className="product-img"
              src="https://dummyimage.com/300x500/f9f9f9/999.jpg"
              alt="imae xfzbdzgctzrv"
            />
          </div>
          <div className="col-md-6">
            <div className="caption">
              <h2>{this.state.mobile.name}</h2>
              <p className="mobile-price">{this.state.mobile.price}</p>
              <p className="mobile-config">{this.state.mobile.config}</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section.
              </p>
              <div className="text-right">
                <button type="button" className="btn btn-warning">
                  Add to Cart{" "}
                </button>
                <div className="vgap"></div>
                <a
                  href={"/edit/" + this.state.mobile.id}
                  className="btn btn-warning"
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
