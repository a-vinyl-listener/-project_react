import React from "react";
import "./Work.scss";

export const Work = () => {
  return (
    <>
      {/* <!-- work --> */}
      <section className="work">
        <div className="container">
          <div className="work__wrap">
            <div className="work__image">
              <img
                src="../../public/12/02.webp"
                alt="#"
                className="work__img"
              />
            </div>
            <div className="work__col">
              <div className="work__inner">
                <h2 className="work__header-title">
                  We'd love to talk about how we <br /> can work together
                </h2>
                <p className="work__header-text">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to
                  <br /> been the industry's standard dummy text ever since the
                  1500s, when an unknown <br /> printer took a galley.
                </p>
              </div>
              <div className="work__row">
                <div className="work__box">
                  <div className="work__picture">
                    <img
                      src="../../public/12/03.png"
                      alt="#"
                      className="work__icon"
                    />
                  </div>
                  <div className="work__flex">
                    <div className="work__title">Massege</div>
                    <a
                      href="mailto:support@organic.com"
                      className="work__mailto"
                    >
                      support@organic.com
                    </a>
                  </div>
                </div>
                <div className="work__box">
                  <div className="work__picture">
                    <img
                      src="../../public/12/04.png"
                      alt="#"
                      className="work__icon"
                    />
                  </div>
                  <div className="work__flex">
                    <div className="work__title">Contact Us</div>
                    <a href="tel: +01 123 456 789" className="work__tel">
                      +01 123 456 789
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer__network work-footer__networ">
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
                  <img src="../../public/01/36.webp" alt="#" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
