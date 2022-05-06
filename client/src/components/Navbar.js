import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <BsFillCartFill className="navbar-icon" />
              TerFer
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Acceuil
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/boutiques"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Boutique
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/abonnements"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Abonnements
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/avis"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Avis
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">Rejoigner-nous</Button>
                  </Link>
                ) : (
                  <Link
                    to="inscription"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Rejoigner-nous
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
