import React from 'react'
import './Offer.scss';

export const Offer = () => {
  return (
    <>
      <section className="offer">
        <div className="container">
          <div className="offer__wrap">
            <div className="offer__inner">
              <h2 className="offer__title">Offer</h2>
              <p className="offer__subtitle">We Offer Organic For You</p>
            </div>
            <div className="button__wrap button__wrap_yellow">
              <a className="button__btn button__btn_yellow" href="#">
                View All Product
              </a>
              <div className="button__arrow">
                <img src="../../public/Vector.svg" className="food__arrow-1" alt="#" />
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card__wrap">
              <button type="button" className="product-card__btn">
                Vegetable
              </button>
              <div className="product-card__img">
                <img src="../../public/01/21.png" alt="#" />
              </div>
              <h3 className="product-card__naming">Mung Bean</h3>
              <span className="product-card__line"></span>
              <div className="product-card__row">
                <div className="product-card__inner">
                  <p className="product-card__pricing">
                    <del>$20.00</del>
                  </p>
                  <p className="product-card__pricing-2">$11.00</p>
                </div>
                <fieldset className="rating">
                  <div className="rating__group">
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="1"
                      aria-label="ужасно"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="2"
                      aria-label="сносно"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="3"
                      aria-label="нормально"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="4"
                      aria-label="хорошо"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="5"
                      aria-label="отлично"
                      checked
                    />
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="product-card__wrap">
              <button type="button" className="product-card__btn">
                Vegetable
              </button>
              <div className="product-card__img">
                <img src="../../public//01/22.png" alt="#"/>
              </div>
              <h3 className="product-card__naming">Brown Hazelnut</h3>
              <span className="product-card__line"></span>
              <div className="product-card__row">
                <div className="product-card__inner">
                  <p className="product-card__pricing">
                    <del>$20.00</del>
                  </p>
                  <p className="product-card__pricing-2">$12.00</p>
                </div>
                <fieldset className="rating">
                  <div className="rating__group">
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="1"
                      aria-label="ужасно"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="2"
                      aria-label="сносно"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="3"
                      aria-label="нормально"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="4"
                      aria-label="хорошо"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="5"
                      aria-label="отлично"
                      checked
                    />
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="product-card__wrap">
              <button type="button" className="product-card__btn">
                Vegetable
              </button>
              <div className="product-card__img">
                <img src="../../public/01/23.png" alt="#" />
              </div>
              <h3 className="product-card__naming">Onion</h3>
              <span className="product-card__line"></span>
              <div className="product-card__row">
                <div className="product-card__inner">
                  <p className="product-card__pricing">
                    <del>$20.00</del>
                  </p>
                  <p className="product-card__pricing-2">$17.00</p>
                </div>
                <fieldset className="rating">
                  <div className="rating__group">
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="1"
                      aria-label="ужасно"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="2"
                      aria-label="сносно"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="3"
                      aria-label="нормально"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="4"
                      aria-label="хорошо"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="5"
                      aria-label="отлично"
                      checked
                    />
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="product-card__wrap">
              <button type="button" className="product-card__btn">
                Vegetable
              </button>
              <div className="product-card__img">
                <img src="../../public/01/24.png" alt="#" />
              </div>
              <h3 className="product-card__naming">Cabbage</h3>
              <span className="product-card__line"></span>
              <div className="product-card__row">
                <div className="product-card__inner">
                  <p className="product-card__pricing">
                    <del>$20.00</del>
                  </p>
                  <p className="product-card__pricing-2">$17.00</p>
                </div>
                <fieldset className="rating">
                  <div className="rating__group">
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="1"
                      aria-label="ужасно"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="2"
                      aria-label="сносно"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="3"
                      aria-label="нормально"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="4"
                      aria-label="хорошо"
                    />
                    <input
                      className="rating__star"
                      type="radio"
                      name="two"
                      value="5"
                      aria-label="отлично"
                      checked
                    />
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
