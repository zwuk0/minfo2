import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UserIcon } from "../../static/user-icon.svg";
import Search from "../search/search";

import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="header__logo" to={"/"}>
          Minfo
        </Link>
        <nav className="header__nav">
          <div className="header__nav--left">
            <Link className="nav__link" to={"/"}>
              Home
            </Link>
            <div className="header-nav__item">
              <Link className="nav__link" to={"/movies"}>
                Movies
              </Link>
              <div className="header-nav__dropdown">
                <ul className="dropdown__ul">
                  <li>
                    <Link className="nav__link" to={"/"}>
                      hide
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      hide
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      hide
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      hide
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      hide
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      hide
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      hide
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      hide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-nav__item">
              <Link className="nav__link" to={"/tvshows"}>
                Tv Shows
              </Link>
              <div className="header-nav__dropdown">
                <ul className="dropdown__ul">
                  <li>
                    <Link className="nav__link" to={"/"}>
                      fit
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      fit
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      fit
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      fit
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      fit
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      fit
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      fit
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" to={"/"}>
                      fit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header__nav--right">
            <Search className="search" />
            <Link className="header__login " to={"/logn"}>
              Login
              <UserIcon />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
