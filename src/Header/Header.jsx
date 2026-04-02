import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <header className="header">
          <div className="header__logo">
            <div className="header__img">
              <img src="/public/01/01.webp" alt="#" />
            </div>
            <h2 className="header__title">Organick</h2>
          </div>  
          <nav className="header__menu">
            <ul className="header__item">
              <li>
                <Link className="header__link" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="header__link" to={"/about"}>
                  About
                </Link>
              </li>
              <li
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                style={{ position: "relative" }}
              >
                <a className="header__link" href="#">
                  Pages
                </a>
                <span className="header__link-menu"></span>

                {isDropdownOpen && (
                  <nav className="dropdown-menu">
                    <ul className="dropdown-menu__list">
                      <li>
                        <Link className="dropdown-menu__link" to={"/single"}>
                          Shop Single
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-menu__link" to={"/servicing"}> 
                        Services 
                      </Link>
                      </li>
                      <li>
                        <Link className="dropdown-menu__link" to={"/quality"}> 
                        Quality Standard
                      </Link>
                      </li>
                      <li>
                        <Link className="dropdown-menu__link" to={"/standard"}>
                          Portfolio Standard
                        </Link>
                      </li>
                      <li>
                          <Link className="dropdown-menu__link" to={"/raspberry"}>
                          Black Raspberry
                        </Link>
                        </li>
                      <li>
                        <Link className="dropdown-menu__link" to={"/team"}>
                          Our Team
                        </Link>
                        </li>
                      <li>
                        <Link className="dropdown-menu__link" to={"/contact"}>
                        Contact Us
                        </Link>
                        </li>                      
                    </ul>
                  </nav>
                )}
              </li>
              <li>
                <Link className="header__link" to={"/shops"}>
                  Shop
                </Link>
              </li>
              <li>
                <a className="header__link" href="#">
                  Projects
                </a>
              </li>
              <li>
                <Link className="header__link" to={"/news"}>
                  News
                </Link>
              </li>
            </ul>
          </nav>
      
        <div className="header__box">
          <form className="header__search" action=" " method="post">
            <input type="text" className="header__input" />
            <div className="header__circle">
              <input
                type="image"
                src="/public/Vector.png"
                className="header__btn"
              />
            </div>
          </form>
          <form className="header__holder" action=" " post="#">
            <input type="search" className="header__amount" value="Cart (0)" />
            <div className="header__basket">
              <input
                type="image"
                src="/public/Icon.png"
                className="header__bt"
              />
            </div>
          </form>
        </div>
      </header>
    </>
  );
};
