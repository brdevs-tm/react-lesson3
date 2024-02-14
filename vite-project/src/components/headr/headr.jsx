import React from "react";
import Lupa from "../../assets/SEARCH.svg";
import Shop from "../../assets/Cart Icon.svg";
import "./header.scss"

const Headr = () => {
  return (
    <div className="headr">
      <h1>UI.desk</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Testimonials</li>
      </ul>
      <div className="hero__right">
        <img src={Lupa} alt="search" width={"25px"} height={"25px"}/>
        <img src={Shop} alt="shop" width={"30px"} height={"30px"}/>
        <button className="hero__btn">Order Now</button>
      </div>
    </div>
  );
};

export default Headr;
