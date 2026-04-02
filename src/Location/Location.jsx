import React from "react";
import "./Location.scss";

export const Location = () => {
  return (
    <>
      {/* <!-- location --> */}
      <section className="location">
        <div className="container">
          <div className="location__wrap">
            <div className="location__inner">
              <div className="location__box">
                <h2 className="location__title"> Location </h2>
                <h3 className="location__subtitle"> Our Farms</h3>
                <p className="location__text">
                  Established fact that a reader will be distracted <br /> by
                  the readable content of a page when looking <br /> a layout.
                  The point of using.
                </p>
              </div>
              <div className="location__holder">
                <div className="location__col">
                  <div className="location__image">
                    <img
                      src="../../public/12/06.png"
                      alt="#"
                      className="location__img"
                    />
                  </div>
                  <div className="location__position">
                    <a href="#">
                      <b>New York, USA: </b> <br />
                      299 Park Avenue New York, <br /> New York 10171
                    </a>
                  </div>
                </div>
                <div className=" location__col">
                  <div className="location__image">
                    <img
                      src="../../public/12/06.png"
                      alt="#"
                      className="location__img"
                    />
                  </div>
                  <div className="location__position">
                    <a href="#">
                      <b>London, UK: </b> <br />
                      30 Stamford Street, <br /> London SE1 9LQ
                    </a>
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
