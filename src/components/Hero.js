import "./css/Hero.css";
import image from "./images/heroimg.png";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <img src={image} alt="images" className="hero-img" />
      <div className="hero-text-section">
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-txt">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
