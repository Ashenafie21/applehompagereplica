import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/icons/logo-sm.png";
import search from "../images/icons/search-icon-sm.png";
import cart from "../images/icons/cart-sm.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md ">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              onClick={handleNavToggle}
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto order-0" to="/">
              <img src={logo} alt="apple logo" />
            </Link>

            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            >
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Link to="/mac" className="nav-link js-scroll-trigger">
                    Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/iphone" className="nav-link js-scroll-trigger">
                    iPhone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ipad" className="nav-link js-scroll-trigger">
                    iPad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/watch" className="nav-link js-scroll-trigger">
                    Watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/tv" className="nav-link js-scroll-trigger">
                    TV
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/music" className="nav-link js-scroll-trigger">
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/support" className="nav-link js-scroll-trigger">
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/search" className="nav-link js-scroll-trigger">
                    <img src={search} alt="" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link js-scroll-trigger">
                    <img src={cart} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

