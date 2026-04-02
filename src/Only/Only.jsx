import React from "react";
import './Only.scss';

export const Only = () => {
  return (
    <>
      {/* <!-- only --> */}
      <section className="only">
        <div className="container">
          <div className="only__wrap">
            <h2 className="only__title"> Organic Only </h2>
            <h3 className="only__subtitle"> Everyday Fresh & Clean</h3>
            <p className="only__text">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased <br /> to been the industry's standard dummy text ever
              since the
            </p>
            <div className="only__image">
              <a href="#" className="only__link">
                <img className="only__img" src="../../public/05/10.png" alt="#" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
