import React from 'react'
import './Choice.scss';

export const Choice = () => {
  return (
    <>
      <section className="choice">
        <div className="container">
          <div className="choice__box">
            <div className="choice__wrap">
              <div className="choice__wrap-header">
                <h2 className="choice__title">Why Choose us?</h2>
                <h3 className="choice__subtitle">
                  We do not buy from the <br /> open market & traders.
                </h3>
                <p className="choice__text">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased <br /> to been the industry's standard the
                  1500s, when an unknown
                </p>
              </div>
              <div className="choice__row">
                <div className="choice__inner">
                  <div className="choice__link-box">
                    <span className="choice__ring"></span>
                    <a className="choice__link" href="#">
                      100% Natural Product
                    </a>
                  </div>
                  <p className="choice__inner-text">
                    Simply dummy text of the printing and typesetting <br />
                    industry Lorem Ipsum
                  </p>
                </div>
                <div className="choice__inner">
                  <div className="choice__link-box">
                    <span className="choice__ring"></span>
                    <a className="choice__link" href="">
                      Increases resistance
                    </a>
                  </div>
                  <p className="choice__inner-text">
                    Filling, and temptingly healthy, our Biona Organic <br />
                    Granola with Wild Berries is just the thing
                  </p>
                </div>
              </div>
            </div>
            <div className="choice__image">
              <img
                className="choice__img"
                src="../../public/02/05.webp"
                alt="#"
              />
            </div>
          </div>
          <div className="choice__flex">
            <div className="choice__flex-card">
              <div className="choice__flex-image">
                <img
                  className="choice__flex-img"
                  src="../../public/02/06.webp"
                  alt="#"
                />
              </div>
              <h2 className="choice__flex-title">Return Policy</h2>
              <p className="choice__flex-text">
                Simply dummy text of <br /> the printintypesetting <br />
                industry.
              </p>
            </div>
            <div className="choice__flex-card">
              <div className="choice__flex-image">
                <img
                  className="choice__flex-img"
                  src="../../public/02/07.webp"
                  alt="#"
                />
              </div>
              <h2 className="choice__flex-title">Return Policy</h2>
              <p className="choice__flex-text">
                Simply dummy text of <br /> the printintypesetting <br />
                industry.
              </p>
            </div>
            <div className="choice__flex-card">
              <div className="choice__flex-image">
                <img
                  className="choice__flex-img"
                  src="../../public/02/08.webp"
                  alt="#"
                />
              </div>
              <h2 className="choice__flex-title">Return Policy</h2>
              <p className="choice__flex-text">
                Simply dummy text of <br /> the printintypesetting <br />
                industry.
              </p>
            </div>
            <div className="choice__flex-card">
              <div className="choice__flex-image">
                <img
                  className="choice__flex-img"
                  src="../../public/02/09.webp"
                  alt="#"
                />
              </div>
              <h2 className="choice__flex-title">Return Policy</h2>
              <p className="choice__flex-text">
                Simply dummy text of <br /> the printintypesetting <br />
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
