import star from "./images/Star 1.png";
import "./css/Card.css";

export default function Card(props) {

  let badgeText;
  if (props.openSpots === 0){
    badgeText = "SOLD OUT";
  }else if (props.location === "Online"){
    badgeText = "ONLINE";
  }


  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        src={require(`./images/${props.img}`)}
        alt="card-img"
        className="card-img"
      />
      <div className="card-stats">
        <img src={star} alt="star" className="starlet" />
        <span>{props.rating}</span>
        <span>({props.reviewCount}) • </span>
        <span>{props.location}</span>
      </div>
      <p className="desc">{props.title}</p>
      <p className="price">
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}
