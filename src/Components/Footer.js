import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo ft-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
          alt="logo"
        />
        <div>VirDrobe</div>
      </div>
      <ul className="ft_list">
        <li>
          <Link to="/">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
