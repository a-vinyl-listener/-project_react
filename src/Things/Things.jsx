import React from 'react'
import './Things.scss';

export const Things = () => {
  return (
    <>
      <section className="things">
        <div className="container">
          <div className="things__box">
            <div className="things__wrap">
              <h2 className="things__title">About Us</h2>
              <h3 className="things__subtitle">
                We do Creative <br/> Things for Success
              </h3>
              <p className="things__text">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased <br /> to been the industry's standard dummy
                text ever since the 1500s, when an <br /> unknown printer took a
                galley.
              </p>
              <br />
              <p className="things__text">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased <br /> to been the industry's standard dummy
                text ever since the 1500s, when an <br /> unknown printer took a
                galley
              </p>
              <div className="things__wrapper">
                <div className="things__inner">
                  <div className="things__image">
                    <img className="things__img" src="../../public/02/03.webp" alt="#" />
                  </div>
                  <h2 className="things__slogan">
                    Modern Agriculture <br /> Equipment
                  </h2>
                </div>
                <div className="things__inner">
                  <div className="things__image">
                    <img className="things__img" src="../../public/02/04.webp" alt="#" />
                  </div>
                  <h2 className="things__slogan">
                    No growth <br /> hormones are used
                  </h2>
                </div>
              </div>
              <div className="button__wrap button__wrap_blue">
                <a className="button__btn button__btn_blue" href="#">
                  Shop Now
                </a>
                <div className="button__arrow">
                  <img src="../../public/Vector.svg" className="food__arrow-1" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
