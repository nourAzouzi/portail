import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          S'abonner à notre NewsLetter
        </p>
        <p className="footer-subscription-text">
          Suivre les dernieres promotions
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Entrer votre Email"
            />
            <Button buttonStyle="btn--outline">S'abonner</Button>
          </form>
        </div>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <BsFillCartFill className="navbar-icon" />
              TerFer
            </Link>
          </div>
          <small className="website-rights">TerFer Msaken </small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
