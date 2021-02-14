import React, { Component } from "react";
import renderHTML from "react-render-html";

import "./Footer.scss";

import Labels from "../../Labels/labels";
class Footer extends Component {
  render() {
    return (
      <footer className="component footer">
        <div className="container text-center">
          {renderHTML(Labels.disclaimer)}
        </div>
      </footer>
    );
  }
}

export default Footer;
