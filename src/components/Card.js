import star from "./images/Star 1.png";
import "./css/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={require(`./images/${props.img}`)}
        alt="card-img"
        className="card-img"
      />
      <div className="card-stats">
        <img src={star} alt="star" className="starlet" />
        <span>{props.rating}</span>
        <span>({props.reviewCount}) • </span>
        <span>{props.country}</span>
      </div>
      <p className="desc">{props.title}</p>
      <p className="price">
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}
