import Background from "../../assets/header Image.svg"
import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <h1>Just <span>Eat healthy</span> food to live a healthier life</h1>
      <p>
        Enjoy a healthy life by eating healthy foods that have extraordinary
        flavors that make your life healthier for today and in the future
      </p>
      <button className="hero_btn">Order Now</button>
    </div>
  );
};

export default Hero;
