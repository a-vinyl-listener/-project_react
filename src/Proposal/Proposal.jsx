import React from 'react'
import './Proposal.scss';

export const Proposal = () => {
  return (
    <>
      <section className="proposal">
        <div className="container">
          <div className="proposal__box">
            <h2 className="proposal__title">About Us</h2>
            <h3 className="proposal__subtitle">What We Offer for You</h3>
          </div>
          <div className="proposal__wrap">
            <div className="proposal__inner">
              <div className="proposal__image">
                <img className="proposal__img" src="../../public/02/16.webp" alt="#" />
              </div>
              <p className="proposal__text">Spicy</p>
            </div>
            <div className="proposal__inner">
              <div className="proposal__image">
                <img className="proposal__img" src="../../public//02/17.webp" alt="#" />
              </div>
              <p className="proposal__text">SNuts & Feesd</p>
            </div>
            <div className="proposal__inner">
              <div className="proposal__image">
                <img className="proposal__img" src="../../public//02/18.webp" alt="#" />
              </div>
              <p className="proposal__text">Fruits</p>
            </div>
            <div className="proposal__inner">
              <div className="proposal__image">
                <img className="proposal__img" src="../../public//02/19.webp" alt="#" />
              </div>
              <p className="proposal__text">Vegetable</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
