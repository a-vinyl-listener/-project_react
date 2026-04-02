import React from "react";
import'./Grow.scss';

export const Grow = () => {
  return (
    <>
    {/* grow */}
      <section className="grow">
        <div className="container">
          <div className="grow__header">
            <h2 className="grow__title">What we Grow</h2>
            <h3 className="grow__subtitle">
              Better Agriculture for <br /> Better Future
            </h3>
          </div>
          <div className="grow__inner">
            <div className="grow__left-column">
              <div className="grow__box-right">
                <div className="grow__picture">
                  <img
                    src="../../public/05/03.webp"
                    alt="#"
                    className="grow__icon"
                  />
                </div>
                <h2 className="grow__headline">Display Text</h2>
                <p className="grow__text">
                  Sed ut perspiciatis unde omnis iste natus error <br />
                  sit voluptat accusantium doloremqlaudantium. <br />
                  Sed ut perspiciatis
                </p>
              </div>
              <div className="grow__box-right">
                <div className="grow__picture">
                  <img
                    src="../../public/05/04.webp"
                    alt="#"
                    className="grow__icon"
                  />
                </div>
                <h2 className="grow__headline">Store Services</h2>
                <p className="grow__text">
                  Sed ut perspiciatis unde omnis iste natus error <br />
                  sit voluptat accusantium doloremqlaudantium. <br />
                  Sed ut perspiciatis
                </p>
              </div>
              <div className="grow__box-right">
                <div className="grow__picture">
                  <img
                    src="../../public/05/05.webp"
                    alt="#"
                    className="grow__icon"
                  />
                </div>
                <h2 className="grow__headline">Display Text</h2>
                <p className="grow__text">
                  Sed ut perspiciatis unde omnis iste natus error <br />
                  sit voluptat accusantium doloremqlaudantium. <br />
                  Sed ut perspiciatis
                </p>
              </div>
            </div>
            <div className="grow__image">
              <img src="../../public/05/02.png" className="grow__img" alt="#" />
              <div className="button__wrap button__wrap_whit">
                <a className="button__btn button__btn_white" href="#">
                  More News
                </a>
                <div className="button__arrow">
                  <img src="../../public/Vector.svg" className="food__arrow-1" alt="#" />
                </div>
              </div>
            </div>
            <div className="grow__right-column">
              <div className="grow__box">
                <div className="grow__picture">
                  <img
                    src="../../public/05/06.webp"
                    alt="#"
                    className="grow__icon"
                  />
                </div>
                <h2 className="grow__headline">Display Text</h2>
                <p className="grow__text">
                  Sed ut perspiciatis unde omnis iste natus error <br />
                  sit voluptat accusantium doloremqlaudantium. <br />
                  Sed ut perspiciatis
                </p>
              </div>
              <div className="grow__box">
                <div className="grow__picture">
                  <img
                    src="../../public/05/07.webp"
                    alt="#"
                    className="grow__icon"
                  />
                </div>
                <h2 className="grow__headline">Display Text</h2>
                <p className="grow__text">
                  Sed ut perspiciatis unde omnis iste natus error <br />
                  sit voluptat accusantium doloremqlaudantium. <br />
                  Sed ut perspiciatis
                </p>
              </div>
              <div className="grow__box">
                <div className="grow__picture">
                  <img
                    src="../../public/05/08.webp"
                    alt="#"
                    className="grow__icon"
                  />
                </div>
                <h2 className="grow__headline">Display Text</h2>
                <p className="grow__text">
                  Sed ut perspiciatis unde omnis iste natus error <br />
                  sit voluptat accusantium doloremqlaudantium. <br />
                  Sed ut perspiciatis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
