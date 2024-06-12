import { Link } from "react-router-dom";
import "../styles/Nav.css";
// this function will create the navigation bar for the app
// this nav bar will be displayed on main page and shop page

function Nav() {
  return (
    <div className="navBar">
      <Link to="/">
        <button className="homeBtn">Homepage</button>
      </Link>

      <Link to="/shop">
        <button className="shopBtn">Shop</button>
      </Link>
    </div>
  );
}

export { Nav };
