import React from "react";
import "./Products.scss";

export const Products = () => {
  return (
    <>
      {/* <!-- products --> */}
      <section className="products">
        <div className="container">
          <div className="products__wrap">
            <div className="products__inner">
              <div className="products__image">
                <img src="../../public/07/02.webp" alt="#" className="products__img" />
              </div>
              <div className="products__box">
                <h2 className="products__title">Green & TastyLemon</h2>
                <p className="products__text">Fruits</p>
              </div>
            </div>
            <div className="products__inner">
              <div className="products__image">
                <img src="../../public/07/03.webp" alt="#" className="products__img" />
              </div>
              <div className="products__box">
                <h2 className="products__title">Green & TastyLemon</h2>
                <p className="products__text">Fruits</p>
              </div>
            </div>
            <div className="products__inner">
              <div className="products__image">
                <img src="../../public/07/04.webp" alt="#" className="products__img" />
              </div>
              <div className="products__box">
                <h2 className="products__title">Green & TastyLemon</h2>
                <p className="products__text">Fruits</p>
              </div>
            </div>
            <div className="products__inner">
              <div className="products__image">
                <img src="../../public/07/05.webp" alt="#" className="products__img" />
              </div>
              <div className="products__box">
                <h2 className="products__title">Green & TastyLemon</h2>
                <p className="products__text">Fruits</p>
              </div>
            </div>
            <div className="products__inner">
              <div className="products__image">
                <img src="../../public/07/06.webp" alt="#" className="products__img" />
                <span className="products__square">
                  <span className="products__circle">
                    <span></span>
                  </span>
                </span>
              </div>
              <div className="products__box">
                <h2 className="products__title">Green & TastyLemon</h2>
                <p className="products__text">Fruits</p>
              </div>
            </div>
            <div className="products__inner">
              <div className="products__image">
                <img src="../../public/07/07.webp" alt="#" className="products__img" />
              </div>
              <div className="products__box">
                <h2 className="products__title">Green & TastyLemon</h2>
                <p className="products__text">Fruits</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
