import React from "react";
import "./Footer.scss";
export const Footer = () => {
  return (
    <>
      <footer className="info">
        <section className="subscription">
          <div className="container">
            <div className="subscription__wrap">
              <h2 className="subscription__title">
                Subscribe to <br /> our Newsletter
              </h2>
              <div className="subscription__inner">
                <form className="subscription__search" action=" " method="post">
                  <input
                    type="text"
                    value="Your Email Address"
                    className="subscription__input"
                  />
                </form>
                <div className="button__wrap button__wrap_blue">
                  <a className="button__btn button__btn_blue" href="#">
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="container">
            <div className="footer__wrap">
              <div className="footer__box-contact">
                <h2 className="footer__subject">Contact Us</h2>
                <div className="footer__inner">
                  <h2 className="footer__email">Email</h2>
                  <a href="email" className="footer__information">
                    needhelp@Organia.com
                  </a>
                </div>
                <div className="footer__inner">
                  <h2 className="footer__phone">Phone</h2>
                  <a href="tel:+7666888888" className="footer__information">
                    666 888 888
                  </a>
                </div>
                <div className="footer__inner">
                  <h2 className="footer__address">Address</h2>
                  <a
                    href="https://maps.app.goo.gl/rhFMAVe4BzS95sm29"
                    className="footer__information"
                  >
                    88 road, borklyn street, USA
                  </a>
                </div>
              </div>
              <span className="line__box line__box-vertically"></span>
              <div className="footer__box-organic">
                <div className="footer__inner-logo">
                  <img
                    src="../../public/01/01.webp"
                    alt="#"
                    className="footer__img"
                  />
                  <h2 className="footer__headline">Organick</h2>
                </div>
                <p className="footer__text">
                  Simply dummy text of the printing and typesetting industry.{" "}
                  <br /> Lorem Ipsum simply dummy text of the printing
                </p>
                <div className="footer__network">
                  <a href="https://www.instagram.com" className="footer__link">
                    <img src="../../public/01/33.webp" alt="#" />
                  </a>
                  <a href="https://www.facebook.com" className="footer__link">
                    <img src="../../public/01/34.webp" alt="#" />
                  </a>
                  <a href="https://twitter.com" className="footer__link">
                    <img src="../../public/01/35.webp" alt="#" />
                  </a>
                  <a href="#" className="footer__link">
                    <img src="../../public//01/36.webp" alt="#" />
                  </a>
                </div>
              </div>
              <span className="line__box line__box-vertically"></span>
              <div className="footer__box-pages">
                <h2 className="footer__caption">Utility Pages</h2>
                <ul className="footer__items">
                  <li>
                    <a href="#" className="footer__col">
                      Style Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__col">
                      Style Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__col">
                      Password Protected
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__col">
                      Licences
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__col">
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="copyright">
          <div className="copyright__footer">
            <span className="line__box line__box-copyright"></span>
            <div className="copyright__inner">
              <p> Copyright</p>
              <p>©</p>
              <p>Organick</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
