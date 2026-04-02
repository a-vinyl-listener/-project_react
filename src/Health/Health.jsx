import React from 'react'
import './Health.scss';

export const Health = () => {
  return (
    <>
      <section class="health">
        <div class="container">
          <div class="health__box">
            <div class="health__image">
              <img class="health__img" src="../../public/04/02.webp" alt="#" />
            </div>
            <div class="health__wrap">
              <h2 class="health__title">Health Pistachios</h2>
              <fieldset class="rating rating__background">
                <div class="rating__group">
                  <input
                    class="rating__star"
                    type="radio"
                    name="two"
                    value="1"
                    aria-label="ужасно"
                  />
                  <input
                    class="rating__star"
                    type="radio"
                    name="two"
                    value="2"
                    aria-label="сносно"
                  />
                  <input
                    class="rating__star"
                    type="radio"
                    name="two"
                    value="3"
                    aria-label="нормально"
                  />
                  <input
                    class="rating__star"
                    type="radio"
                    name="two"
                    value="4"
                    aria-label="хорошо"
                  />
                  <input
                    class="rating__star"
                    type="radio"
                    name="two"
                    value="5"
                    aria-label="отлично"
                    checked
                  />
                </div>
              </fieldset>
              <div class="product-card__inner">
                <p class="product-card__pricing">
                  <del>$20.00</del>
                </p>
                <p class="product-card__pricing-2">$13.00</p>
              </div>
              <p class="health__text">
                Simply dummy text of the printing and typesetting industry.
                Lorem had <br /> ceased to been the industry's standard dummy
                text ever since the 1500s, <br /> when an unknown printer took a
                galley.
              </p>
              <div class="health__inner">
                <form action="#" class="health__form">
                  <span class="health__quantity">Quantity :</span>
                  <input
                    name="#"
                    type="text"
                    readonly
                    value="1"
                    class="health__input"
                  />
                </form>
                <div class="button__wrap button__wrap_blue">
                  <a class="button__btn button__btn_blue" href="#">
                    Shop Now
                  </a>
                  <div class="button__arrow">
                    <img src="../../public/Vector.svg" class="food__arrow-1" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
