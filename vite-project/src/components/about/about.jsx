import "./about.scss";
import "../../index.css";
import Table from "../../assets/table.svg";
import Map from "../../assets/map.svg";
import Barg from "../../assets/barg.svg";

const About = () => {
  return (
    <div className="about   border-dashed border-4">
      <h3 className="">Why Choose US?</h3>
      <p>Organic food is grown without the use of synthetic chemicals</p>
      <div className="order">
        <div>
          <img src={Table} alt="" />
          <h4>Easy to order</h4>
          <h5>foods include fresh produce, meats as well as processed</h5>
        </div>
        <div>
          <img src={Map} alt="" />
          <h4>Easy to order</h4>
          <h5>foods include fresh produce, meats as well as processed</h5>
        </div>
        <div>
          <img src={Barg} alt="" />
          <h4>Easy to order</h4>
          <h5>foods include fresh produce, meats as well as processed</h5>
        </div>
      </div>
      <div className="food">
        <div>
          <h1>40+</h1>
          <h5>Food Partners</h5>
        </div>
        <div>
          <h1>40+</h1>
          <h5>Food Partners</h5>
        </div>
        <div>
          <h1>40+</h1>
          <h5>Food Partners</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
