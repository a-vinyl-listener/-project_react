import React from "react";
import "./RaspberryBlack.scss";

export const RaspberryBlack = () => {
  return (
    <>
      {/* black-raspberry */}

      <section className="black-raspberry">
         <div className="container"> 
          <div className="black-raspberry__wrap">
            <div className="black-raspberry__inner">
              <h2 className="black-raspberry__title">Black Raspberry</h2>
              <p className="black-raspberry__subtitle">
                Established fact that a reader will be distracted by the
                readable content of a page <br /> when looking a layout. The
                point of using Lorem Ipsum is that it has a more-or-less <br />
                normal distribution of letters, as opposed
              </p>
            </div>
            <div className="black-raspberry__box">
              <ul className="black-raspberry__list">
                <li className="black-raspberry__item-title">
                  <pre>Date :</pre>
                </li>
                <li className="black-raspberry__item-title">
                  <pre>Client :</pre>
                </li>
                <li className="black-raspberry__item-title">
                  <pre>Category :</pre>
                </li>
                <li className="black-raspberry__item-title">
                  <pre>Service :</pre>
                </li>
              </ul>
              <ul className="black-raspberry__list-footer">
                <li className="black-raspberry__item">December 4, 2022</li>
                <li className="black-raspberry__item">Kevin Martin</li>
                <li className="black-raspberry__item">Agriculture , Eco</li>
                <li className="black-raspberry__item">Organic Products</li>
              </ul>
            </div>
          </div>
         </div> 
      </section>
    </>
  );
};
