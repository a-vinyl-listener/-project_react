import React from "react";
import "./Food.scss";
export const Food = () => {
  return (
    <>
      <section className="food">
        <div className="container">
          <div className="food__body">
            <div className="food__box">

              <h2 className="food__title">100% Natural Food</h2>
              <h3 className="food__subtitle">
                Choose the best <br />
                healthier way <br /> of life
              </h3>
            </div>
            <div className="button__wrap">
              <a className="button__btn" href="#">
                Explore Now
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
      </section>
    </>
  );
};
