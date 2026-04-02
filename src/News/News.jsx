import React from "react";
import "./News.scss";

export const News = () => {
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="news__wrap">
            <div className="news__inner">
              <h2 className="news__title">News</h2>
              <p className="news__subtitle">
                Discover weekly content about <br /> organic food, & more
              </p>
            </div>
            <div className="button__wrap button__wrap_whit">
              <a className="button__btn button__btn_white" href="#">
                More News
              </a>
              <div className="button__arrow">
                <img
                  src="../../public/Vector.svg"
                  className="food__arrow-1"
                  alt="#"
                />
              </div>
            </div>
          </div>
          <div className="news__flex">
            <div className="news__box">
                <div className="news__holder">
                  25 <br /> Nov
                </div>
                <img
                  src="../../public/01/30.webp"
                  alt="#"
                  className="news__image"
                />
                <div className="news__wrapper news__wrapper-bottom">
                  <div className="news__icon">
                    <img src="../../public/01/29.png" alt="#" />
                    <h2 className="news__card">By Rachi Card</h2>
                  </div>
                  <div className="news__column">
                  <h2 className="news__slogan">
                    The Benefits of Vitamin D & How to Get It
                  </h2>
                  <p className="news__text">
                    Simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum
                  </p>
                  </div>
                  <div className="button__wrap button__wrap_yellow">
                    <a className="button__btn button__btn_yellow" href="#">
                      View All Product
                    </a>
                    <div className="button__arrow">
                      <img
                        src="../../public/Vector.svg"
                        className="food__arrow-1"
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
            </div>
            <div className="news__box">
                <div className="news__holder">
                  25 <br /> Nov
                </div>
                <img
                  src="../../public/01/31.webp"
                  alt="#"
                  className="news__image"
                />
                <div className="news__wrapper news__wrapper-bottom">
                  <div className="news__icon">
                    <img src="../../public/01/29.png" alt="#" />
                    <h2 className="news__card">By Rachi Card</h2>
                  </div>
                  <div className="news__column">
                  <h2 className="news__slogan">
                    The Benefits of Vitamin D & How to Get It
                  </h2>
                  <p className="news__text">
                    Simply dummy text of the printing and typesetting <br />
                    industry. Lorem Ipsum
                  </p>
                  </div>
                  <div className="button__wrap button__wrap_yellow">
                    <a className="button__btn button__btn_yellow" href="#">
                      View All Product
                    </a>
                    <div className="button__arrow">
                      <img
                        src="../../public/Vector.svg"
                        className="food__arrow-1"
                        alt="#"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
