import React from 'react'
import './Box.scss';

export const Box = () => {
  return (
    <>
      <section className="box">
        <div className="box__flex">
          <div className="box__img">
            <img src="../../public/01/26.webp" alt="#" className=" box__image"/>
            <div className="box__btn">
              <a href="#" className="box__linc">
                Organic Juice
              </a>
            </div>
          </div>
          <div className=" box__img">
            <img src="../../public/01/27.webp" alt="#" className=" box__image"/>
            <div className="box__btn">
              <a href="#" className="box__linc">
                Organic Food
              </a>
            </div>
          </div>
          <div className="box__img">
            <img src="../../public/01/28.webp" alt="#" className=" box__image"/>
            <div className="box__btn">
              <a href="#" className="box__linc">
                Nuts Cookis
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
