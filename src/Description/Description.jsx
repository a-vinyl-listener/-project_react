import React from "react";
import "./Description.scss";

export const Description = () => {
  return (
    <>
      <section className="description">
        <div className="container">
          <div className="description__box">
            <div className="description__inner">
              <a href="#" className="description__link-product">
                Product Description
              </a>
              <a href="#" className="description__link-info">
                Additional Info
              </a>
            </div>
            <p className="description__text">
              {" "}
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              <br /> ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple <br /> sugars — such as glucose and fructose — make
              up 70% and 80% of the carbs in raw.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
