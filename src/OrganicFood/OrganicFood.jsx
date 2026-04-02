import React from "react";
import './OrganicFood.scss';

export const OrganicFood = () => {
  return (
    <>
      {/* <!-- organic-food --> */}

      <section className="organic-food">
        <div className="container">
          <div className="organic-food__wrap">
            <div className="organic-food__header">
              <p className="organic-food__period">
                <b>Posted Onи</b>: January 6, 2022
              </p>
              <div className="organic-food__row">
                <div className="organic-food__image">
                  <img src="../../public/11/02.png" alt="#" className="organic-food__img" />
                </div>
                <p className="organic-food__card"> By Rachi Card</p>
              </div>
            </div>
            <h2 className="organic-food__header-title">
              Research More Organic Food
            </h2>
            <p className="organic-food__header-text">
              Established fact that a reader will be distracted by the readable
              content of a page <br /> when looking a layout. The point of using
              Lorem Ipsum is that it has a more-or-less <br /> normal
              distribution of letters, as opposed
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
