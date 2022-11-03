import cardImg from "./images/zaferes.png";
import star from "./images/Star 1.png";
import "./css/Card.css";
export default function Card() {
  return (
    <div className="card">
      <img src={cardImg} alt="card-img" className="card-img" />
      <div className="card-stats">
        <img src={star} alt="star" className="starlet" />
        <span>5.0</span>
        <span>(6) •</span>
        <span>USA</span>
      </div>
      <p className="desc">Life lessons with Katie Zaferes</p>
      <p className="price"><b>From $136</b> / person</p>
    </div>
  );
}
