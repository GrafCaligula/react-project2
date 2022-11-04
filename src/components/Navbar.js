import "./css/Navbar.css";
import logo from "./images/airbnb1.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img 
      src={logo} 
      alt="airbnb logo" 
      className="nav-logo"

      />
    </nav>
  );
}
