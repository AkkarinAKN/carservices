import "./navbarStyle.css";
import {
  faHome,
  faCar,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Car Service Thailand</span>
        <div className="navMenu">
          <div className="navListMenu">
          <FontAwesomeIcon icon={faHome} />
            <Link
              className="linkbooking"
              to="/"
              style={{ textDecoration: "none" }}
            >
              <span className="menu">HOME</span>
            </Link>
          </div>
          <div className="navListMenu">
          <FontAwesomeIcon icon={faCar} />
            <Link
              className="linkbooking"
              to="/service"
              style={{ textDecoration: "none" }}
            >
              <span className="menu">BOOKING</span>
            </Link>
          </div>
          <div className="navListMenu">
            <FontAwesomeIcon icon={faAddressBook} />
            <Link
              className="linkbooking"
              to="/contact"
              style={{ textDecoration: "none" }}
            >
            <span className="menu">CONTACT</span>
            </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
