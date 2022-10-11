import React, { Component } from "react";
import './content.css'



class Content extends Component {
  render() {
    return (
      <div className="data-img">
        <h2 className="data">See your data work for you.</h2>

        <img src="https://i.ibb.co/k1PdND8/Graphics.webp" alt="data-works" className="d-img"/>

        <p className="info">This new and easy way to access and pay for content gives publishers an additional revenue stream and valuable audience insights that are obtained in an ethical way. </p>

      </div>
    );
  }
}

export default Content;
