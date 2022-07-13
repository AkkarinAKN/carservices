import "./footerStyle.css"
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import {
    faEnvelope,
    faPhone
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col solutions">
          <h6>Contacts</h6>
          <ul>
            <li>
              <Link to="/" className="link">
              <FontAwesomeIcon icon={faEnvelope}/>carservicethailand@hotmail.com
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
              <FontAwesomeIcon icon={faPhone}/>+66 924649178
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="col-subscribe">
          <h6>Subscribe to our newsletter</h6>
          <p>
            The latest news, articles, and resources sent to your inbox weekly.
          </p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <div className="content">
          <div>
            <FaFacebook
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaInstagram
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
            <FaGithub
              size={20}
              style={{ color: "#d3d3d3", marginRight: "10px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
