import React from "react";
import dev from "../assets/images/dev.jpg";
import tax from "../assets/images/tax.jpg";
import "../assets/css/home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <h1>!!! Welcome to Commerce Coder !!!</h1>
      <div className="dev">
        <div className="content">
          <h2>Best Web Development Company in India.</h2>
          <br /><br />
          <p>
            100% Trusted and Registered Company in India with a professional
            website that provides the best web development and web design
            services in India. We are a company that offers multi-functional web
            portals, and we make sure that a well-developed and attractive
            website can help our clients to record ROI-driven results.
          </p>
        </div>
        <div className="image">
          <img src={dev} alt="Development" />
          {}
        </div>
      </div>
      <div className="tax">
        <div className="image">
          <img src={tax} alt="taxation" />
        </div>
        <div className="content">
          <h2>Need Tax Consultancy...?</h2>
          <h2> Our Tax Experts are Here.</h2>
          <br /><br />
          <p>
            Don’t let a lack of knowledge result in a tax blunder. Take control
            of your taxes with Tax2win’s Tax Consultancy Services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
