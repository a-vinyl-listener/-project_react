import React from 'react'
import './Team.scss';

export const Team = () => {
  return (
    <>
      <section className="team">
        <div className="container">
          <div className="team__box">
            <h2 className="team__title">Team</h2>
            <h3 className="team__subtitle">Our Organic Experts</h3>
            <p className="team__text">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's <br /> standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="team__wrap">
            <div className="team__flashcards">
              <div className="team__image">
                <img className="team__img" src="../../public/02/10.webp" alt="#" />
              </div>
              <div className="team__inner">
                <h2 className="team__initials">Giovani Bacardo</h2>
                <div className="team__footer">
                  <p className="team__position">Farmer</p>
                  <div className="team__icon">
                    <a href="https://www.facebook.com">
                      <img src="../../public//02/14.png" alt="#" />
                    </a>
                    <a href="https://x.com">
                      <img src="../../public//02/15.png" alt="#" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team__flashcards">
              <div className="team__image">
                <img className="team__img" src="../../public//02/11.webp" alt="#" />
              </div>
              <div className="team__inner">
                <h2 className="team__initials">Giovani Bacardo</h2>
                <div className="team__footer">
                  <p className="team__position">Farmer</p>
                  <div className="team__icon">
                    <a href="https://www.instagram.com">
                      <img src="../../public//02/13.png" alt="#" />
                    </a>
                    <a href="https://www.facebook.com">
                      <img src="../../public//02/14.png" alt="#" />
                    </a>
                    <a href="https://x.com">
                      <img src="../../public//02/15.png" alt="#" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team__flashcards">
              <div className="team__image">
                <img className="team__img" src="../../public//02/12.webp" alt="#" />
              </div>
              <div className="team__inner">
                <h2 className="team__initials">Giovani Bacardo</h2>
                <div className="team__footer">
                  <p className="team__position">Farmer</p>
                  <div className="team__icon">
                    <a href="https://www.instagram.com">
                      <img src="../../public//02/13.png" alt="#" />
                    </a>
                    <a href="https://www.facebook.com">
                      <img src="../../public//02/14.png" alt="#" />
                    </a>
                    <a href="https://x.com">
                      <img src="../../public//02/15.png" alt="#" />
                    </a>
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
